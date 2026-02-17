# Interactive CV Website - Lev Kislyuk

A modern, interactive CV website built with clean design principles and smooth animations.

## Features

- 🎨 **Modern Design**: Clean, minimalist interface with smooth animations
- 🌓 **Dark Mode**: Full dark/light theme support with system preference detection
- 📱 **Fully Responsive**: Works beautifully on all devices
- ⚡ **Interactive Timeline**: Scroll-activated career journey visualization
- 📝 **Blog Section**: Dedicated space for articles and thoughts
- 💼 **Projects Showcase**: Detailed project descriptions and achievements
- 📧 **Contact Page**: Easy-to-access contact information

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - No framework dependencies
- **Iconify** - Icon library
- **Google Fonts** - Inter & JetBrains Mono

## Getting Started

### Option 1: Using pnpm (Recommended)

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The site will open automatically at `http://localhost:3000`

### Option 2: Using Python

```bash
# Python 3
python3 -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000
```

Then open `http://localhost:3000` in your browser.

### Option 3: Direct File Access

Simply open `index.html` in your web browser.

## Project Structure

```
cv-website/
├── index.html          # Homepage with hero, journey, and previews
├── blog.html          # Blog/articles page
├── projects.html      # Detailed projects showcase
├── contacts.html      # Contact information page
├── package.json       # Dependencies and scripts
├── AGENTS.md         # Development guide for AI agents
└── README.md         # This file
```

## Pages

- **Home** (`index.html`) - Hero section, career stats, interactive timeline, project previews
- **Blog** (`blog.html`) - Articles and technical writing
- **Projects** (`projects.html`) - Detailed project descriptions with achievements and tech stacks
- **Contact** (`contacts.html`) - Email, Telegram, LinkedIn, GitHub with beautiful cards

## Customization

To customize the website for your own use:

1. **Personal Information**: Update name, title, and bio in all HTML files
2. **Colors**: Modify the Tailwind config in the `<script>` tags
3. **Content**: Replace project descriptions, blog posts, and career timeline
4. **Links**: Update all social media and contact links
5. **Images**: Add your own profile pictures or project screenshots

## Design Philosophy

- **Minimalism**: Clean design with ample whitespace
- **Typography**: Professional font pairing (Inter + JetBrains Mono)
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance**: Fast loading with CDN resources
- **Consistency**: Unified design language across all pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this template for your own CV!

## Credits

- Design inspiration: Linear, Vercel, and modern product companies
- Icons: [Iconify](https://iconify.design/)
- Fonts: [Google Fonts](https://fonts.google.com/)

---

Built with ❤️ by Lev Kislyuk
