import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface PageAnimationConfig {
  from?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  to?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
}

interface PageAnimationReturn {
  elementRef: React.RefObject<HTMLElement>;
  animateIn: () => void;
  animateOut: () => void;
}

export const usePageAnimation = (
  config: PageAnimationConfig = {}
): PageAnimationReturn => {
  const elementRef = useRef<HTMLElement>(null);
  const {
    from = { opacity: 0, y: 20 },
    to = { opacity: 1, y: 0 },
    duration = 0.6,
    delay = 0,
    ease = "power2.out",
  } = config;

  const animateIn = () => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current, from, {
        ...to,
        duration,
        delay,
        ease,
        overwrite: true,
      });
    }
  };

  const animateOut = () => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        ...from,
        duration,
        ease,
        overwrite: true,
      });
    }
  };

  useEffect(() => {
    // Auto-animate on mount
    animateIn();
  }, [animateIn]);

  return {
    elementRef,
    animateIn,
    animateOut,
  };
};

export const useStaggerAnimation = (
  config: PageAnimationConfig & { selector?: string } = {}
) => {
  const {
    selector = ".project-card",
    from = { opacity: 0, y: 20 },
    to = { opacity: 1, y: 0 },
    duration = 0.6,
    delay = 0,
    stagger = 0.15,
    ease = "power2.out",
  } = config;

  const animateIn = () => {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      // Set initial state
      gsap.set(elements, from);

      // Animate in with stagger
      gsap.to(elements, {
        ...to,
        duration,
        delay,
        stagger,
        ease,
        overwrite: true,
      });
    }
  };

  useEffect(() => {
    // Use a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      animateIn();
    }, 100);

    return () => clearTimeout(timer);
  }, [selector, animateIn]); // Add selector and animateIn as dependencies

  return {
    animateIn,
  };
};
