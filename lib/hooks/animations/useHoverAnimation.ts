import { useRef, useCallback } from "react";
import { gsap } from "gsap";

interface HoverAnimationConfig {
  scale?: number;
  y?: number;
  x?: number;
  rotation?: number;
  duration?: number;
  ease?: string;
}

interface HoverAnimationReturn {
  elementRef: React.RefObject<HTMLElement>;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export const useHoverAnimation = (
  config: HoverAnimationConfig = {}
): HoverAnimationReturn => {
  const elementRef = useRef<HTMLElement>(null);
  const {
    scale = 1.05,
    y = -4,
    x = 0,
    rotation = 0,
    duration = 0.3,
    ease = "power2.out",
  } = config;

  const handleMouseEnter = useCallback(() => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        scale,
        y,
        x,
        rotation,
        duration,
        ease,
        overwrite: "auto", // Better overwrite handling
        force3D: true, // Force hardware acceleration
      });
    }
  }, [scale, y, x, rotation, duration, ease]);

  const handleMouseLeave = useCallback(() => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        scale: 1,
        y: 0,
        x: 0,
        rotation: 0,
        duration,
        ease,
        overwrite: "auto", // Better overwrite handling
        force3D: true, // Force hardware acceleration
      });
    }
  }, [duration, ease]);

  return {
    elementRef,
    handleMouseEnter,
    handleMouseLeave,
  };
};
