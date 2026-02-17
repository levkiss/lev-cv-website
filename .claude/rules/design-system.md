# Design System

## Colors

- **Primary Blue**: `#3b82f6` (primary-500) for CTAs, active states, link hovers
- **Primary Dark**: `#2563eb` (primary-600) for hover states on buttons
- **Backgrounds Light**: white for cards, zinc-50 for page
- **Backgrounds Dark**: `#0A0A0A` (dark-bg), `#111111` (dark-card), `#222222` (dark-border)
- **Text Light**: zinc-900 (headings), zinc-600 (body), zinc-500 (secondary)
- **Text Dark**: zinc-100 (headings), zinc-300 (body), zinc-400 (secondary)
- **Accent per project**: blue, emerald, purple, orange for project card themes

## Typography

- **Font Family**: `font-sans` = Inter, `font-mono` = JetBrains Mono
- **Hero Heading**: `text-5xl sm:text-7xl font-semibold tracking-tight`
- **Section Titles**: `text-2xl` to `text-3xl font-semibold`
- **Body**: `text-sm` to `text-lg`
- **Labels/Tags**: `text-xs uppercase tracking-wider font-medium`
- **Font smoothing**: antialiased, `font-feature-settings: "cv05", "cv11", "ss01"`

## Spacing

- **Section padding**: `py-24` to `py-32`
- **Container**: `max-w-6xl mx-auto px-6`
- **Card padding**: `p-6` to `p-8`
- **Grid gap**: `gap-6`

## Components

- **Cards**: `bg-white dark:bg-dark-card border border-zinc-200 dark:border-dark-border rounded-xl` or `rounded-2xl`
- **Glass Panel**: `glass-panel` class — `rgba(255,255,255,0.7)` / `rgba(10,10,10,0.7)` with `backdrop-filter: blur(12px)`
- **Buttons**: `bg-primary-500 hover:bg-primary-600 text-white rounded-lg px-4 py-2`
- **Tags/Badges**: `bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded-full px-3 py-1`

## Animations

- **Micro-interactions**: 200-300ms duration
- **Major transitions**: 500ms duration
- **Easing**: `cubic-bezier(0.25, 0.8, 0.25, 1)`
- **Card hover**: `translateY(-2px)` with shadow change
- **Opacity fade-in**: for scroll-triggered elements
- **Custom**: `pulse-slow` = 3s pulse for subtle breathing effects

## Icons

Use Iconify with `solar` icon set:
```html
<iconify-icon icon="solar:icon-name-linear" width="20"></iconify-icon>
```
