# Portfolio Accessibility Improvements

## 🎯 **Priority Fixes**

### **1. Improve Alt Text Descriptions**

#### **Current Issues:**
- Generic alt text like "Hero", "photo"
- Missing context for screen readers

#### **Recommended Fixes:**
```tsx
// Before
<Image src="/img/png/main.png" alt="Hero" />

// After
<Image 
  src="/img/png/main.png" 
  alt="Hitvardhan Sharma - Senior Full-Stack Developer portrait" 
/>
```

### **2. Add Skip Navigation**
```tsx
// Add to layout or navbar
<a 
  href="#main-content" 
  className="skip-link sr-only focus:not-sr-only"
>
  Skip to main content
</a>
```

### **3. Improve Heading Structure**
```tsx
// Ensure proper hierarchy
<h1>Hitvardhan Sharma</h1>  // Only one per page
<h2>About Me</h2>
<h3>Experience</h3>
<h4>Frontend Developer</h4>
```

### **4. Add Focus Indicators**
```scss
// Add to globals.scss
*:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary);
  color: var(--background);
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

### **5. Improve Button Accessibility**
```tsx
// Back button improvements
<button
  onClick={handleBackClick}
  className="flex items-center gap-2"
  aria-label="Go back to previous page"
>
  <svg aria-hidden="true" className="w-5 h-5">
    <path d="M12.5 15L7.5 10L12.5 5" />
  </svg>
  <span>Back</span>
</button>
```

### **6. Add ARIA Landmarks**
```tsx
// Navigation
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="/about">About</a></li>
    <li><a href="/work">Work</a></li>
  </ul>
</nav>

// Main content
<main id="main-content">
  {/* Page content */}
</main>

// Footer
<footer aria-label="Site footer">
  {/* Footer content */}
</footer>
```

### **7. Improve Form Accessibility**
```tsx
// Contact form improvements
<label htmlFor="name">Full Name</label>
<input 
  id="name" 
  type="text" 
  required 
  aria-describedby="name-error"
/>
<div id="name-error" role="alert" aria-live="polite">
  {/* Error message */}
</div>
```

### **8. Add Live Regions for Dynamic Content**
```tsx
// For theme changes, loading states
<div aria-live="polite" aria-label="Theme status">
  {theme === 'dark' ? 'Dark theme enabled' : 'Light theme enabled'}
</div>
```

## 🧪 **Testing Checklist**

### **Manual Testing:**
- [ ] Tab through all interactive elements
- [ ] Test with screen reader (VoiceOver on Mac)
- [ ] Check color contrast ratios
- [ ] Test keyboard navigation
- [ ] Verify heading hierarchy
- [ ] Test with high contrast mode

### **Automated Testing:**
- [ ] Run Lighthouse accessibility audit
- [ ] Use axe DevTools extension
- [ ] Test with WAVE WebAIM
- [ ] Validate HTML structure

## 📊 **Target Accessibility Score**

- **Lighthouse Accessibility**: 95-100
- **WCAG 2.1 Level**: AA
- **Color Contrast**: 4.5:1 minimum
- **Keyboard Navigation**: 100%

## 🚀 **Quick Implementation Steps**

1. **Add skip links** to main navigation
2. **Improve alt text** for all images
3. **Add ARIA labels** to interactive elements
4. **Test keyboard navigation** thoroughly
5. **Check color contrast** in both themes
6. **Add focus indicators** for better visibility
7. **Test with screen reader** for real-world usage

## 🎨 **Design System Accessibility**

### **Color Contrast:**
- Primary color: #fca311 (check contrast ratios)
- Ensure 4.5:1 ratio for normal text
- Ensure 3:1 ratio for large text (18px+)

### **Typography:**
- Minimum 16px font size
- Line height of 1.5 for readability
- Clear font hierarchy

### **Interactive Elements:**
- Minimum 44px touch targets
- Clear hover/focus states
- Consistent interaction patterns
