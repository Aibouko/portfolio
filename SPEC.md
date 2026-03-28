# SPEC.md - Portfolio Website Redesign

## Overview

Redesign a minimal static portfolio website with an Asian/anime-inspired aesthetic using a light blue dominant color scheme. The portfolio showcases Godot game development and web development work, positioning the owner as a job-seeking developer.

**Why this matters:**
- Creates a memorable, cohesive brand impression that stands out to recruiters
- Asian/anime aesthetic appeals to the gaming/tech industry culture
- Light blue theme feels fresh, approachable, and professional
- Job-seeking elements clearly communicate availability

**Who uses this:**
- Recruiters and hiring managers evaluating the developer
- Potential collaborators or clients
- Peers in the game development community

---

## Functional Requirements

### MUST HAVE

1. **Single light blue theme**
   - Remove dark/light theme toggle functionality
   - Implement cohesive light blue color scheme throughout
   - Update all CSS variables and color references

2. **Hero section improvements**
   - Update tagline to communicate job-seeking status
   - Add GitHub profile icon/link alongside email icon
   - Implement subtle scroll-down arrow indicator

3. **New Skills section**
   - Insert between hero and projects sections
   - Display skill badges: Godot, GDScript, HTML, CSS, JavaScript, Git
   - Use visual pill-shaped badge design

4. **Project descriptions**
   - Add one-sentence description to Gesture Drawing App project
   - Add one-sentence description to Bullet Hell project
   - Descriptions must explain what each project does

5. **Footer enhancement**
   - Add "Available for hire" or equivalent text
   - Maintain existing copyright information

6. **Remove theme toggle JavaScript**
   - Remove theme toggle button from HTML
   - Remove theme toggle logic from JavaScript
   - Optionally clean up localStorage theme preference

### NICE TO HAVE

7. **Smooth scroll behavior**
   - Add CSS `scroll-behavior: smooth`
   - Enable smooth scrolling to anchor links

8. **Content fade-in animations**
   - Add subtle fade-in animation for sections on scroll
   - Respect `prefers-reduced-motion` media query

9. **External link indicators**
   - Add visual indicator (icon or text) showing project links open externally
   - Maintain accessibility with proper aria-labels

---

## User Stories

**As a recruiter visiting the portfolio:**
- I want to immediately see that the developer is seeking work, so I know they're available
- I want to quickly scan their tech stack, so I can match them to relevant positions
- I want to understand what each project does without clicking, so I can assess their work efficiently
- I want easy access to their GitHub and email, so I can review code or contact them

**As a peer developer viewing the portfolio:**
- I want to see their skills clearly displayed, so I understand their expertise
- I want to see project descriptions, so I know if their work interests me
- I want a visually appealing experience, so I enjoy browsing their portfolio

**As a visitor on a mobile device:**
- I want the site to load quickly, so I'm not waiting for heavy assets
- I want the layout to adapt to my screen, so content is readable
- I want animations to respect my motion preferences, so I don't experience discomfort

---

## Non-Functional Requirements

### Performance
- Page must load in under 2 seconds on 3G connection
- No external dependencies (fonts, libraries, frameworks)
- All assets must be optimized and under 500KB total

### Accessibility
- Maintain WCAG 2.1 AA compliance
- Support keyboard navigation (Tab, Enter, Escape)
- Proper focus indicators and ARIA labels
- Respect `prefers-reduced-motion` media query

### Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px+
- Touch-friendly tap targets (minimum 44x44px)

---

## Acceptance Criteria

### Theme Implementation

**Scenario: Single theme display**
- **Given** I visit the portfolio website
- **When** the page fully loads
- **Then** I see a consistent light blue color scheme
- **And** there is no theme toggle button visible
- **And** the color scheme feels cohesive across all sections

**Scenario: Theme toggle removal**
- **Given** the theme toggle button previously existed
- **When** I view the updated portfolio
- **Then** the theme toggle button is no longer present
- **And** the JavaScript no longer attempts to toggle themes
- **And** localStorage theme preferences are ignored or cleaned up

### Hero Section

**Scenario: Job-seeking tagline**
- **Given** I am viewing the hero section
- **When** I read the subtitle/tagline
- **Then** I see text indicating the developer is seeking opportunities
- **And** the tagline clearly states their focus (games and websites)

**Scenario: GitHub profile access**
- **Given** I am in the hero section
- **When** I look at the icon row
- **Then** I see a GitHub icon alongside the email icon
- **And** clicking it navigates to the GitHub profile
- **And** it has proper aria-label for accessibility

**Scenario: Scroll indicator**
- **Given** I am on the hero section
- **When** I look below the icon row
- **Then** I see a subtle scroll-down arrow or indicator
- **And** it hints that there is more content below
- **And** it has a gentle animation (bounce or pulse)

### Skills Section

**Scenario: Skills visibility**
- **Given** I scroll down from the hero section
- **When** I reach the skills area
- **Then** I see a section heading (e.g., "Skills" or "Tech Stack")
- **And** I see pill-shaped badges for: Godot, GDScript, HTML, CSS, JavaScript, Git
- **And** the badges are styled consistently with the light blue theme

**Scenario: Skills layout**
- **Given** I am viewing the skills section
- **When** I view on different screen sizes
- **Then** the badges wrap appropriately on mobile
- **And** they display in a clean grid or row on desktop

### Project Descriptions

**Scenario: Gesture Drawing App description**
- **Given** I am viewing the Gesture Drawing App project card
- **When** I look at the project details
- **Then** I see the title "Gesture Drawing App"
- **And** I see the description "Practice figure drawing with timed reference images"
- **And** the description clearly explains the project's purpose

**Scenario: Bullet Hell description**
- **Given** I am viewing the Bullet Hell project card
- **When** I look at the project details
- **Then** I see the title "Bullet Hell"
- **And** I see the description "Top-down shooter with dynamic enemy patterns"
- **And** the description clearly explains the project's purpose

### Footer

**Scenario: Job availability indicator**
- **Given** I scroll to the bottom of the page
- **When** I view the footer
- **Then** I see text indicating "Available for hire" or similar
- **And** the copyright information is still present
- **And** both elements are clearly readable

---

## Design Specifications

### Color Palette

**Primary Colors:**
- Background: `#E8F4F8` (Soft powder blue/off-white)
- Primary Text: `#2C3E50` (Deep navy-blue)
- Accent: `#87CEEB` (Anime-style sky blue)

**Secondary Colors:**
- Secondary: `#B0E0E6` (Soft cyan)
- Hover/Active: `#D6EAF8` (Ice blue tint)
- Border/Divider: `#AED6F1` (Light steel blue)
- Subtle background: `#F0F8FF` (Alice blue for cards)

**Contrast Requirements:**
- Text on background: Minimum 4.5:1 contrast ratio
- Interactive elements: Minimum 3:1 contrast ratio

### Typography

**Font Stack:**
- Primary: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Fallback: `Arial, sans-serif`

**Hierarchy:**
- H1 (Name): `clamp(2.5rem, 8vw + 1rem, 5rem)`, weight 700, letter-spacing -0.02em
- H2 (Section headings): `clamp(1.5rem, 5vw, 2.5rem)`, weight 600
- H3 (Project titles): `1.5rem`, weight 600
- Body: `1rem` (16px), weight 400, line-height 1.6
- Small/Captions: `0.875rem`, weight 400

### Spacing System (8px grid)

- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)
- 3xl: 6rem (96px)

**Section Spacing:**
- Hero: min-height 100vh, content centered
- Between sections: 3xl (6rem/96px)
- Container padding: lg (2rem/32px) on mobile, xl (3rem/48px) on desktop

### Visual Elements

**Border Radius:**
- Buttons/icons: 8px
- Cards: 12px
- Skill badges: 24px (pill shape)
- Images: 8px

**Shadows:**
- Subtle: `0 2px 8px rgba(44, 62, 80, 0.08)`
- Card hover: `0 8px 24px rgba(44, 62, 80, 0.12)`

**Asian/Anime Aesthetic Principles:**
- Generous negative space (Japanese "Ma")
- Soft, diffused shadows (not harsh)
- Clean lines with rounded corners
- Subtle gradients for depth
- Breathing room between elements
- Smooth, organic animations

### Animations

**Scroll Indicator:**
- Gentle bounce animation
- Duration: 2s infinite
- Easing: ease-in-out

**Card Hover:**
- Transform: translateY(-4px)
- Shadow increase
- Duration: 300ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

**Button/Link Hover:**
- Background color transition
- Duration: 200ms
- Easing: ease

**Reduced Motion:**
- If `prefers-reduced-motion: reduce`, disable all animations
- Keep transitions for state changes (hover, focus) but make them instant or very fast

---

## Constraints

### Technical Stack
- **HTML5**: Semantic markup, no frameworks
- **CSS3**: Custom properties, flexbox/grid, no preprocessors
- **JavaScript**: Vanilla ES6+, no libraries, defer loading
- **Assets**: Use existing images in `/assets/` folder only

### Hosting
- Must work on GitHub Pages
- No server-side processing
- Relative paths for all assets
- No environment variables or build steps

### Performance Budget
- Total page weight: < 500KB
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

### File Structure
```
portfolio/
├── index.html          # Single HTML file
├── style.css           # All styles
├── theme.js            # Minimal JS (remove toggle)
├── assets/
│   ├── bullethell.jpg
│   ├── gesturedrawing.png
│   └── [existing files]
└── SPEC.md             # This file
```

### Accessibility Requirements
- All interactive elements must be keyboard accessible
- Color is not the only means of conveying information
- Focus states must be clearly visible
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- ARIA labels on icon-only buttons

---

## Implementation Notes

### Existing Code Preservation
- Maintain existing HTML semantic structure where possible
- Keep existing project image paths and alt text
- Preserve existing accessibility attributes (aria-label, aria-hidden, etc.)
- Retain `loading="lazy"` on images

### Changes to Existing Files

**index.html:**
- Remove theme toggle button markup
- Add GitHub icon/link in hero
- Add scroll indicator element
- Insert new Skills section
- Update project card markup to include descriptions
- Update footer content

**style.css:**
- Replace all color variables with light blue palette
- Remove dark mode styles
- Add Skills section styles
- Add scroll indicator styles and animation
- Update hover states with new colors
- Maintain existing responsive breakpoints

**theme.js:**
- Remove theme toggle event listeners
- Remove theme class toggling logic
- Remove localStorage theme operations
- Keep file for potential future use, or delete if empty

---

## Success Metrics

The redesign is successful when:
1. ✅ All MUST HAVE requirements are implemented
2. ✅ Design maintains Asian/anime aesthetic with light blue theme
3. ✅ Page loads in under 2 seconds
4. ✅ Works on mobile, tablet, and desktop
5. ✅ Passes accessibility checks (keyboard navigation, color contrast)
6. ✅ No console errors
7. ✅ All links work correctly
