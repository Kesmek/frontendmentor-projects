# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

This is a Frontend Mentor challenges repository built with Astro. Each challenge
is implemented as a self-contained component within the project, with a
dedicated page route to display it. The project uses Bun as the package manager
and runtime.

## Commands

### Development

- `bun dev` - Start the development server (available at <http://localhost:4321>)
- `bun build` - Build the project for production
- `bun preview` - Preview the production build

## Architecture

### Project Structure

```
src/
├── components/          # Challenge components (one directory per challenge)
│   └── {challenge-name}/
│       ├── index.astro  # Main component file with scoped styles
│       ├── *.ts         # Component logic (if needed)
│       ├── images/      # Component-specific images
│       └── README.md    # Challenge requirements/notes
├── layouts/
│   └── BaseLayout.astro # Shared layout with common HTML structure
├── pages/
│   ├── index.astro      # Homepage with challenge gallery
│   └── projects/
│       └── {challenge-name}.astro  # Individual challenge pages
└── styles/
    ├── main.css         # Global styles and homepage styles
    ├── reset.css        # CSS reset
    └── tokens.css       # Design tokens/CSS variables
```

### Adding a New Challenge

1. Create a new directory in `src/components/{challenge-name}/`
2. Add component files:
   - `index.astro` - Main component with markup and scoped `<style>` tag
   - `{name}.ts` - Component logic (TypeScript, if needed)
   - `images/` - Directory for challenge images/assets
3. Create a page route at `src/pages/projects/{challenge-name}.astro` that
   imports the component
4. Add the challenge to the homepage gallery in `src/pages/index.astro`
5. Update README.md with the new challenge

### CSS Architecture

- **Scoped Component Styles**: Use Astro's scoped `<style>` tags within
  component files for automatic style scoping
- **CSS Cascade Layers** (in order): `reset`, `base`, `tokens`, `components`,
  `utilities`
- **Modern CSS Features**:
  - Native CSS nesting for component organization (no preprocessor needed)
  - Container queries (`@container`) for component-level responsive design
  - Logical properties (`inline-size`, `block-size`) instead of physical
    (`width`, `height`)
  - Relative color syntax with `oklch(from var(...) ...)`
- **CSS Custom Properties**: Design tokens defined in `src/styles/tokens.css`
- **Naming Convention**: Simple, semantic class names organized with CSS nesting
  (no BEM methodology)

### Astro-Specific Features

- **Font Loading**: Google Fonts configured in `astro.config.mjs` with CSS
  variables (e.g., `--figtree`, `--outfit`)
- **Image Optimization**: Uses Astro's `Image` component from `astro:assets`
- **Path Aliases**:
  - `@components/*` → `src/components/*`
  - `@layouts/*` → `src/layouts/*`
- **Font Preloading**: Use
  `<Font slot="head" cssVariable="--{font-name}" preload />` in page components

### Component Pattern

Each challenge follows this pattern:

```astro
---
// src/pages/projects/{challenge}.astro
import BaseLayout from "@layouts/BaseLayout.astro";
import Component from "@components/{challenge}/index.astro";
import { Font } from "astro:assets";
---

<BaseLayout
  title="Frontend Mentor | {Challenge Title}"
  favicon="/frontendmentor-favicon.svg"
>
  <Font slot="head" cssVariable="--{font-name}" preload />
  <Component />
</BaseLayout>
```

Component markup, styles, and logic are co-located in the component directory.
Styles use scoped `<style>` tags within the `.astro` file for automatic scoping.
Component logic uses separate `.ts` files when needed.

## Development Workflow

- **Mobile-first approach**: Design for mobile first, then add responsive styles
  using container queries
- **Accessibility-first**: Use semantic HTML, proper ARIA labels, form
  validation, and focus states
- **Modern CSS**: Leverage native nesting, container queries, cascade layers, and
  logical properties
- **TypeScript**: Use `.ts` files for component logic when needed
- **Browser compatibility**: Test across browsers; avoid cutting-edge features
  without fallbacks (e.g., CSS `@scope` not yet supported in Firefox)
- **Deployment**: Cloudflare Pages (wrangler configured)
