# LeoCytte Pharmaceutical Consulting Website

## Overview

LeoCytte is a single-page pharmaceutical consulting website built with React, TypeScript, and Express. The application showcases a pharmaceutical consulting company specializing in global market entry for injectable and critical care products, with 25+ years of experience in international markets including India, Colombia, Brazil, Portugal, and Mexico.

The website features a modern, bold design inspired by contemporary digital agencies, utilizing the Exo and Montserrat font families, with a color palette of bold blue (#0066CC), deep navy (#1a2849), vibrant orange (#FF6B35), and white backgrounds.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Wouter for client-side routing, configured for a single-page application with a home route and 404 fallback.

**UI Component Library**: shadcn/ui (New York style variant) built on Radix UI primitives, providing accessible and customizable components. Components are configured with path aliases pointing to `@/components` for easy imports.

**Styling System**: 
- Tailwind CSS for utility-first styling with custom configuration
- CSS custom properties for theming (light mode focused)
- Google Fonts integration (Exo for headings, Montserrat for body text)
- Custom gradient utilities and animations for scroll-based reveals

**State Management**: TanStack Query (React Query) for server state management with configured query client. Local component state managed with React hooks.

**Component Structure**: Sectional architecture with dedicated components for each page section (Hero, About, Services, Market Focus, Statistics, Team, Testimonials, Contact, Footer), all composed in the Home page component.

**Design Patterns**:
- Custom hooks for scroll animations (`useScrollAnimation`) and responsive behavior (`useIsMobile`)
- Intersection Observer API for fade-in animations on scroll
- Controlled forms with React Hook Form integration
- Toast notifications via shadcn/ui toast system

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Development Setup**: Custom Vite middleware integration for hot module replacement during development, with separate production build configuration.

**API Structure**: Centralized route registration in `server/routes.ts` with `/api` prefix convention (currently minimal implementation as this is primarily a static website).

**Data Layer**: In-memory storage implementation (`MemStorage` class) providing a simple CRUD interface for user data. The storage interface is designed to be swappable with database-backed implementations.

**Build Process**: 
- Client-side: Vite builds React application to `dist/public`
- Server-side: esbuild bundles Express server to `dist/index.js`
- Production deployment serves static assets and API routes from single Express server

### Design System

**Typography Hierarchy**:
- Hero headlines: 64px desktop / 40px mobile (Exo bold)
- Section headers: 48px desktop / 32px mobile (Exo semi-bold)
- Body text: 16-18px (Montserrat regular/medium)

**Color System**: Custom CSS properties defining primary, secondary, accent, and muted color scales with HSL values for easy manipulation.

**Component Variants**: Class Variance Authority (CVA) for type-safe component variant management across buttons, badges, and other UI elements.

**Spacing System**: Tailwind's default spacing scale (4px increments) with consistent vertical rhythm (py-20 to py-32 for sections).

**Responsive Strategy**: Mobile-first approach with breakpoints at 768px for tablet and standard desktop breakpoints, using CSS Grid for multi-column layouts.

## External Dependencies

### UI Framework & Components
- **@radix-ui/\***: Headless UI component primitives for accessibility and keyboard navigation (accordion, dialog, dropdown-menu, select, toast, tooltip, etc.)
- **shadcn/ui**: Pre-styled component library built on Radix UI primitives
- **lucide-react**: Icon library for consistent iconography
- **embla-carousel-react**: Carousel functionality for testimonials

### Forms & Validation
- **react-hook-form**: Form state management with performance optimization
- **@hookform/resolvers**: Integration layer for validation libraries
- **zod**: Schema validation for form inputs
- **drizzle-zod**: Zod schema generation from Drizzle ORM schemas

### State Management & Data Fetching
- **@tanstack/react-query**: Asynchronous state management for server data
- **wouter**: Lightweight client-side routing

### Styling & Design
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variant management
- **clsx** & **tailwind-merge**: Utility for conditional className composition
- **autoprefixer**: CSS vendor prefix automation

### Database & ORM
- **drizzle-orm**: TypeScript ORM for type-safe database queries
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-kit**: Schema migration and management tools
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used in current implementation)

### Build Tools & Development
- **vite**: Fast build tool and development server with HMR
- **@vitejs/plugin-react**: React support for Vite
- **esbuild**: Server-side bundler for production builds
- **tsx**: TypeScript execution for development
- **@replit/vite-plugin-\***: Replit-specific development plugins (cartographer, dev-banner, runtime-error-modal)

### Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **cmdk**: Command menu component

### TypeScript & Type Safety
- Full TypeScript coverage across client and server code
- Shared schema definitions between frontend and backend
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

### Font Loading
- Google Fonts CDN for Exo and Montserrat font families
- Preconnect optimization for font loading performance