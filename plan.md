# Development Rules & Requirements

- **Stack & Structure**: Use semantic HTML5 + custom CSS (no frameworks). Follow BEM naming and W3C validation.
- **Accessibility**: WCAG 2.2 AA compliant, ARIA roles for sliders, skip-to-content, keyboard + screen reader support.
- **Responsiveness**: It should be properly responsive to all the browsers and devices.
- **Cross-browser**: Ensure compatibility with Chrome, Firefox, Safari, Edge (latest 2 versions) + iOS/Android browsers.
- **Hero Section**: Dual-axis slider (horizontal & vertical), auto-play, swipe, pause on hover, and accessible controls.
- **Participating School Logos**: Continuous sling animation; pause on hover/focus.
- **Choose the School**: Four cards on desktop; responsive grid.
- **Exhibition Section**: Entire section as a slider with 3–6 highlight cards; accessible.
- **QA Criteria**: Validate HTML/CSS, accessibility via axe, test on key devices.

---

# Project Status and Plan

## File Structure

```
/
├── index.html                  # Main Landing Page
├── css/
│   ├── base.css                # Base styles & typography
│   ├── components.css          # Reusable components
│   ├── reset.css               # CSS Reset
│   ├── styles.css              # Section-specific styles
│   └── variables.css           # CSS Variables
├── js/
│   ├── hero.js                 # Hero carousel logic
│   ├── main.js                 # Features slider & general logic
│   └── navbar.js               # Navbar interactions
└── assets/
    ├── images/
    │   ├── addmission.png      # Feature Icon
    │   ├── aga.png             # Aga Khan Logo
    │   ├── cbse.png            # K-12 CBSE Category
    │   ├── curriculum.png      # Feature Icon
    │   ├── exclusive.png       # Feature Icon
    │   ├── explore.png         # Feature Icon
    │   ├── harrow.png          # Harrow Logo
    │   ├── heritage.png        # Heritage Category
    │   ├── interact.png        # Feature Icon
    │   ├── international.png   # International Category
    │   ├── kings.png           # King's College Logo
    │   ├── leaf.png            # Stats Wreath
    │   ├── preschool.png       # Pre-School Category
    │   ├── schedule.png        # Schedule Background
    │   ├── shrewsbury.png      # Shrewsbury Logo
    │   └── tibs.png            # TISB Logo
    └── logos/
        └── logo-2.png          # Navbar Logo
```

## Task Progress

### Completed Sections

- [x] **Navbar & Hero Section**
  - Implemented responsive navbar with updated logo.
  - Hero slider with infinite animation and glassmorphism.
- [x] **Participating Schools Section**
  - "Trusted by" stats.
  - Grid of participating school logos (local assets).
- [x] **Choose the School That Fits You Best**
  - 4-column grid displaying school categories.
  - Hover effects and responsive layout.
- [x] **Schedule Section**
  - Split layout with gradient overlay and background image.
  - Typography matches design.
- [x] **Features/Exhibition Section** ("Must-Visit")
  - Horizontal card slider (Vanilla JS).
  - Deep Purple theme with custom icons (`addmission`, `interact`, etc.).
  - Adjustable bottom white curve.
- [x] **Footer Section**
  - Contact details (Corporate/Ahmedabad).
  - Social links and Copyright bar.
  - Typography size optimized per request.

### Final Steps

- [x] **QA & Validation**
  - Responsive check (Mobile/Desktop).
  - Visual fidelity check against design images.
- [ ] **Deployment** (Ready for upload)
