# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is **Krishi Shah's Portfolio Website** - a modern, recruiter-focused Next.js portfolio showcasing expertise in Data Analytics, Software Development, and AI/ML. Built with Next.js 15, TypeScript, Tailwind CSS, and deployed on Vercel.

**Live Demo:** https://krishi11.vercel.app

## Common Development Commands

### Package Management
This project uses `pnpm` for package management (lockfile: `pnpm-lock.yaml`), though `npm` commands also work.

```bash
# Install dependencies
pnpm install
# or
npm install

# Add new dependency
pnpm add [package-name]
# or
npm install [package-name]
```

### Development Server
```bash
# Start development server (Next.js dev mode with hot reload)
pnpm dev
# or 
npm run dev

# Server runs on http://localhost:3000
```

### Build & Production
```bash
# Create production build
pnpm build
# or
npm run build

# Start production server (requires build first)
pnpm start
# or
npm run start

# Lint code
pnpm lint
# or
npm run lint
```

### Component Generation
When creating new UI components, use the existing patterns:

```bash
# Add new shadcn/ui component
npx shadcn@latest add [component-name]
```

## Architecture & Code Organization

### Project Structure
```
├── app/                    # Next.js App Router structure
│   ├── layout.tsx         # Root layout with metadata, fonts, analytics
│   ├── page.tsx          # Main homepage - single-page application
│   ├── globals.css       # Global styles and CSS variables
│   ├── sitemap.ts        # SEO sitemap generation
│   └── robots.ts         # SEO robots.txt
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components (Button, Card, etc.)
│   ├── [feature]-card.tsx # Feature-specific cards (project-card, experience-card)
│   ├── [section]-section.tsx # Page sections (skills-section, blog-section)
│   └── [utility].tsx     # Utility components (theme-toggle, tech-decoration)
├── lib/
│   └── utils.ts          # Utility functions (cn, classname merging)
├── hooks/                # Custom React hooks
├── public/               # Static assets (images, resume, icons)
└── styles/               # Additional styles
```

### Key Architecture Patterns

#### Single-Page Application (SPA)
- Everything is rendered in `app/page.tsx` as sections
- Navigation uses scroll-to-section with smooth scrolling
- No separate pages/routes - all content on homepage

#### Component System
- **UI Components**: shadcn/ui based design system in `components/ui/`
- **Feature Components**: Reusable cards and sections with consistent APIs
- **Layout Components**: Header, footer, navigation with responsive design

#### Styling Architecture
- **Tailwind CSS**: Utility-first styling with custom theme extensions
- **CSS Variables**: Design tokens defined in `globals.css` for theme consistency
- **Dark Mode**: Supported via next-themes with class-based toggling
- **Animations**: Framer Motion for micro-interactions and page transitions

#### State Management
- React hooks for local component state
- No global state management (Redux/Zustand) needed
- Theme state managed by next-themes provider

### Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS with custom theme
- **UI Library**: Radix UI primitives via shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **3D Graphics**: Three.js with React Three Fiber
- **Package Manager**: pnpm (preferred) / npm

## Key Features & Business Logic

### Portfolio Sections
1. **Hero/Home**: Introduction with key metrics and CTAs
2. **About**: Background, vision, education, skills showcase
3. **Experience**: Professional timeline with quantified achievements
4. **Projects**: Featured portfolio projects with business impact
5. **Resume**: Downloadable CV with ATS optimization
6. **Insights/Blog**: Technical writing samples and case studies
7. **Contact**: Contact form and professional links

### SEO & Performance Optimization
- Comprehensive metadata in `layout.tsx`
- JSON-LD structured data for search engines
- Optimized images with Next.js Image component
- Sitemap and robots.txt generation
- 90+ Lighthouse performance scores targeted

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Collapsible navigation for mobile devices
- Touch-friendly interactions and spacing
- Optimized for both desktop and mobile experiences

## Development Guidelines

### Component Development
- Use TypeScript interfaces for all component props
- Follow the established naming convention: `[feature]-[type].tsx`
- Implement proper accessibility (ARIA labels, semantic HTML)
- Use Framer Motion for consistent animations

### Styling Patterns
- Use Tailwind utility classes over custom CSS
- Leverage the custom color palette (cyan/blue gradients)
- Follow the glassmorphism design system (backdrop-blur, transparency)
- Maintain consistent spacing and typography scales

### Content Updates
- Project data: Update directly in `app/page.tsx` ProjectCard components
- Skills: Modify SkillsSection component arrays
- Experience: Update ExperienceCard components with new roles
- Resume: Replace PDF in `public/resume/` directory

### Asset Management
- Images: Store in `public/images/` or use external CDN links
- Resume: Place PDF in `public/resume/Krishi_Shah_Resume.pdf`
- Icons: Use Lucide React icons consistently
- Favicons: Update in `public/` root and reference in layout.tsx

## Deployment & Environment

### Vercel Deployment
- Automatic deployments from main branch
- Environment variables in Vercel dashboard
- Custom domain: krishi11.vercel.app

### Environment Variables
```bash
NEXT_PUBLIC_SITE_URL=https://krishi11.vercel.app
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Build Configuration
- TypeScript and ESLint errors ignored during builds (`next.config.mjs`)
- Images unoptimized for compatibility
- Tailwind purges unused styles automatically

## Important Notes

### Personal Information
- Owner: Krishi Shah (Computer Science student at York University)
- Current Role: Software Developer Co-op at Government of Ontario
- Focus Areas: Data Analytics, Software Development, AI/ML
- Contact: krishi12@my.yorku.ca, LinkedIn: krishi-shah312

### Content Strategy
- **Recruiter-Focused**: Designed to attract data analytics and software development opportunities
- **Impact-Driven**: All projects include quantified business outcomes
- **ATS-Optimized**: Keywords and structure optimized for applicant tracking systems
- **Professional Brand**: Consistent cyan/blue color scheme and modern design

### Performance Considerations
- Next.js Image optimization for faster loading
- Code splitting automatically handled by Next.js
- Framer Motion animations optimized for 60fps
- Minimal bundle size with tree-shaking