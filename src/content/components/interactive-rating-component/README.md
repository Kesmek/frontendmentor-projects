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
- [Review](#review)
  - [What I'm most proud of](#what-im-most-proud-of)
  - [What I would do differently](#what-i-would-do-differently)
- [Challenges](#challenges-i-overcame)
  - [What I'm most proud of](#what-im-most-proud-of)
  - [What I would do differently](#what-i-would-do-differently)
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

## Review

### What I'm Most Proud Of

- Accessibility-first approach: I implemented comprehensive accessibility
  features including semantic HTML (form, fieldset, legend), proper ARIA
  attributes (aria-describedby, aria-live, aria-hidden), focus management,
  and keyboard navigation with :focus-visible. The component is fully usable
   with screen readers and keyboard-only navigation.

- Modern CSS techniques: I successfully used cutting-edge CSS features like
  @starting-style for entry animations, transition-behavior: allow-discrete
  for animating the display property, relative color syntax with oklch(from
  var(...) ...), and advanced selectors like :has() and :user-invalid. The
  styling is clean, maintainable, and leverages CSS cascade layers.

- Form validation UX: The validation provides immediate, clear feedback with
   custom error messages that appear on submit and clear automatically when
  the user selects a rating. The error is properly announced to screen
  readers via aria-live.

### What I Would Do Differently

- Radio button hiding technique: The visually-hidden radio buttons use
  inline-size: 0 and position: absolute, which isn't
  ideal. I'd use a more robust visually-hidden pattern with proper clipping
  to ensure better cross-browser accessibility support.

- CSS magic numbers: Some calculations like calc(var(--size-14) * 1.25) lack
   context. I'd extract these into named custom properties (like
  --card-max-width) to make the design intent clearer.

### Challenges I overcame

- Challenge: Submit Event Not Firing
  - Initially thought it was a script loading or timing issue
  - Root cause: HTML5's native form validation with the required attribute
  was preventing the submit event from firing when no radio button was
  selected
  - Solution: Added the novalidate attribute to the form element to disable
  native validation and allow custom JavaScript validation to run

- Challenge: Validation Strategy
  - Had to choose between native HTML5 validation (which provides
  :user-invalid CSS pseudo-class) and custom JavaScript validation (which
  offers better UX control)
  - Native validation was blocking the ability to show custom error messages
   in the desired location
  - Solution: Opted for custom JavaScript validation with novalidate,
  trading off the :user-invalid CSS feature for complete control over error
  messaging and user feedback

## Author

- Website - [Justin Scopelleti](https://justin-scopelleti.com/)
- Frontend Mentor - [@Kesmek](https://www.frontendmentor.io/profile/Kesmek)
