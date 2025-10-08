/**
 * Centralized Animation Configuration
 *
 * This file contains all GSAP animation configurations and constants
 * to ensure consistency across the application.
 */

import { gsap } from "gsap";

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
 * Hero section animation helper
 */
export const animateHero = (config?: {
  dpSelector?: string;
  hrSelector?: string;
  contentSelector?: string;
  downArrowSelector?: string;
}): gsap.core.Timeline => {
  const {
    dpSelector = ".dp",
    hrSelector = ".expand-center > hr",
    contentSelector = ".main-content",
    downArrowSelector = ".go-down",
  } = config || {};

  const tl = createTimeline({
    delay: ANIMATION_DELAYS.medium,
  });

  // Skip animations on mobile - set elements to final state immediately
  if (isMobileDevice()) {
    gsap.set(dpSelector, { opacity: 1, scale: 1, y: 0 });
    gsap.set(hrSelector, { width: "100%" });
    gsap.set(contentSelector, { opacity: 1, height: "auto" });
    return tl;
  }

  // Expand horizontal lines
  tl.to(hrSelector, ANIMATION_CONFIGS.expandCenter.hrExpand)
    // Show content
    .from(contentSelector, { height: "0px" })
    .to(contentSelector, ANIMATION_CONFIGS.expandCenter.contentShow)
    // Show profile picture
    .to(dpSelector, {
      opacity: 1,
      scale: 0.8,
      y: -10,
      duration: ANIMATION_DURATIONS.normal,
    });

  // Animate down arrow separately (infinite loop)
  if (downArrowSelector) {
    const arrowTl = gsap.timeline({
      yoyo: true,
      repeat: -1,
      ease: ANIMATION_EASINGS.default,
      duration: ANIMATION_DURATIONS.normal,
    });
    arrowTl.to(downArrowSelector, ANIMATION_CONFIGS.bounce);
  }

  return tl;
};

/**
 * Main buttons stagger animation
 */
export const animateMainButtons = (
  selector: string = ".main-button"
): gsap.core.Timeline => {
  const tl = createTimeline({
    delay: ANIMATION_DELAYS.medium,
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
 * Certificate cards stagger animation
 */
export const animateCertificates = (
  selector: string = ".certificate"
): gsap.core.Timeline => {
  const tl = createTimeline({
    delay: ANIMATION_DELAYS.medium,
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
    duration: ANIMATION_DURATIONS.normal,
    ease: ANIMATION_EASINGS.default,
  });

  return tl;
};
