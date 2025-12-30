# Development Rules & Requirements

- **Stack & Structure**: Use semantic HTML5 + custom CSS (no frameworks). Follow BEM naming and W3C validation.
- **Accessibility**: WCAG 2.2 AA compliant, ARIA roles for sliders, skip-to-content, keyboard + screen reader support.
- **Responsiveness**: It should be properly responsive to all the browsers and devices.
- **Cross-browser**: Ensure compatibility with Chrome, Firefox, Safari, Edge (latest 2 versions) + iOS/Android browsers.
- **Hero Section**: Dual-axis slider (horizontal & vertical), auto-play, swipe, pause on hover, and accessible controls.
- **Participating School Logos**: Continuous sling animation with alternating left–right and right–left flow; pause on hover/focus.
- **Choose the School**: Four cards on desktop; convert to mobile slider with swipe + pagination dots.
- **Exhibition Section**: Entire section as a slider with 3–6 highlight cards; accessible, consistent height, auto-play optional.
- **QA Criteria**: Validate HTML/CSS, accessibility via axe, test on key devices, animations honor prefers-reduced-motion.

---

# Project Status and Plan

## File Structure

```
/
├── index.html                  # Main Landing Page
├── css/
│   ├── base.css                # Base styles & typography
│   ├── components.css          # Reusable components (buttons, pills, cards)
│   ├── reset.css               # CSS Reset
│   ├── styles.css              # Section-specific styles (Hero, Participation, Choose School)
│   └── variables.css           # CSS Variables (Colors, spacing)
├── js/
│   ├── hero.js                 # Hero carousel logic
│   ├── main.js                 # Main entry point overrides
│   └── navbar.js               # Navbar interactions
└── assets/
    ├── images/
    │   ├── aga.png             # Aga Khan Logo
    │   ├── cbse.png            # K-12 CBSE Category
    │   ├── harrow.png          # Harrow Logo
    │   ├── heritage.png        # Heritage Category
    │   ├── international.png   # International Category
    │   ├── kings.png           # King's College Logo
    │   ├── leaf.png            # Stats Wreath
    │   ├── preschool.png       # Pre-School Category
    │   ├── shrewsbury.png      # Shrewsbury Logo
    │   └── tibs.png            # TISB Logo
    └── logos/
        └── logo-2.png          # Navbar Logo
```

## Task Progress

### Completed Sections

- [x] **Navbar & Hero Section**
  - Implemented responsive navbar with updated logo (`logo-2.png`).
  - Hero slider with infinite animation and glassmorphism lead form.
- [x] **Participating Schools Section**
  - "Trusted by" stats with wreath visuals (`leaf.png`).
  - Grid of participating school logos using local assets (`harrow`, `shrewsbury`, `kings`, `tibs`, `aga`).
- [x] **Choose the School That Fits You Best**
  - 4-column grid displaying school categories.
  - Implemented using local assets (`preschool.png`, `cbse.png`, `heritage.png`, `international.png`).
  - Hover effects and responsive layout.

### Pending Tasks

- [ ] **Schedule Section** (Logistics & Timing)
- [ ] **Feature Section** (Exhibition Highlights)
- [ ] **Footer** (Contact & Links)
