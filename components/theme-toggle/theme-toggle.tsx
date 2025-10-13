"use client";

import { useTheme } from "@/context/theme-context";
import { Moon, Sun } from "lucide-react";
import { useHoverAnimation } from "@/lib/hooks/animations";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const buttonAnimation = useHoverAnimation({ scale: 1.1, duration: 0.2 });

  return (
    <button
      ref={buttonAnimation.elementRef}
      onClick={toggleTheme}
      onMouseEnter={buttonAnimation.handleMouseEnter}
      onMouseLeave={buttonAnimation.handleMouseLeave}
      className="p-2 rounded-lg hover:bg-[var(--card-hover)]"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-[var(--foreground)]" />
      ) : (
        <Sun className="w-5 h-5 text-[var(--foreground)]" />
      )}
    </button>
  );
}
