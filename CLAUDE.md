# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Node Version**: >=22 (check with `.nvmrc`)

```bash
# Development
yarn dev              # Start Next.js dev server

# Code Quality
yarn lint             # Run ESLint

# Production
yarn build            # Build for production
yarn start            # Start production server
```

## Technology Stack & Architecture

### Framework & Styling
- **Next.js 14** with Pages Router (NOT App Router)
- **Plain JavaScript** (NOT TypeScript) - `.js` extension preferred over `.jsx`
- **styled-jsx** for component styling - scoped styles in `<style jsx>` blocks
- **SCSS** for global styles (`styles/main.scss`) using CSS custom properties for theming
- **Yarn 4.1.1** as package manager

### Component Architecture
Components follow **Atomic Design** pattern in `components/`:
- `atoms/` - Basic building blocks (Icon, Heading, Paragraph, Logo, Link, Analytics)
- `molecules/` - Composed components (Card, Carousel, Job, Item, SkillCards, ThemeToggle, Country)
- `organisms/` - Complex sections (Hero, Profile, Career, Skills, Knowledge, Footer, Relocation)
- `layout/` - Layout components (PageContainer)

### Data Layer
All content lives in `data/` as JavaScript exports:
- `achievements.js`, `careers.js`, `expertises.js`, `frameworks.js`
- `knowledge.js`, `languages.js`, `stack.js`, `summary.js`
- Imported via central `data/index.js`

### Custom Hooks (`hooks/`)
- `useTheme.js` - Detects and tracks theme changes via MutationObserver on `<html>` class
- `useBreakpoints.js` - Responsive breakpoint detection

### Theming System
Theme managed through CSS custom properties in `styles/main.scss`:
- Light/dark modes via `--background`, `--text`, `--primary`, etc.
- System preference detection + user override via `.dark` class
- Special `.freeze-mode` class for forcing light theme
- Theme toggle controlled by `ThemeToggle` molecule

### Key Patterns
- Direct utility functions preferred over external libraries (see `utils.js`)
- Image optimization via Next.js `Image` component
- Single-page layout (`pages/index.js`) assembling organisms
- Global reset via `minireset.css`

## Important Conventions
- Prefer custom utils over installing new libraries
- Use CSS custom properties for theme variables
- Components use styled-jsx for scoped styles
- Date utilities in `utils.js` (e.g., `calculateDuration`)
- All SVG icons/vectors in `public/vectors/`, images in `public/images/`
