# LeoCytte Pharmaceutical Consulting

A modern, responsive single-page website for LeoCytte, a pharmaceutical consulting firm specializing in global market entry for injectable and critical care products.

![LeoCytte Website](https://img.shields.io/badge/Status-Production%20Ready-success)
![Built with React](https://img.shields.io/badge/React-18.3-blue)
![Styled with Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

## 🌟 Features

- **Modern Design**: Bold blues and orange color scheme with Exo and Montserrat typography
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Scroll-triggered fade-ins, counter animations, and carousel
- **SEO Optimized**: Complete meta tags, Open Graph, and semantic HTML
- **9 Key Sections**:
  - Hero with animated tagline
  - About Us with company values
  - Services showcase (6 core offerings)
  - Market Focus (5 strategic regions)
  - Team showcase (8 professionals)
  - Statistics with animated counters
  - Client testimonials carousel
  - Contact form
  - Professional footer

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build**: Vite
- **Routing**: Wouter (client-side)
- **Animations**: Framer Motion + custom scroll animations
- **Icons**: Lucide React

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:5000`

### Build for Production

```bash
# Build static site
npm run build:client

# Output will be in dist/public/
```

## 📦 Deployment

This site is optimized for static hosting on:
- GitHub Pages (recommended)
- Netlify
- Vercel
- Any static host

See **[GITHUB_PAGES_QUICKSTART.md](GITHUB_PAGES_QUICKSTART.md)** for step-by-step deployment instructions.

## 📄 Project Structure

```
leocytte-website/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/    # Hero, About, Services, etc.
│   │   │   └── ui/          # Reusable UI components
│   │   ├── pages/
│   │   │   └── home.tsx     # Main page component
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utilities
│   │   └── index.css        # Global styles & theme
│   └── index.html
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages auto-deploy
├── design_guidelines.md     # Design system documentation
└── DEPLOYMENT.md            # Full deployment guide
```

## 🎨 Design System

### Colors
- **Primary**: Bold Blue (#0066CC)
- **Secondary**: Deep Navy (#1a2849)
- **Accent**: Vibrant Orange (#FF6B35)
- **Background**: White (#FFFFFF)

### Typography
- **Headings**: Exo (400-800 weights)
- **Body**: Montserrat (300-700 weights)

### Components
Built with shadcn/ui and Radix UI primitives for accessibility and consistency.

## 🌍 Global Markets

LeoCytte specializes in market entry for:
- 🇮🇳 India
- 🇨🇴 Colombia
- 🇧🇷 Brazil
- 🇵🇹 Portugal
- 🇲🇽 Mexico

## 📧 Contact

For inquiries, use the contact form on the website or reach out directly:

- **Website**: [Your deployed URL]
- **Email**: contact@leocytte.com (configure in contact form)
- **LinkedIn**: [Your LinkedIn]

## 📝 License

© 2025 LeoCytte Pharmaceutical Consulting. All rights reserved.

## 🔧 Development Notes

### Adding Content

- **Team members**: Edit `client/src/components/sections/team.tsx`
- **Services**: Edit `client/src/components/sections/services.tsx`
- **Testimonials**: Edit `client/src/components/sections/testimonials.tsx`
- **Markets**: Edit `client/src/components/sections/market-focus.tsx`

### Customizing Design

All design tokens are in:
- `client/src/index.css` - CSS variables and theme
- `tailwind.config.ts` - Tailwind configuration
- `design_guidelines.md` - Complete design system

## 🚧 Roadmap

Planned enhancements:
- [ ] Backend form handling with email notifications
- [ ] Multi-language support (Spanish, Portuguese)
- [ ] Blog section for industry insights
- [ ] Case studies page with detailed success stories
- [ ] Analytics integration

---

Built with ❤️ using React, TypeScript, and modern web technologies.
