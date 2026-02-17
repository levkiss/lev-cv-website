# Code Style

## HTML

- Use semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Every page must include `lang="en"` and `class="scroll-smooth"` on `<html>`
- Include meta viewport: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Use Tailwind utility classes — no custom CSS unless absolutely necessary
- Keep `<style>` blocks minimal and only for things Tailwind can't handle (e.g., glass-panel, timeline SVG)

## Tailwind

- Dark mode via `class` strategy — always add `dark:` variants
- Responsive: mobile-first with `sm:`, `md:`, `lg:` prefixes
- Prefer Tailwind classes over inline styles
- Tailwind config is embedded in `<script>` tags per page — not in a config file

## JavaScript

- Vanilla JS only — no frameworks, no jQuery, no TypeScript
- Component loading pattern: `fetch()` HTML fragment → inject into placeholder `<div>`
- Theme toggle: check `localStorage`, fall back to `prefers-color-scheme`
- Use `const`/`let` (never `var`), arrow functions, template literals
- No module bundler — scripts loaded directly with `<script src="...">`

## Page Template

Every new page must follow this structure:
1. `<head>` with fonts, Tailwind CDN, Iconify CDN, inline Tailwind config, minimal `<style>`
2. `<div id="header-placeholder"></div>` at top of `<body>`
3. `<main>` with page content
4. `<div id="footer-placeholder"></div>` at bottom
5. `<script src="js/header.js"></script>` and `<script src="js/footer.js"></script>`

## File Organization

- HTML pages at root level
- Reusable HTML fragments in `components/`
- JavaScript in `js/`
- Images in `assets/`
- No nested directories beyond one level
