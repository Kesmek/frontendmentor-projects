---
title: Tip Calculator App
image: ./preview.jpg
---

# Frontend Mentor - Tip calculator app solution

This is a solution to the
[Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).
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
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./preview.jpg)

### Links

- Solution URL:
  [Add solution URL here](https://www.frontendmentor.io/solutions/)
- Live Site URL:
  [https://frontendmentor-projects.pages.dev/projects/tip-calculator-app/](https://frontendmentor-projects.pages.dev/projects/tip-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- BEM methodology
- [Astro](https://astro.build/) - Web Framework
- CSS-only form validation and interactivity

### What I learned

This project was an excellent opportunity to practice building an interactive
calculator using semantic HTML forms and CSS-only validation patterns.

#### Form-Based Calculator Architecture

The calculator is built entirely with native HTML form elements, leveraging the
browser's built-in form capabilities for state management and validation:

```html
<form class="calc">
  <input type="number" name="bill" required />
  <input type="radio" name="tip" value="15" />
  <input type="number" name="people" required />
</form>
```

This approach provides:

- **Native validation** - Browser-level input validation and error handling
- **Keyboard accessibility** - Tab navigation and arrow key support
- **Screen reader support** - Proper form semantics and labels
- **No JavaScript required** - Pure HTML/CSS implementation

#### CSS Grid for Calculator Layout

The calculator uses CSS Grid to create a responsive two-column layout that
adapts seamlessly from mobile to desktop:

```css
.calc {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--size-4);
}

@media (min-width: 768px) {
  .calc {
    grid-template-columns: 1fr 1fr;
  }
}
```

Key learnings:

- Semantic HTML forms for interactive calculations
- CSS Grid for responsive calculator layouts
- BEM naming for form component organization
- Mobile-first responsive design
- CSS custom properties for theming

## Author

- Website - [Justin Scopelleti](https://justin-scopelleti.com/)
- Frontend Mentor - [@Kesmek](https://www.frontendmentor.io/profile/Kesmek)
