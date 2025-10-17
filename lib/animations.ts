/**
 * Centralized Animation Configuration
 *
 * This file contains all GSAP animation configurations and constants
 * to ensure consistency across the application.
 */

import { gsap } from "gsap";
import {
  useHoverAnimation,
  usePageAnimation,
  useStaggerAnimation,
  useThemeAnimation,
} from "./hooks/animations";

// Check if device is mobile
const isMobileDevice = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
};

// Animation durations
export const ANIMATION_DURATIONS = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.75,
  verySlow: 1,
} as const;

// Animation easings
export const ANIMATION_EASINGS = {
  default: "power2.inOut",
  smooth: "power2.out",
  bounce: "back.out(1.7)",
  elastic: "elastic.out(1, 0.3)",
} as const;

// Animation delays
export const ANIMATION_DELAYS = {
  none: 0,
  short: 0.1,
  medium: 0.25,
  long: 0.5,
} as const;

// Common animation configurations
export const ANIMATION_CONFIGS = {
  // Fade in with slide up
  fadeInUp: {
    from: {
      opacity: 0,
      y: 20,
    },
    to: {
      opacity: 1,
      y: 0,
      duration: ANIMATION_DURATIONS.normal,
      ease: ANIMATION_EASINGS.smooth,
    },
  },

  // Stagger animation for lists/grids
  stagger: {
    opacity: 1,
    y: -10,
    duration: ANIMATION_DURATIONS.slow,
    ease: ANIMATION_EASINGS.default,
    stagger: 0.2,
  },

  // Card hover scale
  cardHover: {
    scale: 1.05,
    duration: ANIMATION_DURATIONS.fast,
    ease: ANIMATION_EASINGS.default,
  },

  // Expand animation (for hero section)
  expandCenter: {
    hrExpand: {
      width: "100%",
      duration: ANIMATION_DURATIONS.normal,
      ease: ANIMATION_EASINGS.default,
    },
    contentShow: {
      height: "auto",
      opacity: 1,
      duration: ANIMATION_DURATIONS.normal,
      ease: ANIMATION_EASINGS.default,
    },
  },

  // Bounce animation
  bounce: {
    y: 15,
    duration: ANIMATION_DURATIONS.normal,
    ease: ANIMATION_EASINGS.default,
    yoyo: true,
    repeat: -1,
  },
} as const;

/**
 * Create a timeline with default settings
 */
export const createTimeline = (
  config: gsap.TimelineVars = {}
): gsap.core.Timeline => {
  return gsap.timeline({
    duration: ANIMATION_DURATIONS.slow,
    ease: ANIMATION_EASINGS.default,
    ...config,
  });
};

/**
 * Stagger animation helper for card grids
 */
export const animateStagger = (
  selector: string,
  delay: number = ANIMATION_DELAYS.none
): gsap.core.Timeline => {
  const tl = createTimeline({ delay });

  // Skip animations on mobile - set elements to final state immediately
  if (isMobileDevice()) {
    gsap.set(selector, { opacity: 1, y: 0 });
    return tl;
  }

  tl.to(selector, ANIMATION_CONFIGS.stagger);
  return tl;
};

/**
 * Main buttons stagger animation
 */
export const animateMainButtons = (
  selector: string = ".main-button"
): gsap.core.Timeline => {
  const tl = createTimeline({
    delay: ANIMATION_DELAYS.none,
  });

  // Skip animations on mobile - set elements to final state immediately
  if (isMobileDevice()) {
    gsap.set(selector, { opacity: 1, y: 0 });
    return tl;
  }

  tl.to(selector, {
    opacity: 1,
    y: -20,
    stagger: 0.2,
    delay: 1,
    duration: ANIMATION_DURATIONS.slow,
    ease: ANIMATION_EASINGS.default,
  });

  return tl;
};

/**
 * Theme transition animation
 */
export const animateThemeTransition = (newTheme: "light" | "dark") => {
  const root = document.documentElement;

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

  return gsap.to(root, {
    ...newColors,
    duration: ANIMATION_DURATIONS.fast,
    ease: ANIMATION_EASINGS.default,
    overwrite: true,
  });
};

// Export animation hooks for convenience
export {
  useHoverAnimation,
  usePageAnimation,
  useStaggerAnimation,
  useThemeAnimation,
};
