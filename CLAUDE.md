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

### Code Quality

- Stylelint is configured for CSS linting with BEM methodology
- Prettier is configured for Astro files
- Run stylelint: `bunx stylelint "**/*.{css,astro}"`
- Run prettier: `bunx prettier --write .`

## Architecture

### Project Structure

```
src/
├── components/          # Challenge components (one directory per challenge)
│   └── {challenge-name}/
│       ├── index.astro  # Main component file
│       ├── *.css        # Component-specific styles
│       ├── assets/      # Challenge assets (images, fonts, etc.)
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
   - `index.astro` - Main component with challenge markup
   - `{name}.css` - Component-specific styles (use BEM methodology)
   - `assets/` - Directory for challenge assets
3. Create a page route at `src/pages/projects/{challenge-name}.astro` that
   imports the component
4. Add the challenge to the homepage gallery in `src/pages/index.astro`
5. Update README.md with the new challenge

### CSS Architecture

- **CSS Cascade Layers** (in order): `reset`, `base`, `tokens`, `components`,
  `utilities`
- **BEM Methodology**: All component styles follow BEM naming (block\_\_element,
  block--modifier)
- **CSS Custom Properties**: Design tokens defined in `src/styles/tokens.css`
- **Logical Properties**: Use logical properties (inline-size, block-size)
  instead of physical (width, height)
- Stylelint enforces BEM patterns via `stylelint-selector-bem-pattern`

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

Component styles are co-located with the component and imported directly in the
`.astro` file.

## Development Workflow

- Mobile-first approach: Design for mobile first, then add responsive styles
- BEM naming: All CSS classes must follow BEM methodology
- Browser compatibility: Don't assume Chromium-specific features
- The project uses Cloudflare Pages for deployment (wrangler configured)
