# CLAUDE.md - Speed E-Log Development Guide

## Project Overview

**Speed E-Log** is a modern, high-performance logistics website built with React, TypeScript, and Vite. The application is deployed on **Cloudflare Workers** and serves the domain **speedelog.net**. It features comprehensive mobile optimization, advanced performance monitoring, security hardening, and SEO enhancements.

### Key Characteristics
- **Language**: French (primary), with French-to-English URL redirects
- **Deployment**: Cloudflare Workers (automatic deployment on push to main)
- **Build System**: Vite 5 with SWC for fast compilation
- **UI Framework**: React 18 with shadcn/ui components
- **Styling**: Tailwind CSS with custom mobile-first utilities
- **Performance**: Web Workers, code splitting, lazy loading, critical CSS inlining
- **Mobile**: WCAG AA compliant, 48px touch targets, fluid typography

---

## Repository Structure

```
speedy-logistic-simplifier-31/
├── .claude/                    # Claude Code configuration
├── .git/                       # Git repository
├── .snapshots/                 # Snapshot configurations
├── public/                     # Static assets
│   └── lovable-uploads/       # Uploaded assets
├── scripts/                    # Build and deployment scripts
├── src/                        # Source code
│   ├── assets/                # Images, fonts, brand assets
│   │   └── brands/           # Brand logos
│   ├── components/            # React components
│   │   ├── client-portal/    # Client portal components
│   │   ├── contact/          # Contact form components
│   │   ├── cookies/          # Cookie consent components
│   │   ├── examples/         # Example components
│   │   ├── home/             # Homepage components
│   │   ├── icons/            # Icon components
│   │   ├── layout/           # Layout components (Header, Footer)
│   │   ├── mobile/           # Mobile-specific components
│   │   ├── performance/      # Performance optimization components
│   │   ├── sections/         # Page sections
│   │   ├── security/         # Security components
│   │   ├── seo/              # SEO components
│   │   ├── services/         # Service-related components
│   │   └── ui/               # shadcn/ui base components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility libraries
│   │   ├── noise/            # Noise generation for animations
│   │   └── *.ts              # Various utilities
│   ├── pages/                 # Page components (routes)
│   ├── styles/                # Global styles
│   ├── types/                 # TypeScript type definitions
│   ├── workers/               # Web Workers
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global CSS
├── supabase/                  # Supabase configuration
│   └── migrations/           # Database migrations
├── _headers                   # Cloudflare security headers
├── components.json            # shadcn/ui configuration
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite build configuration
├── wrangler.toml             # Cloudflare Workers configuration
├── .nvmrc                    # Node.js version (20.10.0)
├── .gitignore                # Git ignore rules
└── README.md                 # Deployment documentation
```

---

## Technology Stack

### Core Technologies
- **React 18.3.1** - UI library with concurrent features
- **TypeScript 5.5.3** - Type-safe JavaScript
- **Vite 5.4.1** - Fast build tool and dev server
- **React Router DOM 6.26.2** - Client-side routing

### UI & Styling
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library built on Radix UI
- **Radix UI** - Unstyled, accessible UI primitives
- **Framer Motion 12.6.3** - Animation library
- **Lucide React** - Icon library
- **next-themes** - Dark mode support

### Performance & Optimization
- **Vite Code Splitting** - Manual chunks for optimal loading
- **Critters** - Critical CSS inlining
- **Terser** - JavaScript minification
- **rollup-plugin-analyzer** - Bundle analysis
- **vite-imagetools** - Image optimization
- **Web Workers** - Offload calculations (calculator, parallax, performance monitoring)

### Forms & Validation
- **React Hook Form 7.53.0** - Performant form library
- **Zod 3.23.8** - Schema validation
- **@hookform/resolvers** - Form validation integration

### External Integrations
- **@calcom/embed-react** - Calendar scheduling integration
- **HubSpot** - Forms and analytics (configured in lib/hubspot-config.ts)

### Data Visualization
- **Recharts 2.12.7** - Charting library
- **dotted-map 2.0.0** - Map visualizations
- **simplex-noise 4.0.3** - Procedural noise generation

### Security
- **DOMPurify 3.2.6** - XSS sanitization
- Custom security headers (see _headers file)
- Content Security Policy (CSP) enforcement

---

## Development Workflows

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (port 8080)
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Git Workflow

**Current Branch**: `claude/claude-md-mi53lu8s3azu3aao-01JfWkcvyjkyCrvrgGj5JQww`

**Branch Naming Convention**: All development branches should start with `claude/` prefix

**Important Git Commands**:
```bash
# Always push with -u flag
git push -u origin <branch-name>

# Fetch specific branch
git fetch origin <branch-name>

# Pull from specific branch
git pull origin <branch-name>
```

### Deployment Process

**Automatic Deployment to Cloudflare Workers**:
1. Make changes locally
2. Test build: `npm run build`
3. Commit changes: `git add . && git commit -m "Description"`
4. Push to repository: `git push -u origin <branch-name>`
5. Cloudflare automatically builds and deploys (3-5 minutes)

**Deployment Configuration**:
- **Build Command**: `npm install && npm run build`
- **Deploy Command**: `npx wrangler deploy`
- **Output Directory**: `dist`
- **Node Version**: 20.10.0 (from .nvmrc)
- **Package Manager**: npm (not bun)

**Production URLs**:
- Primary: https://www.speedelog.net
- Workers: https://speedelog-real-site.red-hill-ec42.workers.dev

---

## Key Files and Their Purposes

### Configuration Files

#### `vite.config.ts`
- Vite build configuration
- Plugins: React SWC, imagetools, Critters (critical CSS), bundle analyzer
- **Manual Chunks**: Optimized code splitting for React, Radix UI, forms, animations, charts, maps, utilities
- **Asset Organization**: `js/`, `css/`, `img/`, `assets/` directories
- **Production Optimizations**: Terser minification, console.log removal, CSS code splitting
- **Development**: Source maps enabled in dev mode only

#### `tailwind.config.ts`
- Custom color palette (`speedelog`, `orange`, `icon` colors)
- Fluid typography system (`text-fluid-*` utilities)
- Mobile-first responsive breakpoints
- Custom animations (accordion, fade, aurora, wave-pulse)
- Container settings with responsive padding
- Custom plugin for CSS variables from colors

#### `wrangler.toml`
- Cloudflare Workers configuration
- Specifies `dist` directory for assets
- Compatibility date: 2025-08-06

#### `_headers`
- Security headers (X-Frame-Options, CSP, HSTS, etc.)
- Cache control policies for static assets
- HubSpot and Google services allowlisted in CSP

#### `tsconfig.json`
- Path alias: `@/*` → `./src/*`
- Relaxed TypeScript settings for rapid development
- `skipLibCheck: true`, `strictNullChecks: false`

#### `components.json`
- shadcn/ui configuration
- Path aliases for components, utils, ui, lib, hooks
- Tailwind config reference

### Source Code Key Files

#### `src/main.tsx`
- Application entry point
- Initializes security headers
- Wraps app in HelmetProvider for SEO
- Includes CriticalResourcePreloader

#### `src/App.tsx`
- Main application component
- React Router setup with lazy-loaded pages
- Layout wrapper for consistent structure
- French-to-English URL redirects (e.g., `/a-propos` → `/about`)
- IdleHydrator for toast notifications

#### `src/lib/utils.ts`
- `cn()` function - Combines clsx and tailwind-merge for className merging

#### `src/lib/security-headers.ts`
- Runtime security header initialization
- Complements static `_headers` file

#### `src/lib/seo.ts`
- SEO utilities and meta tag generation
- Structured data helpers

#### `src/hooks/use-enhanced-mobile.tsx`
- Comprehensive mobile detection hook
- Screen size, orientation, touch capability monitoring
- Returns configuration for responsive behavior

#### `src/workers/*.ts`
- **calculator-worker.ts**: Offloads calculation logic
- **parallax-worker.ts**: Handles parallax calculations
- **performance-worker.ts**: Performance monitoring

---

## Coding Conventions

### TypeScript
- **Type Safety**: Prefer explicit types, but relaxed settings allow `any` when needed
- **No Unused Checks**: `@typescript-eslint/no-unused-vars` is disabled
- **Imports**: Use `@/` alias for src imports
  ```typescript
  import { Button } from "@/components/ui/button";
  import { cn } from "@/lib/utils";
  ```

### React Components
- **Functional Components**: Always use function components with hooks
- **Lazy Loading**: Use `React.lazy()` for page-level components
- **Naming**: PascalCase for components, kebab-case for files
- **Props**: Destructure props in function signature
  ```typescript
  export const MyComponent = ({ title, children }: MyComponentProps) => {
    // ...
  };
  ```

### Styling
- **Tailwind First**: Use Tailwind utilities for all styling
- **cn() Helper**: Always use `cn()` from `@/lib/utils` for conditional classes
- **Mobile-First**: Design for mobile, enhance for desktop
- **Touch Targets**: Minimum 48px for interactive elements
- **Fluid Typography**: Use `text-fluid-*` utilities instead of fixed sizes
  ```typescript
  <h1 className="text-fluid-4xl font-bold">Heading</h1>
  ```

### Component Organization
- **UI Components**: Base components in `src/components/ui/`
- **Feature Components**: Organized by feature in subdirectories
- **Page Components**: Top-level pages in `src/pages/`
- **Shared Logic**: Custom hooks in `src/hooks/`
- **Utilities**: Helper functions in `src/lib/`

### File Naming
- **Components**: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- **Utilities**: `kebab-case.ts` (e.g., `security-utils.ts`)
- **Hooks**: `use-kebab-case.ts` (e.g., `use-mobile-optimization.tsx`)
- **Types**: `kebab-case.d.ts` or `kebab-case.ts` (e.g., `hubspot.d.ts`)

### Code Quality
- **ESLint**: React hooks rules enforced
- **No Console Logs**: Removed in production builds
- **Comments**: Use JSDoc for complex functions
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

---

## Mobile Optimization Strategy

### Touch Target Standards
- **Minimum Size**: 48px × 48px for all interactive elements
- **Spacing**: Adequate spacing between adjacent touch targets
- **CSS Class**: `.mobile-touch-target` for consistent sizing
- **Touch Manipulation**: `touch-action: manipulation` for faster touch response

### Fluid Typography System
All text uses `clamp()` functions for seamless scaling:
- `text-fluid-xs`: clamp(0.75rem, 2vw, 0.875rem)
- `text-fluid-sm`: clamp(0.875rem, 2.5vw, 1rem)
- `text-fluid-base`: clamp(1rem, 3vw, 1.125rem)
- `text-fluid-lg`: clamp(1.125rem, 3.5vw, 1.25rem)
- `text-fluid-xl`: clamp(1.25rem, 4vw, 1.5rem)
- `text-fluid-2xl`: clamp(1.5rem, 5vw, 2rem)
- `text-fluid-3xl`: clamp(1.875rem, 6vw, 2.5rem)
- `text-fluid-4xl`: clamp(2.25rem, 7vw, 3rem)
- `text-fluid-5xl`: clamp(3rem, 8vw, 4rem)
- `text-fluid-6xl`: clamp(3.75rem, 10vw, 5rem)

### Responsive Breakpoints
- **sm**: 640px - Small mobile devices
- **md**: 768px - Tablets
- **lg**: 1024px - Small desktops
- **xl**: 1280px - Large desktops
- **2xl**: 1400px - Extra large screens

### Mobile-Specific Components
- `MobileOptimizedLayout` - Wrapper for mobile behavior
- `MobileGrid` - Responsive grid with touch optimization
- `MobileCard` - Touch-optimized card component
- `MobileButton` - Mobile-first button implementation

### Mobile Hooks
- `useEnhancedMobile()` - Comprehensive device detection
- `useMobileOptimization()` - Mobile-specific optimizations
- `useOptimizedParallax()` - Throttled parallax for mobile
- `usePerformanceMotion()` - Conditional animations based on device

### Performance for Mobile
- **Conditional Rendering**: Simplify complex components on small screens
- **Reduced Animations**: Disable expensive animations on low-end devices
- **Optimized Images**: vite-imagetools for responsive images
- **Code Splitting**: Lazy load heavy components (charts, maps)

---

## Performance Architecture

### Code Splitting Strategy
**Manual Chunks** (configured in `vite.config.ts`):
- `react-vendor`: React core libraries
- `react-router`: Routing library
- `radix-ui`: Radix UI components
- `form-libs`: React Hook Form, Zod
- `framer-motion`: Animation library (lazy loaded)
- `charts`: Recharts (lazy loaded)
- `utils`: Utility libraries (clsx, tailwind-merge, date-fns)
- `icons`: Lucide React
- `map-libs`: Dotted map and simplex noise
- `external`: Cal.com embed

### Build Optimizations
1. **Critical CSS Inlining**: Critters plugin extracts and inlines critical CSS
2. **Terser Minification**: Production builds remove console logs and compress code
3. **Asset Optimization**: Images, fonts, and assets organized in optimized directories
4. **Source Maps**: Only enabled in development mode

### Runtime Optimizations
1. **Lazy Loading**: All pages except Index are lazy loaded
2. **IdleHydrator**: Defers non-critical components until browser idle
3. **Web Workers**: Offload heavy calculations to background threads
4. **Performance Monitoring**: Custom hooks track performance metrics

### Caching Strategy (from `_headers`)
- **Static Assets**: 1 year cache (31536000s) with immutable flag
- **HTML Files**: 5 minutes client cache, 1 week server cache, stale-while-revalidate
- **API Endpoints**: No cache
- **Service Worker**: No cache

---

## Security Features

### HTTP Security Headers (from `_headers`)
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

### Content Security Policy
- **Script Sources**: Self, HubSpot, Google Analytics
- **Style Sources**: Self, Google Fonts, HubSpot
- **Frame Sources**: HubSpot, Google Maps
- **Connect Sources**: HubSpot API, Google Analytics
- **Object**: Blocked (`object-src 'none'`)
- **Upgrade Insecure Requests**: Enabled

### Runtime Security
- **DOMPurify**: Sanitize user-generated content before rendering
- **Security Headers Init**: `initializeSecurityHeaders()` in main.tsx
- **Permissions Policy**: Restrict geolocation, microphone, camera, payment, USB

---

## SEO Configuration

### Meta Tags & Structured Data
- **React Helmet Async**: Dynamic meta tags per page
- **Structured Data Utils**: `src/lib/structured-data-utils.ts`
- **SEO Library**: `src/lib/seo.ts` for consistent metadata

### Sitemap
- **Route Discovery**: `src/lib/route-discovery.ts`
- **Sitemap Generator**: `src/lib/sitemap-generator.ts`
- **Sitemap Page**: `/sitemap` (accessible at `/plan-du-site`)

### Best Practices
- Unique title and description per page
- Open Graph tags for social sharing
- Canonical URLs to prevent duplicate content
- Alt text for all images (utils in `src/lib/alt-text-utils.ts`)
- Semantic HTML5 structure
- Proper heading hierarchy (H1 → H2 → H3)

---

## External Integrations

### HubSpot
- **Configuration**: `src/lib/hubspot-config.ts`
- **Forms**: Embedded forms using HubSpot forms API
- **Analytics**: HubSpot tracking scripts
- **CSP**: HubSpot domains allowlisted in Content Security Policy

### Cal.com
- **Package**: `@calcom/embed-react`
- **Usage**: Calendar booking integration
- **Lazy Loaded**: Part of `external` chunk

### Google Services
- **Google Analytics**: Configured via HubSpot integration
- **Google Maps**: Used for location display (frame-src allowed in CSP)

---

## Important Conventions for AI Assistants

### When Making Changes

1. **Always Read First**: Use the Read tool before editing any file
2. **Preserve Formatting**: Maintain existing indentation (spaces/tabs)
3. **Mobile-First**: Ensure all changes work on mobile devices
4. **Touch Targets**: Interactive elements must be at least 48px
5. **Fluid Typography**: Use `text-fluid-*` utilities, not fixed sizes
6. **Accessibility**: Add ARIA labels, maintain keyboard navigation
7. **Security**: Sanitize user input, follow CSP guidelines
8. **Performance**: Consider bundle size, use lazy loading when appropriate

### File Creation Guidelines

- **Prefer Editing**: Always prefer editing existing files over creating new ones
- **Component Location**: Place components in appropriate subdirectories
- **Naming Consistency**: Follow existing naming conventions
- **Import Aliases**: Use `@/` prefix for all src imports
- **TypeScript**: Add proper type definitions

### Testing & Quality

- **Build Test**: Always run `npm run build` before committing
- **Lint Check**: Run `npm run lint` to catch errors
- **Mobile Testing**: Verify responsive behavior at 375px, 768px, 1024px
- **Accessibility**: Check keyboard navigation and screen reader compatibility
- **Performance**: Monitor bundle size with analyzer plugin

### Git Commits

- **Descriptive Messages**: Use clear, actionable commit messages
- **French or English**: Either language acceptable for commits
- **Atomic Commits**: One logical change per commit
- **Branch Naming**: Use `claude/` prefix for development branches

### Deployment Awareness

- **Auto-Deploy**: Pushing to main triggers automatic Cloudflare deployment
- **Build Time**: Allow 3-5 minutes for deployment to complete
- **Cache Invalidation**: May need to clear Cloudflare cache for immediate updates
- **Testing**: Test locally before pushing to avoid failed deployments

---

## Common Tasks

### Adding a New Page

1. Create page component in `src/pages/NewPage.tsx`
2. Add lazy import in `src/App.tsx`:
   ```typescript
   const NewPage = lazy(() => import("./pages/NewPage"));
   ```
3. Add route in `<Routes>`:
   ```typescript
   <Route path="/new-page" element={<NewPage />} />
   ```
4. Add French redirect if needed:
   ```typescript
   <Route path="/nouvelle-page" element={<Navigate to="/new-page" replace />} />
   ```
5. Update sitemap in `src/lib/route-discovery.ts` if applicable

### Adding a New Component

1. Choose appropriate directory:
   - UI primitives → `src/components/ui/`
   - Feature components → `src/components/[feature]/`
   - Layout components → `src/components/layout/`
2. Create component file: `ComponentName.tsx`
3. Export component and types:
   ```typescript
   export interface ComponentNameProps {
     // props
   }

   export const ComponentName = ({ prop1, prop2 }: ComponentNameProps) => {
     return (
       <div className={cn("base-classes", prop1)}>
         {/* component JSX */}
       </div>
     );
   };
   ```
4. Import using alias: `import { ComponentName } from "@/components/feature/ComponentName"`

### Adding a Custom Hook

1. Create hook file in `src/hooks/use-hook-name.ts`
2. Follow naming convention: `use` prefix + descriptive name
3. Export hook function:
   ```typescript
   export const useHookName = () => {
     // hook logic
     return { value, method };
   };
   ```

### Updating Tailwind Configuration

1. Edit `tailwind.config.ts`
2. Add to `theme.extend` for custom values
3. Use existing color palette when possible
4. Test build after changes: `npm run build`

### Optimizing Performance

1. **Code Split**: Move heavy imports to lazy loading
2. **Web Workers**: Offload calculations to worker threads
3. **Image Optimization**: Use vite-imagetools for image processing
4. **Conditional Loading**: Use `useEnhancedMobile()` to skip heavy features on mobile
5. **Bundle Analysis**: Check output of rollup-plugin-analyzer during build

---

## Troubleshooting

### Build Fails

- **Check TypeScript**: Run `npm run lint` to find type errors
- **Check Imports**: Ensure all imports use correct paths
- **Check Dependencies**: Run `npm install` to ensure all packages installed
- **Check Vite Config**: Verify `vite.config.ts` syntax is correct

### Deployment Fails

- **Node Version**: Ensure .nvmrc specifies 20.10.0
- **Package Manager**: Cloudflare should use npm, not bun
- **Build Command**: Verify Cloudflare uses `npm install && npm run build`
- **Output Directory**: Should be `dist`

### Mobile Issues

- **Touch Targets**: Verify elements are at least 48px
- **Viewport**: Check for proper viewport meta tag in index.html
- **Fluid Typography**: Ensure using `text-fluid-*` utilities
- **Responsive Breakpoints**: Test at sm, md, lg, xl breakpoints

### Performance Issues

- **Bundle Size**: Run build with analyzer to identify large chunks
- **Lazy Loading**: Ensure heavy components are lazy loaded
- **Web Workers**: Move calculations to worker threads
- **Images**: Use optimized formats (WebP, responsive sizes)

---

## Recent Work

The codebase has recently undergone comprehensive mobile optimization, documented in `MOBILE_OPTIMIZATION_FINAL.md`. Key improvements include:

- ✅ 48px touch targets throughout the application
- ✅ Fluid typography system with clamp() functions
- ✅ Enhanced mobile detection with `useEnhancedMobile()` hook
- ✅ Mobile-optimized components (buttons, cards, forms)
- ✅ Performance improvements for low-end devices
- ✅ WCAG AA accessibility compliance

This work ensures a premium mobile experience across all devices.

---

## Additional Resources

- **README.md**: Deployment guide (French)
- **MOBILE_OPTIMIZATION_FINAL.md**: Mobile optimization documentation
- **Cloudflare Workers Docs**: https://developers.cloudflare.com/workers/
- **Vite Docs**: https://vitejs.dev/
- **shadcn/ui Docs**: https://ui.shadcn.com/
- **Tailwind CSS Docs**: https://tailwindcss.com/

---

## Summary for AI Assistants

This is a **production-ready, high-performance logistics website** built with modern web technologies. When working on this codebase:

1. **Always prioritize mobile-first design** with 48px touch targets and fluid typography
2. **Maintain security standards** by following CSP and sanitizing inputs
3. **Optimize for performance** through code splitting, lazy loading, and web workers
4. **Follow existing conventions** for file naming, imports, and component structure
5. **Test before deploying** as pushes to main trigger automatic Cloudflare deployment
6. **Use TypeScript** with path aliases (@/) for clean imports
7. **Leverage shadcn/ui** for consistent, accessible UI components
8. **Document changes** in commit messages and update relevant documentation

The codebase is well-structured, documented, and optimized. Familiarize yourself with the directory structure, key files, and conventions outlined in this document before making changes.
