# Portfolio Project Structure

This document outlines the clean, organized structure of Guilherme Grancho's professional portfolio.

## 📁 Directory Structure

```
portfolio/
├── public/                     # Static assets
│   ├── favicon.ico            # Site favicon
│   ├── images/                # Image assets
│   │   ├── avatar.jpg         # Professional headshot
│   │   ├── og/                # Open Graph images
│   │   └── projects/          # Project screenshots
│   └── trademarks/            # Trademark assets
├── src/                       # Source code
│   ├── app/                   # Next.js App Router
│   │   ├── api/               # API routes
│   │   ├── work/              # Projects showcase
│   │   │   ├── [slug]/        # Dynamic project pages
│   │   │   ├── page.tsx       # Projects listing
│   │   │   └── projects/      # Project MDX files
│   │   ├── icon.tsx           # Dynamic icon generation
│   │   ├── layout.tsx         # Root layout
│   │   ├── not-found.tsx      # 404 page
│   │   ├── page.tsx           # Homepage (About page)
│   │   ├── robots.ts          # Robots.txt
│   │   └── sitemap.ts         # Sitemap generation
│   ├── components/            # Reusable components
│   │   ├── about/             # About page components
│   │   │   ├── about.module.scss
│   │   │   └── TableOfContents.tsx
│   │   ├── work/              # Work/projects components
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Header.tsx         # Site header/navigation
│   │   ├── Mailchimp.tsx      # Newsletter component
│   │   ├── mdx.tsx            # MDX component configuration
│   │   ├── Providers.tsx      # Context providers
│   │   ├── RouteGuard.tsx     # Route protection
│   │   └── ThemeToggle.tsx    # Dark/light mode toggle
│   ├── resources/             # Configuration and content
│   │   ├── content.js         # Portfolio content data
│   │   ├── custom.css         # Custom styles
│   │   ├── icons.ts           # Icon definitions
│   │   ├── index.ts           # Resource exports
│   │   └── once-ui.config.js  # Design system config
│   └── utils/                 # Utility functions
├── .gitignore                 # Git ignore rules
├── biome.json                 # Biome configuration
├── LICENSE                    # Project license
├── next.config.mjs            # Next.js configuration
├── next-env.d.ts              # Next.js TypeScript definitions
├── package.json               # Dependencies and scripts
├── PROJECT_STRUCTURE.md       # This file
├── README.md                  # Project documentation
└── tsconfig.json              # TypeScript configuration
```

## 🎯 Key Features

### **Homepage (About Page)**
- Professional introduction and role
- Work experience with achievements
- Education and certifications
- Core competencies
- Key achievements and recognition

### **Projects Showcase**
- AI-Powered Trading Algorithm
- Fintech Startup Platform
- VC Analytics Platform

### **Navigation**
- Clean, minimal navigation (About | Projects)
- Responsive design
- Dark/light mode toggle

## 🚀 Development

### **Scripts**
- `npm run dev` - Start development server with Turbo pack
- `npm run dev:no-turbo` - Start development server without Turbo pack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### **Technologies**
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: SCSS + Once UI Design System
- **Content**: MDX for project pages
- **Performance**: Turbo pack for faster development

## 📝 Content Management

### **Personal Information**
Edit `src/resources/content.js` to update:
- Personal details and contact information
- Professional experience and achievements
- Skills and competencies
- Project information

### **Projects**
Add new projects by creating MDX files in `src/app/work/projects/`:
- Use the existing project files as templates
- Include frontmatter with metadata
- Write content in MDX format

### **Styling**
- Global styles: `src/resources/custom.css`
- Component styles: Individual `.module.scss` files
- Design system: `src/resources/once-ui.config.js`

## 🔧 Configuration

### **Next.js**
- Configured for optimal performance
- Turbo pack enabled for development
- Static generation for projects
- SEO optimization

### **Design System**
- Once UI for consistent styling
- Custom color scheme for professional appearance
- Responsive design
- Accessibility features

## 📊 Performance

- **Build Time**: Optimized with Turbo pack
- **Bundle Size**: Minimized dependencies
- **SEO**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG compliant components

## 🎨 Design Philosophy

- **Professional**: Clean, modern design suitable for business
- **Focused**: Minimal navigation, clear content hierarchy
- **Responsive**: Mobile-first approach
- **Accessible**: Proper contrast, keyboard navigation
- **Fast**: Optimized loading and performance
