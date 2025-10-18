---
title: Article Preview Component
image: ./preview.png
---

# Frontend Mentor - Article preview component solution

This is a solution to the
[Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen
  size
- See the social media share links when they click the share icon

### Links

- Solution URL:
  [Add solution URL here](https://www.frontendmentor.io/solutions/)
- Live Site URL:
  [https://frontendmentor-projects.pages.dev/projects/article-preview-component/](https://frontendmentor-projects.pages.dev/projects/article-preview-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- BEM methodology
- [Astro](https://astro.build/) - Web Framework
- [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) -
  Native browser API (desktop)
- Vanilla JavaScript - Client-side interactivity (mobile)

### What I learned

This project was an excellent opportunity to explore the native Popover API and
implement a responsive solution that adapts to different screen sizes.

#### Desktop Implementation: Native Popover API

On desktop screens, I used the Popover API, a modern browser feature that
eliminates the need for JavaScript-based tooltip libraries.

The Popover API provides declarative HTML attributes for creating accessible,
interactive overlays:

```html
<button type="button" popovertarget="popover" aria-label="share article">
  <ShareIcon />
</button>

<div id="popover" popover>
  <!-- Popover content -->
</div>
```

This approach offers several advantages:

- **Zero JavaScript** - The browser handles all show/hide logic
- **Built-in accessibility** - Automatic focus management and keyboard
  interactions
- **Top-layer rendering** - Popovers appear above all other content without
  z-index management
- **Light dismiss** - Click outside or press ESC to close automatically

I also used CSS Anchor Positioning to position the popover relative to the share
button:

```css
.article__share-btn {
  anchor-name: --article-share-btn;
}

.article__popover {
  position-anchor: --article-share-btn;
  position-area: block-start span-all;
}
```

#### Mobile Implementation: JavaScript Toggle

On mobile screens, the design called for a slide-up panel covering the bottom of
the card rather than a floating popover. Since the native Popover API doesn't
fit this use case, I implemented a JavaScript solution:

```javascript
shareBtn?.addEventListener("click", (e) => {
  if (window.innerWidth < 800) {
    e.preventDefault();
    mobilePopover?.classList.toggle("article__popover-mobile--active");
  }
});
```

The mobile popover uses CSS transforms and opacity for smooth animations:

```css
.article__popover-mobile {
  opacity: 0;
  translate: 0 100%;
  pointer-events: none;
  transition:
    opacity 0.2s,
    translate 0.2s;
}

.article__popover-mobile--active {
  opacity: 1;
  translate: 0 0;
  pointer-events: auto;
}
```

Key learnings:

- Using `translate` instead of `transform: translateY()` for better performance
- Using `pointer-events: none` to prevent interaction with hidden elements
  instead of `display: none`, which breaks CSS transitions
- Implementing responsive behavior with media queries in both CSS and JavaScript

## Author

- Website - [Justin](https://justin-scopelleti.com/)
- Frontend Mentor - [@Kesmek](https://www.frontendmentor.io/profile/Kesmek)
