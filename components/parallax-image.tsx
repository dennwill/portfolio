"use client";

import Image from "next/image";
import { useState, useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ParallaxImage({ src, alt, width, height }: ParallaxImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const angleX = ((mouseY - centerY) / centerY) * 15;
    const angleY = ((centerX - mouseX) / centerX) * 15;

    setRotateX(-angleX);
    setRotateY(angleY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={containerRef}
      className="perspective"
      style={{
        perspective: "1200px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.05 : 1})`,
          transformStyle: "preserve-3d" as const,
          transition: isHovered ? "none" : "transform 0.3s cubic-bezier(0.23, 1, 0.320, 1)",
        }}
        className="relative"
      >
        <div
          className="rounded-xl filter drop-shadow-lg overflow-hidden"
          style={{
            boxShadow: isHovered
              ? `0 25px 50px -12px rgba(0, 0, 0, 0.3),
                 ${rotateY * 2}px ${rotateX * 2}px 30px rgba(0, 0, 0, 0.2)`
              : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease-out",
          }}
        >
          <Image width={width} height={height} src={src} alt={alt} className="rounded-xl" priority />
        </div>

        {/* Shine effect overlay */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              background: `radial-gradient(
                circle at ${50 + rotateY * 3}% ${50 + rotateX * 3}%,
                rgba(255, 255, 255, 0.1) 0%,
                rgba(255, 255, 255, 0) 50%
              )`,
            }}
          />
        )}
      </div>
    </div>
  );
}
