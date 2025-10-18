---
title: Four Card Feature Section
image: ./preview.png
---

# Frontend Mentor - Four card feature section solution

This is a solution to the
[Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK).
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
  [src/components/four-card-feature-section/](src/components/four-card-feature-section/)
- Live Site URL:
  [https://frontendmentor-projects.pages.dev/projects/four-card-feature-section/](https://frontendmentor-projects.pages.dev/projects/four-card-feature-section/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [Astro](https://astro.build/) - Web Framework

### What I learned

This project was a deep dive into the complexities and power of CSS Grid layout,
especially for creating responsive components.

The main challenge was creating a grid of cards that would reflow elegantly
across different screen sizes. I initially struggled with columns that wouldn't
shrink on small screens, causing overflow. The key learning was how to create a
truly robust, responsive column layout.

The final, and most effective, solution was to use the `min()` function within
`minmax()` for the `grid-template-columns` property. This technique explicitly
tells the browser to choose the smaller of a fixed width or 100% of the
container width, which gracefully handles shrinking on even the smallest
screens.

```css
.feature-section__card-list {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(calc(var(--size-14) + var(--size-9)), 100%), 1fr)
  );
}
```

This ensures the columns have a minimum size on large screens but can shrink
fluidly without ever overflowing the viewport, solving the core responsiveness
issue of the challenge.

## Author

- Website - [Justin](https://justin-scopelleti.com/)
- Frontend Mentor - [@Kesmek](https://www.frontendmentor.io/profile/Kesmek)
