"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-50">
      <div
        className="h-full bg-gradient-to-r from-[#ff6b6b] via-[#ee9ca7] to-[#d3a6ff] dark:from-[#f06292] dark:via-[#ba68c8] dark:to-[#9575cd] transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}
