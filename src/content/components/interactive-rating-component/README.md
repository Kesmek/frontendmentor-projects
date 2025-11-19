---
title: Interactive Rating Component
image: ./preview.png
---

# Frontend Mentor - Interactive rating component solution

This is a solution to the
[Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Preview of the project](./preview.png)

### Links

- Solution URL:
  [Add solution URL here](https://www.frontendmentor.io/solutions/)
- Live Site URL:
  [https://frontendmentor-projects.pages.dev/projects/interactive-rating-component/](https://frontendmentor-projects.pages.dev/projects/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup (form, fieldset, legend)
- CSS custom properties and design tokens
- CSS nesting for component organization
- CSS transitions with `allow-discrete` for display property animations
- `@starting-style` for entry animations
- Logical properties (inline-size, aspect-ratio)
- TypeScript for form validation and state management
- Mobile-first workflow
- [Astro](https://astro.build/) - Web Framework

### What I learned

The form validation uses native HTML5 validation with custom error messaging,
providing immediate feedback when users attempt to submit without selecting a
rating. The visual design uses relative color syntax
(`oklch(from var(...) ...)`) for generating color variations directly in CSS.

### Implementation notes

- Radio buttons are visually styled as circular buttons while maintaining
  semantic form structure
- Focus states use `:focus-visible` to show keyboard navigation without
  interfering with mouse interactions
- Error validation triggers on submit and clears when user selects a rating
- State transitions use the `hidden` attribute toggled via JavaScript, with CSS
  handling all visual transitions
- Component uses scoped Astro styles with CSS cascade layers for predictable
  specificity

## Author

- Website - [Justin Scopelleti](https://justin-scopelleti.com/)
- Frontend Mentor - [@Kesmek](https://www.frontendmentor.io/profile/Kesmek)
