"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { animateStagger } from "@/lib/animations";

gsap.registerPlugin(useGSAP);

/**
 * Custom hook for stagger animations on card grids
 *
 * @param selector - CSS selector for elements to animate
 * @param delay - Optional delay before animation starts (default: 0)
 *
 * @example
 * ```tsx
 * useStaggerAnimation(".project-card");
 * ```
 */
export const useStaggerAnimation = (
  selector: string,
  delay: number = 0
): void => {
  useGSAP(() => {
    animateStagger(selector, delay);
  });
};
