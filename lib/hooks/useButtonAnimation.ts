"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { animateMainButtons } from "@/lib/animations";

gsap.registerPlugin(useGSAP);

/**
 * Custom hook for button stagger animations
 *
 * @param selector - CSS selector for buttons to animate (default: ".main-button")
 *
 * @example
 * ```tsx
 * useButtonAnimation(".nav-button");
 * ```
 */
export const useButtonAnimation = (selector: string = ".main-button"): void => {
  useGSAP(() => {
    animateMainButtons(selector);
  });
};
