# AGENTS.md - Portfolio Website

Guidelines for agentic coding agents working on this codebase.

## Project Overview

- **Type**: Static vanilla HTML/CSS/JS portfolio website
- **Purpose**: Personal portfolio showcasing Godot games and web development
- **Tech Stack**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **No build system**: Open `index.html` directly in a browser

## Commands

### Running the Project

```bash
# Open in default browser (Linux)
xdg-open index.html

# Or use a simple HTTP server
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Linting

No linter configured. To run one:

```bash
# HTML validation
npx htmlhint index.html

# CSS linting
npx stylelint style.css

# JS linting
npx eslint theme.js
```

### Testing

No automated tests. Test by opening `index.html` in a browser.

## Code Style Guidelines

### HTML

- Use semantic HTML5 elements (`<main>`, `<section>`, `<article>`, etc.)
- Include `lang="en"` on `<html>`, viewport meta tag
- Always include `alt` text for images
- Use `aria-*` attributes for accessibility
- Use `loading="lazy"` on images below the fold
- Use `type="button"` on buttons

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Page Title</title>
    <link href="style.css" rel="stylesheet" />
  </head>
  <body>
    <main>
      <section aria-labelledby="heading-id">
        <h2 id="heading-id">Section Title</h2>
      </section>
    </main>
  </body>
</html>
```

### CSS

- Use CSS custom properties in `:root` for theming
- Use kebab-case for class names (e.g., `.project-card`)
- Use `rem` for font sizes, `px` for borders
- Add `:focus-visible` styles for keyboard navigation
- Support light/dark themes with CSS variables
- Use mobile-first responsive design
- 2-space indentation

```css
:root {
  --bg-dark: #1f1f1f;
  --text-light: #ffffff;
  --focus-color: #4a90e2;
}

body {
  background-color: var(--bg-dark);
  color: var(--text-light);
}

.button:focus-visible {
  outline: 3px solid var(--focus-color);
  outline-offset: 2px;
}
```

### JavaScript

- Use `const` by default, `let` when needed, avoid `var`
- Use template literals for string interpolation
- Use arrow functions for callbacks
- Use camelCase for variables/functions
- Store preferences in `localStorage`
- Update ARIA attributes when state changes
- Handle errors gracefully - don't break the page

```javascript
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeBtn.setAttribute("aria-pressed", "true");
}

themeBtn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-mode");
  themeBtn.setAttribute("aria-pressed", isLight ? "true" : "false");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
```

## Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Files | lowercase-kebab | `theme.js`, `style.css` |
| CSS classes | kebab-case | `.project-card` |
| JS variables | camelCase | `themeBtn` |
| HTML ids | camelCase/kebab | `themeBtn`, `projects-heading` |
| Constants | UPPER_SNAKE_CASE | `MAX_WIDTH` |

## Accessibility (A11y)

- Semantic HTML elements
- Proper heading hierarchy (h1 -> h2 -> h3)
- `aria-label` on icon-only buttons
- `aria-pressed` for toggle buttons
- `aria-hidden` on decorative SVGs
- `alt` text for all images
- Keyboard navigation with focus states
- Focus visible outlines

## Importing Resources

- CSS: `<link href="style.css" rel="stylesheet" />`
- JS: `<script src="theme.js" defer></script>`
- Fonts: Use system fonts or Google Fonts with `display: swap`
- Images: Place in `assets/` folder

## File Structure

```
portfolio/
├── index.html      # Main HTML
├── style.css       # Stylesheet
├── theme.js        # Theme toggle
├── assets/         # Images/icons
│   ├── sun.svg
│   ├── moon.svg
│   └── *.png
└── .gitignore
```

## Current Features

- Light/dark theme toggle with localStorage persistence
- Project cards with hover animations
- Responsive design
- Email link with SVG icon
- Footer with copyright

## Common Tasks

### Adding a Project

1. Add project card HTML in the projects section
2. Add image to `assets/` folder
3. Update CSS if needed

### Adding a New Section

1. Add `<section>` with `aria-labelledby` attribute
2. Add corresponding heading with unique id
3. Style in `style.css`

## Notes for Agents

- Keep solutions simple - no npm, no frameworks
- Test changes in a browser
- Prioritize accessibility
- Don't overcomplicate - this is a simple portfolio
