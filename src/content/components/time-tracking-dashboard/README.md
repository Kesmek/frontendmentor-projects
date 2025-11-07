---
title: Time Tracking Dashboard
image: ./preview.jpg
---

# Frontend Mentor - Time tracking dashboard solution

This is a solution to the
[Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).
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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./preview.jpg)

### Links

- Solution URL:
  [Add solution URL here](https://www.frontendmentor.io/solutions/)
- Live Site URL:
  [https://frontendmentor-projects.pages.dev/projects/time-tracking-dashboard/](https://frontendmentor-projects.pages.dev/projects/time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- BEM methodology
- [Astro](https://astro.build/) - Web Framework
- CSS-only state management with radio buttons

### What I learned

This project was an excellent opportunity to explore CSS-only state management
and advanced grid layouts for dashboard interfaces.

#### CSS-Only Timeframe Switching

Instead of using JavaScript to toggle between different timeframes, I
implemented a pure CSS solution using radio buttons and :has selectors. This
approach provides better performance and works even without JavaScript
enabled.

The pattern uses hidden radio buttons to control visibility of different time
periods:

```css
.dash__card-duration--daily {
  display: none;
}

 .dash:has(.dash__input--daily:checked) .dash__card-duration--daily {
  display: block;
}
```

Each card contains all three timeframes (daily, weekly, monthly) in the markup,
and CSS selectively shows the appropriate one based on which radio button is
checked. This technique:

- **Zero JavaScript required** - State is managed entirely through CSS
- **Accessible by default** - Radio buttons provide keyboard navigation and
  screen reader support
- **Progressive enhancement** - Works in all browsers that support CSS :has
  selectors
- **Semantic HTML** - Uses proper form controls (`<fieldset>`, `<legend>`,
  radio inputs)

#### Dynamic Grid with Grid Template Areas

The dashboard uses CSS Grid with handmade sizes to create a responsive layout that
flows naturally on both mobile and desktop:

```css
 @container (50rem < width < 80rem) {
  .dash {
   grid-template-columns: repeat(2, 1fr);
  }
  }

 @container (width > 80rem) {
  .dash {
   grid-template-columns: repeat(4, 1fr);
   padding: var(--size-8);
  }
  }
```

On mobile, the grid collapses to a single column with the profile card at the
top, followed by activity cards. On desktop, the profile card spans two rows
while activities fill the remaining grid areas.

This approach provides:

- **Easy reordering** - Change visual order without affecting HTML structure
- **Maintainable** - Add or remove cards without breaking the layout

#### Astro Component Architecture with Slots

The activity cards are implemented as reusable Astro components using slots to
inject different content while maintaining consistent structure:

```astro
<Card title={cardData.title} class={className}>
  <Icon slot="image" class="dash__card-image" />
  <p slot="duration-current" class="dash__card-duration--daily">
    {cardData.timeframes.daily.current}hrs
  </p>
  <p slot="duration-last" class="dash__card-duration--daily">
    Yesterday - {cardData.timeframes.daily.previous}hrs
  </p>
</Card>
```

Each card receives:

- **Named slots** for image, current duration, and previous duration
- **Dynamic classes** for category-specific styling (work, play, study, etc.)
- **Multiple timeframe values** that CSS selectively displays

This pattern separates concerns effectively:

- Card component handles structure and layout
- Parent component handles data mapping and state
- CSS handles presentation and state-dependent visibility

#### BEM Methodology for Complex Components

With nested components and multiple states, BEM naming conventions proved
essential for maintaiability:

```css
/* Block */
.dash { }

/* Element */
.dash__card { }

/* Modifier */
.dash__card--work { }
.dash__card--play { }

/* Element with state */
.dash__card-duration--daily { }
.dash__card-duration--current { }
```

#### Semantic HTML for Form Controls

The timeframe selector uses proper form semantics with a fieldset and legend:

```html
<fieldset class="dash__timeframes">
  <legend class="dash__timeframe-legend">Select timeframe</legend>
  <input type="radio" name="timeframe" id="timeframe-daily" />
  <label for="timeframe-daily">Daily</label>
</fieldset>
```

This provides:

- Screen reader context ("Select timeframe" group label)
- Keyboard navigation (arrow keys between options)
- Native focus management
- Clear semantic relationship between controls

Key learnings:

- CSS-only state management with radio buttons and :has selectors
- CSS Grid for complex dashboard layouts
- Astro slots for component composition
- BEM naming for multi-state components
- Semantic form markup with fieldset/legend
- Mobile-first responsive design patterns

## Author

- Website - [Justin Scopelleti](https://justin-scopelleti.com/)
- Frontend Mentor - [@Kesmek](https://www.frontendmentor.io/profile/Kesmek)
