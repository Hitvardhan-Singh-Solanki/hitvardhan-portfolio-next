# Portfolio Accessibility Checklist

## 🎯 **Critical Accessibility Issues to Check**

### **1. Color Contrast**
- [ ] All text has sufficient contrast (4.5:1 for normal text, 3:1 for large text)
- [ ] Links are distinguishable from regular text
- [ ] Focus indicators are visible
- [ ] Theme toggle maintains contrast in both light/dark modes

### **2. Keyboard Navigation**
- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical and intuitive
- [ ] Focus indicators are visible
- [ ] Skip links are present (if needed)
- [ ] No keyboard traps

### **3. Screen Reader Support**
- [ ] All images have alt text
- [ ] Headings follow logical hierarchy (h1 → h2 → h3)
- [ ] Form labels are properly associated
- [ ] Decorative elements are hidden from screen readers
- [ ] Interactive elements have accessible names

### **4. Semantic HTML**
- [ ] Proper heading structure
- [ ] Lists use `<ul>`, `<ol>`, `<li>` elements
- [ ] Links have descriptive text
- [ ] Buttons have clear labels
- [ ] Navigation uses `<nav>` element

### **5. Focus Management**
- [ ] Focus is visible on all interactive elements
- [ ] Focus doesn't get trapped in modals/overlays
- [ ] Focus management for dynamic content
- [ ] Focus indicators match design system

### **6. Motion and Animation**
- [ ] Respects `prefers-reduced-motion` setting
- [ ] Animations don't cause seizures
- [ ] Important content isn't hidden behind animations
- [ ] Pause/stop controls for auto-playing content

## 🔧 **Quick Fixes for Your Portfolio**

### **1. Add Alt Text to Images**
```tsx
<Image
  src="img/svg/logo.svg"
  alt="Hitvardhan Portfolio Logo"
  width={120}
  height={100}
/>
```

### **2. Improve Button Labels**
```tsx
<button
  aria-label="Go back to previous page"
  onClick={handleBackClick}
>
  <svg aria-hidden="true">...</svg>
  <span>Back</span>
</button>
```

### **3. Add Skip Links**
```tsx
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
```

### **4. Improve Form Labels**
```tsx
<label htmlFor="email">Email Address</label>
<input id="email" type="email" />
```

### **5. Add ARIA Labels**
```tsx
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

## 🎨 **Design Considerations**

### **1. Color Accessibility**
- Test with color blindness simulators
- Ensure information isn't conveyed by color alone
- Use patterns, icons, or text alongside color

### **2. Typography**
- Font sizes are readable (minimum 16px)
- Line height provides good readability
- Font choices are accessible

### **3. Interactive Elements**
- Touch targets are at least 44px
- Hover states work on touch devices
- Interactive elements are clearly identifiable

## 🧪 **Testing Tools**

### **Browser Extensions**
- axe DevTools
- WAVE Web Accessibility Evaluator
- Color Contrast Analyzer

### **Online Tools**
- WebAIM WAVE: https://wave.webaim.org/
- axe-core: https://www.deque.com/axe/
- Lighthouse (Chrome DevTools)

### **Manual Testing**
- Keyboard-only navigation
- Screen reader testing (NVDA, JAWS, VoiceOver)
- High contrast mode testing
- Zoom testing (up to 200%)

## 📊 **Target Scores**

- **Lighthouse Accessibility**: 90-100
- **WCAG Level**: AA compliance
- **Color Contrast**: 4.5:1 minimum
- **Keyboard Navigation**: 100% accessible

## 🚀 **Quick Wins**

1. Add alt text to all images
2. Ensure proper heading hierarchy
3. Add focus indicators
4. Test keyboard navigation
5. Check color contrast ratios
6. Add ARIA labels where needed
7. Test with screen reader
8. Validate HTML structure
