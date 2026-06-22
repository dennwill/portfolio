"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const SPACING = 30; // px between dots
const DOT_RADIUS = 1.4; // base dot radius
const INTERACTION_RADIUS = 140; // px around cursor that reacts
const REPEL_STRENGTH = 28; // max px a dot is pushed away
const REST_OPACITY = 0.15;
const ACTIVE_OPACITY = 0.9;
const EASE = 0.12; // lerp factor toward target each frame

interface Dot {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  opacity: number;
}

export default function InteractiveDotGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const themeRef = useRef(resolvedTheme);
  themeRef.current = resolvedTheme;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: Dot[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = 0;

    // Mouse position in canvas-local coords; off-screen by default.
    const mouse = { x: -9999, y: -9999, active: false };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const dotColor = (alpha: number) =>
      themeRef.current === "dark"
        ? `rgba(255, 255, 255, ${alpha})`
        : `rgba(15, 23, 42, ${alpha})`;

    const buildGrid = () => {
      const rect = container.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      // Center the grid with a small inset so edges look even.
      const cols = Math.floor(width / SPACING);
      const rows = Math.floor(height / SPACING);
      const offsetX = (width - cols * SPACING) / 2 + SPACING / 2;
      const offsetY = (height - rows * SPACING) / 2 + SPACING / 2;

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = offsetX + c * SPACING;
          const y = offsetY + r * SPACING;
          dots.push({ baseX: x, baseY: y, x, y, opacity: REST_OPACITY });
        }
      }
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = dotColor(REST_OPACITY);
      for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.baseX, dot.baseY, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (const dot of dots) {
        let targetX = dot.baseX;
        let targetY = dot.baseY;
        let targetOpacity = REST_OPACITY;
        let scale = 1;

        if (mouse.active) {
          const dx = dot.baseX - mouse.x;
          const dy = dot.baseY - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < INTERACTION_RADIUS) {
            const force = 1 - dist / INTERACTION_RADIUS; // 1 near cursor -> 0 at edge
            const angle = Math.atan2(dy, dx);
            const push = force * REPEL_STRENGTH;
            targetX = dot.baseX + Math.cos(angle) * push;
            targetY = dot.baseY + Math.sin(angle) * push;
            targetOpacity = REST_OPACITY + (ACTIVE_OPACITY - REST_OPACITY) * force;
            scale = 1 + force * 1.6;
          }
        }

        dot.x += (targetX - dot.x) * EASE;
        dot.y += (targetY - dot.y) * EASE;
        dot.opacity += (targetOpacity - dot.opacity) * EASE;

        ctx.beginPath();
        ctx.fillStyle = dotColor(dot.opacity);
        ctx.arc(dot.x, dot.y, DOT_RADIUS * scale, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Only treat as active when the cursor is over the hero area.
      mouse.active = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      mouse.x = x;
      mouse.y = y;
    };

    const handleMouseLeaveWindow = () => {
      mouse.active = false;
    };

    const start = () => {
      buildGrid();
      if (reduceMotion.matches) {
        drawStatic();
        return;
      }
      window.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeaveWindow);
      rafId = requestAnimationFrame(render);
    };

    const stop = () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
    };

    start();

    const resizeObserver = new ResizeObserver(() => {
      buildGrid();
      if (reduceMotion.matches) drawStatic();
    });
    resizeObserver.observe(container);

    const handleMotionChange = () => {
      stop();
      start();
    };
    reduceMotion.addEventListener("change", handleMotionChange);

    return () => {
      stop();
      resizeObserver.disconnect();
      reduceMotion.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
    </div>
  );
}
