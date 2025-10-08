"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { animateHero } from "@/lib/animations";

gsap.registerPlugin(useGSAP);

/**
 * Custom hook for hero section animations
 *
 * @param config - Optional configuration for custom selectors
 *
 * @example
 * ```tsx
 * useHeroAnimation({
 *   dpSelector: ".profile-pic",
 *   contentSelector: ".hero-content"
 * });
 * ```
 */
export const useHeroAnimation = (config?: {
  dpSelector?: string;
  hrSelector?: string;
  contentSelector?: string;
  downArrowSelector?: string;
}): void => {
  useGSAP(() => {
    animateHero(config);
  });
};
