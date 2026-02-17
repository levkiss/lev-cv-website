# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
pnpm install          # Install dependencies (http-server)
pnpm run dev          # Start dev server at http://localhost:3000 (opens browser)
pnpm run start        # Start dev server without auto-opening browser
```

No build step, no linter, no tests. Pages are static HTML served as-is.

**Important**: Component loading uses absolute paths (`/components/header.html`), so pages must be served from a web server — opening HTML files directly via `file://` will break header/footer loading.

## Architecture

**Static HTML site** — no framework, no build, all dependencies via CDN (Tailwind CSS, Iconify, Three.js, Google Fonts). Never install these as npm packages.

### Component Loading Pattern

Header and footer are HTML fragments in `components/` loaded at runtime via `fetch()`:
- `js/header.js` — fetches `components/header.html`, injects into `#header-placeholder`, then initializes theme toggle (`localStorage` → `prefers-color-scheme` fallback) and active page highlighting via `data-page` attributes
- `js/footer.js` — fetches `components/footer.html`, injects into `#footer-placeholder`

Every page must include both placeholder `<div>`s and both `<script>` tags. Navigation changes go in `components/header.html`, not individual pages.

### Tailwind Configuration

Each page embeds its own Tailwind config in an inline `<script>` tag in `<head>` — there is no shared `tailwind.config.js`. When adding a new page, copy the config block from an existing page. The config defines custom colors (`dark-bg`, `dark-card`, `dark-border`, `primary-*`) and fonts (`Inter`, `JetBrains Mono`).

### cv-game.html

Standalone Three.js/WebGL interactive 3D CV experience. Self-contained with its own scripts — does not share the component pattern used by other pages.

## Key Rules

- **All dependencies via CDN** — never install Tailwind, Three.js, or Iconify as npm packages
- **Dark mode is mandatory** — every element must have `dark:` variant classes
- **Tailwind CSS, NOT Bootstrap** — ignore any old Bootstrap references
- **Mobile-first** — use `sm:`, `md:`, `lg:` breakpoints
- Detailed code style, design system tokens, and content guidelines are in `.claude/rules/`
