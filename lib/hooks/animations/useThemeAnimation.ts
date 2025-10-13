import { useCallback } from "react";
import { gsap } from "gsap";

interface ThemeAnimationConfig {
  duration?: number;
  ease?: string;
}

export const useThemeAnimation = (config: ThemeAnimationConfig = {}) => {
  const { duration = 0.3, ease = "power2.inOut" } = config;

  const animateThemeChange = useCallback(
    (newTheme: "light" | "dark") => {
      const root = document.documentElement;

      // Get new theme colors
      const newColors =
        newTheme === "light"
          ? {
              "--background": "#e5e5e5",
              "--foreground": "#000000",
              "--secondary": "#404040",
              "--tertiary": "#202020",
              "--card-bg": "#ffffff",
              "--card-border": "rgba(0, 0, 0, 0.12)",
              "--card-hover": "rgba(0, 0, 0, 0.04)",
              "--shadow": "rgba(0, 0, 0, 0.1)",
            }
          : {
              "--background": "#000000",
              "--foreground": "#e5e5e5",
              "--secondary": "#a8a8a8",
              "--tertiary": "#c7c7c7",
              "--card-bg": "rgba(255, 255, 255, 0.05)",
              "--card-border": "rgba(255, 255, 255, 0.1)",
              "--card-hover": "rgba(255, 255, 255, 0.08)",
              "--shadow": "rgba(0, 0, 0, 0.3)",
            };

      // Animate all CSS custom properties
      gsap.to(root, {
        ...newColors,
        duration,
        ease,
        overwrite: true,
      });
    },
    [duration, ease]
  );

  return {
    animateThemeChange,
  };
};
