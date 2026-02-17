## Interactive CV Website

Personal CV/portfolio site with a standard CV, projects, blog, and an experimental interactive 3D CV "game", built with static HTML, Tailwind via CDN, and small vanilla JS helpers.

## Running locally

Pages load shared header/footer components via `fetch()`, so they must be served over HTTP (not opened via `file://`).

- **Using pnpm**

```bash
pnpm install
pnpm run dev    # http://localhost:3000
```

- **Using Python**

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000` in your browser.

## Structure

- `index.html` – main CV/overview
- `projects.html` – projects listing
- `blog.html` – articles
- `contacts.html` – contact details
- `cv-game.html` – interactive 3D CV experience

## Tech

- HTML + Tailwind CSS (CDN)
- Vanilla JavaScript
- Iconify (icons)
- Google Fonts (Inter, JetBrains Mono)
