# Portfolio25 Design System - AI Coding Guide

## Architecture Overview

This is a **Next.js design system portfolio** with a unique hybrid structure:
- **Next.js App Router** (`src/app/`) for routing but renders a single client-side React app
- **Design System Components** (`src/components/ui/`) - reusable UI primitives
- **Showcase Components** (`src/components/design-system/`) - demo/documentation pages
- **Design Tokens** (`src/tokens/`) - centralized design values imported into Tailwind

## Key Patterns & Conventions

### 1. Design Token System
All colors, typography, and spacing are defined in `src/tokens/` and imported into `tailwind.config.js`:
```typescript
// src/tokens/colors.ts exports color palettes
import { colors } from './src/tokens/colors.ts';
```
**Rule**: Never hardcode design values. Use tokens or CSS custom properties defined in `src/index.css`.

### 2. Component Architecture
- **Base UI**: `src/components/ui/` - Button, Card, Input, etc. with variant-based APIs
- **Showcase**: `src/components/design-system/` - demonstrates UI components with examples
- **Layout**: Single `Layout.tsx` manages navigation between showcase sections

### 3. Styling Patterns
- **Glassmorphism**: Use `.glass-card` class for consistent glass effects
- **Gradient Text**: Use `.gradient-text` class for brand gradient text
- **Block Reveal**: Use `blockReveal` prop on Cards for staggered animations
- **Theme Support**: All components must work in light/dark themes using CSS custom properties

### 4. Component API Design
```typescript
// Consistent variant + size pattern
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'gradient' | 'glass';
  size?: 'sm' | 'md' | 'lg';
}
```

### 5. Navigation System
The main `Layout.tsx` uses a section-based navigation where:
- Main sections: 'overview', 'colors', 'typography', 'components', etc.
- Component subsections: 'buttons', 'cards', 'forms', etc.
- Active state managed via `activeSection` and `activeComponentSection` props

## Development Workflow

### Build & Dev Commands
```bash
npm run dev          # Next.js development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint check
```

### Adding New Components
1. Create component in `src/components/ui/` following variant pattern
2. Export from showcase in `src/components/design-system/components/`
3. Add to navigation in `Layout.tsx` componentSubSections array
4. Update `ComponentsLayout.tsx` to include new showcase

### Custom Fonts
Two custom fonts loaded via `src/index.css`:
- **Basement** (font-basement) - primary brand font
- **Kabel** (font-kabel) - secondary display font

### Theme Implementation
- CSS custom properties in `:root` and `.dark` in `src/index.css`
- Theme toggle via `useTheme` hook
- All components use semantic color tokens (background, foreground, muted, etc.)

## Critical Files
- `src/App.tsx` - Main application component with section routing
- `src/components/Layout.tsx` - Navigation and page structure
- `src/index.css` - Global styles, CSS custom properties, glassmorphism
- `tailwind.config.js` - Imports all design tokens, defines theme extensions
- `src/utils/cn.ts` - Simple className utility (not clsx/twMerge)

## External Dependencies
- **Next.js 15** with App Router
- **Lucide React** for icons (imported individually)
- **Tailwind CSS** with custom design token integration
- Images optimized for `images.pexels.com` domain

When extending this system, follow the established token-driven approach and maintain the showcase/demo structure for new components.
