# Animation System Guide

## Overview

This portfolio now uses a **centralized animation system** that combines GSAP for JavaScript animations and CSS keyframes for styling animations. This approach ensures consistency, maintainability, and reusability across the entire application.

## Architecture

### 1. **Centralized Configuration**

#### `/lib/animations.ts`
- Contains all GSAP animation configurations and helper functions
- Defines animation constants (durations, easings, delays)
- Provides reusable animation functions for common patterns

#### `/app/animations.scss`
- Contains all CSS keyframe animations
- Imported globally via `globals.scss`
- Provides animation utility classes

### 2. **Custom Hooks**

Located in `/lib/hooks/`:

- **`useStaggerAnimation`** - For staggered animations on card grids
- **`useHeroAnimation`** - For hero section animations
- **`useButtonAnimation`** - For button stagger animations

## Usage

### GSAP Animations (JavaScript)

#### Using Custom Hooks

```tsx
"use client";
import { useStaggerAnimation } from "@/lib/hooks";

export default function MyComponent() {
  // Animate cards with stagger effect
  useStaggerAnimation(".card");
  
  return (
    <div>
      <div className="card opacity-0">Card 1</div>
      <div className="card opacity-0">Card 2</div>
      <div className="card opacity-0">Card 3</div>
    </div>
  );
}
```

#### Available Hooks

```tsx
// Stagger animation with optional delay
useStaggerAnimation(".selector", 0.25);

// Hero section animation
useHeroAnimation({
  dpSelector: ".profile-pic",
  contentSelector: ".hero-content"
});

// Button animations
useButtonAnimation(".my-button");
```

#### Creating Custom Animations

```tsx
import { createTimeline, ANIMATION_CONFIGS } from "@/lib/animations";

const tl = createTimeline({ delay: 0.5 });
tl.to(".element", ANIMATION_CONFIGS.fadeInUp.to);
```

### CSS Animations

#### Using Animation Classes

```tsx
<div className="animate-fadeInUp">
  Fades in and slides up
</div>

<div className="animate-fadeIn animation-delay-200">
  Fades in with delay
</div>
```

#### Available CSS Animations

- `fadeInUp` - Fade in with slide up
- `fadeIn` - Simple fade in
- `slideInLeft` - Slide in from left
- `slideInRight` - Slide in from right
- `scaleIn` - Scale in effect
- `pulse` - Pulsing effect (infinite)
- `bounce` - Bounce effect (infinite)
- `rotate` - 360° rotation
- `shimmer` - Shimmer loading effect

#### Using in SCSS

```scss
.my-element {
  animation: fadeInUp 0.6s ease-out;
}

.hero-section {
  animation: fadeInUp 0.6s ease-out 0.2s both;
}
```

## Animation Constants

### Durations
```typescript
ANIMATION_DURATIONS.fast    // 0.3s
ANIMATION_DURATIONS.normal  // 0.5s
ANIMATION_DURATIONS.slow    // 0.75s
ANIMATION_DURATIONS.verySlow // 1s
```

### Easings
```typescript
ANIMATION_EASINGS.default   // "power2.inOut"
ANIMATION_EASINGS.smooth    // "power2.out"
ANIMATION_EASINGS.bounce    // "back.out(1.7)"
ANIMATION_EASINGS.elastic   // "elastic.out(1, 0.3)"
```

### Delays
```typescript
ANIMATION_DELAYS.none    // 0
ANIMATION_DELAYS.short   // 0.1s
ANIMATION_DELAYS.medium  // 0.25s
ANIMATION_DELAYS.long    // 0.5s
```

## Best Practices

### 1. **Choose the Right Animation Type**

- **GSAP** for complex, sequenced animations (hero sections, timelines)
- **CSS** for simple, declarative animations (fade-ins, hover effects)

### 2. **Reuse Existing Patterns**

Before creating custom animations, check if an existing hook or configuration fits your needs:

```tsx
// ✅ Good - Reuses existing hook
useStaggerAnimation(".my-cards");

// ❌ Avoid - Creates duplicate code
useGSAP(() => {
  gsap.to(".my-cards", { y: -10, opacity: 1, stagger: 0.2 });
});
```

### 3. **Set Initial States**

Elements being animated should have initial opacity:

```tsx
// With GSAP
<div className="card opacity-0">Content</div>

// With CSS
<div className="animate-fadeInUp">Content</div>
```

### 4. **Use Animation Delays**

For sequential animations, use delay utilities:

```scss
.hero-section {
  animation: fadeInUp 0.6s ease-out;
}

.stats-section {
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.content-section {
  animation: fadeInUp 0.6s ease-out 0.4s both;
}
```

## Migration from Old System

All components have been migrated to use the centralized system:

| Component | Old | New |
|-----------|-----|-----|
| Hero | Custom GSAP code | `useHeroAnimation()` |
| Work/Projects/Blogs | Custom GSAP code | `useStaggerAnimation()` |
| Certificates | Custom GSAP code | `useStaggerAnimation()` |
| Main Buttons | Custom GSAP code | `useButtonAnimation()` |
| CSS Animations | Duplicated in each SCSS | Centralized in `animations.scss` |

## Adding New Animations

### Adding a GSAP Animation

1. Add configuration to `/lib/animations.ts`:
```typescript
export const ANIMATION_CONFIGS = {
  // ... existing configs
  myNewAnimation: {
    opacity: 1,
    x: 0,
    duration: ANIMATION_DURATIONS.normal,
    ease: ANIMATION_EASINGS.smooth,
  },
};
```

2. Create a helper function (optional):
```typescript
export const animateMyElement = (selector: string): gsap.core.Timeline => {
  const tl = createTimeline();
  tl.to(selector, ANIMATION_CONFIGS.myNewAnimation);
  return tl;
};
```

3. Create a hook (optional):
```typescript
// /lib/hooks/useMyAnimation.ts
export const useMyAnimation = (selector: string): void => {
  useGSAP(() => {
    animateMyElement(selector);
  });
};
```

### Adding a CSS Animation

1. Add keyframe to `/app/animations.scss`:
```scss
@keyframes myAnimation {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-myAnimation {
  animation: myAnimation 0.6s ease-out;
}
```

2. Use in your components:
```tsx
<div className="animate-myAnimation">Content</div>
```

## Troubleshooting

### Animation Not Working

1. **Check initial state**: Elements animated with GSAP should start with `opacity-0`
2. **Check selector**: Ensure your CSS selector matches the element
3. **Check timing**: Use browser DevTools to inspect animation timing
4. **Check imports**: Ensure hooks are imported from `@/lib/hooks`

### Performance Issues

1. **Limit animated elements**: Don't animate too many elements at once
2. **Use CSS transforms**: Prefer `transform` over `left/top` for better performance
3. **Optimize stagger**: Reduce stagger count for large lists

## Summary

The centralized animation system provides:

✅ **Consistency** - All animations follow the same patterns  
✅ **Maintainability** - Single source of truth for animations  
✅ **Reusability** - Hooks and utilities for common patterns  
✅ **Performance** - Optimized animations using GSAP and CSS  
✅ **Developer Experience** - Clear APIs and documentation  

For questions or improvements, refer to the animation configuration files or create custom hooks following the existing patterns.

