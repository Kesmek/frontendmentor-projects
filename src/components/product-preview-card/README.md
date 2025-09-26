# Frontend Mentor - Product preview card component solution

This is a solution to the
[Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![screenshot](./preview.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL:
  [https://frontendmentor-projects.pages.dev/](https://frontendmentor-projects.pages.dev/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [Astro](https://astro.build/) - Web Framework

### What I learned

I learned how to use CSS Grid to create a responsive card component. I used a
mobile-first approach, where the card is a single column by default. Then, I
used a media query to change the layout to a two-column grid on larger screens.

```css
.card {
  display: grid;
  grid-template-columns: 1fr;
  max-inline-size: 40rem;
}

@media (width >= 38rem) {
  .card {
    grid-template-columns: 1fr 1fr;
  }
}
```

### Continued development

I want to continue to focus on creating responsive layouts using CSS Grid and
Flexbox. I also want to explore more of the features of Astro.

### Useful resources

- [Astro Docs](https://docs.astro.build/en/getting-started/) - The Astro
  documentation is a great resource for learning how to use the framework.

## Author

- Website - [Justin](https://github.com/Kesmek/)
- Frontend Mentor - [@Kesmek](https://www.frontendmentor.io/profile/Kesmek)
