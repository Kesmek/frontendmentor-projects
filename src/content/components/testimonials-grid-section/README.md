---
title: Testimonials Grid Section
image: ./preview.png
---

# Frontend Mentor - Testimonials grid section solution

This is a solution to the
[Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7).
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

- View the optimal layout for the site depending on their device's screen size

### Links

- Solution URL:
  [https://www.frontendmentor.io/solutions/testimonials-grid-section--VFAUYoT7F](https://www.frontendmentor.io/solutions/testimonials-grid-section--VFAUYoT7F)
- Live Site URL:
  [https://frontendmentor-projects.pages.dev/projects/testimonials-grid-section/](https://frontendmentor-projects.pages.dev/projects/testimonials-grid-section/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- BEM methodology
- [Astro](https://astro.build/) - Web Framework

### What I learned

This project was a great exploration of CSS Grid layout patterns and component
architecture decisions.

The main layout challenge was creating an asymmetric grid where certain cards
span multiple columns or rows. I explored two approaches:

**Grid Template Areas** - Visually intuitive but not scalable:

```css
.testimonials {
  grid-template-areas:
    "daniel daniel jonathan kira"
    "jeanette patrick patrick kira";
}
```

This works well for fixed layouts but becomes unmaintainable when content
changes or new items are added.

**Explicit Classes with Grid Spans** - More flexible and maintainable:

```css
.testimonials__card--daniel,
.testimonials__card--patrick {
  grid-column: span 2;
}

.testimonials__card--kira {
  grid-row: span 2;
}
```

This approach separates layout concerns from styling and makes it clear which
cards have special positioning. It's reorder-safe and self-documenting through
BEM naming conventions.

## Author

- Website - [Justin](https://justin-scopelleti.com/)
- Frontend Mentor - [@Kesmek](https://www.frontendmentor.io/profile/Kesmek)
