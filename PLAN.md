# PLAN.md - Portfolio Redesign Implementation

## Architecture

**Tech Stack:**
- HTML5 semantic markup (no frameworks)
- CSS3 custom properties, flexbox/grid (no preprocessors)
- Vanilla JavaScript ES6+ (no libraries)
- Static files hosted on GitHub Pages

**File Structure:**
```
portfolio/
├── index.html          # HTML structure and content
├── style.css           # All styles, light blue theme
├── theme.js            # Minimal JS (remove toggle logic)
├── assets/             # Existing images
└── PLAN.md             # This file
```

**Patterns:**
- Mobile-first responsive design
- CSS custom properties for theming
- Semantic HTML5 elements
- Progressive enhancement
- Accessibility-first approach

---

## Implementation Steps

### Phase 1: HTML Structure Updates

**Step 1: Remove theme toggle button from hero** [Est: 10min]
- [ ] Remove the `<button id="themeBtn">` element and its contents from hero section
- [ ] Remove sun and moon SVG icons within the button
- [ ] Keep email link and add space for GitHub link
- File: `index.html`

**Step 2: Add GitHub profile link in hero** [Est: 15min]
- [ ] Add GitHub icon SVG (Material Design or similar) in icon-row
- [ ] Create `<a>` tag linking to https://github.com/Aibouko
- [ ] Add proper aria-label: "View Aibouko's GitHub profile"
- [ ] Add `target="_blank" rel="noopener noreferrer"`
- [ ] Style with same hover/focus behavior as email link
- File: `index.html`

**Step 3: Add scroll-down indicator to hero** [Est: 15min]
- [ ] Add scroll indicator element after icon-row in hero-content
- [ ] Use chevron-down or arrow-down SVG icon
- [ ] Add CSS class `scroll-indicator`
- [ ] Add aria-label: "Scroll down to see more content"
- [ ] Wrap in link pointing to #projects or just visual indicator
- File: `index.html`

**Step 4: Update hero tagline to job-seeking** [Est: 10min]
- [ ] Change hero subtitle from "I make games and websites"
- [ ] New text: "Godot game developer & web developer. Building interactive experiences and looking for opportunities."
- [ ] Keep semantic markup with `<p>` tag
- File: `index.html`

**Step 5: Add Skills section** [Est: 20min]
- [ ] Insert new `<section class="skills" aria-labelledby="skills-heading">` between hero and projects
- [ ] Add `<h2 id="skills-heading">Skills</h2>`
- [ ] Create container div for skill badges
- [ ] Add 6 skill badges: Godot, GDScript, HTML, CSS, JavaScript, Git
- [ ] Each badge: `<span class="skill-badge">Skill Name</span>`
- [ ] Add appropriate spacing classes
- File: `index.html`

**Step 6: Update project cards with descriptions** [Est: 15min]
- [ ] In Gesture Drawing App card: add `<p class="project-description">Practice figure drawing with timed reference images</p>` after h3
- [ ] In Bullet Hell card: add `<p class="project-description">Top-down shooter with dynamic enemy patterns</p>` after h3
- [ ] Place descriptions inside `.project-card` but after tags div
- File: `index.html`

**Step 7: Update footer content** [Est: 10min]
- [ ] Add "Available for hire" or "Open to opportunities" text before copyright
- [ ] Keep copyright line: "© 2026 Aibouko. All rights reserved."
- [ ] Use semantic `<p>` tags or `<small>` for new text
- File: `index.html`

---

### Phase 2: CSS Styling

**Step 8: Replace color variables with light blue palette** [Est: 20min]
- [ ] Update `:root` CSS variables:
  - `--bg-primary: #E8F4F8` (main background)
  - `--text-primary: #2C3E50` (main text)
  - `--accent: #87CEEB` (sky blue accent)
  - `--bg-secondary: #F0F8FF` (card backgrounds)
  - `--hover: #D6EAF8` (hover states)
  - `--border: #AED6F1` (borders)
  - `--focus: #5DADE2` (focus color)
- [ ] Update body background and color to use new variables
- [ ] Remove dark mode CSS entirely
- File: `style.css`

**Step 9: Update existing component styles for new theme** [Est: 25min]
- [ ] Update `.hero-content::after` gradient to use light blue tones
- [ ] Update `.theme-btn, .email-link` hover states with new colors
- [ ] Update `.project-card` border and hover shadow colors
- [ ] Update focus states with new accent color
- [ ] Update footer opacity/color for new background
- [ ] Remove all `body.light-mode` selectors
- File: `style.css`

**Step 10: Add Skills section styles** [Est: 20min]
- [ ] Create `.skills` section styles with proper spacing (margin-top: 6rem)
- [ ] Style `.skills h2` with section heading typography
- [ ] Create `.skill-badge` styles:
  - Background: `var(--bg-secondary)`
  - Color: `var(--text-primary)`
  - Padding: 0.5rem 1rem
  - Border-radius: 24px (pill shape)
  - Font-size: 0.9rem
  - Display: inline-block
- [ ] Add `.skills-container` with flexbox/grid for badge layout
- [ ] Add gap between badges (0.75rem)
- File: `style.css`

**Step 11: Add scroll indicator styles** [Est: 15min]
- [ ] Create `.scroll-indicator` styles:
  - Position: absolute or relative at bottom of hero
  - Margin-top: 3rem
  - Opacity: 0.6
- [ ] Add bounce animation keyframes:
  ```css
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
  }
  ```
  - Duration: 2s infinite
  - Easing: ease-in-out
- [ ] Add hover state (opacity: 1)
- File: `style.css`

**Step 12: Add project description styles** [Est: 10min]
- [ ] Create `.project-description` styles:
  - Font-size: 0.95rem
  - Color: slightly muted (opacity: 0.85)
  - Margin-top: 0.75rem
  - Line-height: 1.5
- File: `style.css`

**Step 13: Update spacing and typography** [Est: 15min]
- [ ] Add `scroll-behavior: smooth` to html element
- [ ] Update hero h1 letter-spacing to -0.02em
- [ ] Add consistent section spacing (6rem/96px between sections)
- [ ] Update container padding for mobile/desktop
- [ ] Ensure 8px grid spacing consistency throughout
- File: `style.css`

**Step 14: Add reduced motion support** [Est: 10min]
- [ ] Verify existing `@media (prefers-reduced-motion: reduce)` exists
- [ ] Ensure animations respect this media query
- [ ] Keep hover/focus transitions but make instant if reduced motion preferred
- File: `style.css`

---

### Phase 3: JavaScript Cleanup

**Step 15: Remove theme toggle logic** [Est: 15min]
- [ ] Open theme.js file
- [ ] Remove all theme toggle event listeners
- [ ] Remove `localStorage.getItem('theme')` and `localStorage.setItem('theme')` calls
- [ ] Remove `document.body.classList.add('light-mode')` logic
- [ ] Remove theme button element references
- [ ] Option A: Keep file empty/minimal for future use
- [ ] Option B: Delete file entirely and remove script tag from HTML
- File: `theme.js` and `index.html` (if deleting)

**Step 16: Clean up localStorage (optional)** [Est: 5min]
- [ ] Add one-time cleanup: `localStorage.removeItem('theme')` in theme.js
- [ ] Or just leave it (doesn't break anything)
- File: `theme.js`

---

### Phase 4: Testing and Polish

**Step 17: Test in browser** [Est: 15min]
- [ ] Open index.html in browser
- [ ] Verify light blue theme displays correctly
- [ ] Check scroll indicator animation works
- [ ] Verify skills section displays with proper styling
- [ ] Check project descriptions are visible
- [ ] Verify footer shows "Available for hire"
- [ ] Test hover states on all interactive elements
- [ ] Test keyboard navigation (Tab, Enter)
- [ ] Check color contrast (text readable on background)
- File: All files (browser testing)

**Step 18: Responsive testing** [Est: 15min]
- [ ] Test on mobile viewport (320px width)
- [ ] Test on tablet viewport (768px width)
- [ ] Test on desktop viewport (1024px+ width)
- [ ] Verify skill badges wrap correctly on mobile
- [ ] Check project cards stack vertically on mobile
- [ ] Ensure tap targets are minimum 44x44px
- File: All files (browser dev tools)

**Step 19: Accessibility verification** [Est: 10min]
- [ ] Verify heading hierarchy (h1 → h2 → h3)
- [ ] Check all images have alt text
- [ ] Verify aria-labels on icon-only buttons
- [ ] Test keyboard navigation flow
- [ ] Check focus indicators are visible
- File: All files

---

## Dependencies

**External:**
- None (vanilla HTML/CSS/JS)

**Internal:**
- Existing project images in `/assets/` folder must remain:
  - `gesturedrawing.png`
  - `bullethell.jpg`

**No installation required** - GitHub Pages compatible static files only.

---

## Risks and Mitigation

**Risk 1: Breaking existing functionality**
- *Mitigation:* Make incremental changes, test after each major step
- *Test:* Open in browser after HTML changes, verify structure is valid

**Risk 2: Color contrast issues (accessibility)**
- *Mitigation:* Use WebAIM contrast checker on text colors
- *Test:* Verify all text passes WCAG AA (4.5:1 ratio)

**Risk 3: Mobile layout breaks**
- *Mitigation:* Test on multiple viewport sizes during implementation
- *Test:* Use browser dev tools responsive mode

**Risk 4: Missing files or broken paths**
- *Mitigation:* Verify all asset paths use relative paths
- *Test:* Check browser console for 404 errors

**Risk 5: Animation performance**
- *Mitigation:* Use CSS transforms only (GPU accelerated)
- *Avoid:* Animating layout properties (width, height, margin)
- *Test:* Check performance tab in dev tools

---

## Estimated Timeline

**Total: ~3.5 hours (210 minutes)**

- Phase 1 (HTML): ~95 minutes
- Phase 2 (CSS): ~115 minutes  
- Phase 3 (JS): ~20 minutes
- Phase 4 (Testing): ~40 minutes

**Recommended approach:** Complete one phase at a time, testing in browser before moving to next phase.

---

## Success Criteria

✅ All 6 MUST HAVE requirements implemented
✅ Light blue Asian/anime aesthetic applied
✅ Page loads fast (< 2 seconds)
✅ Responsive on all devices
✅ Accessible (keyboard navigation, proper ARIA, contrast)
✅ No console errors
✅ All links work correctly
