"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer p-2 hover:text-sky-500 transition-colors relative"
      aria-label="Toggle Theme"
    >
      <Moon size={20} className="hidden dark:block" />
      <Sun size={20} className="block dark:hidden" />
    </button>
  );
}
