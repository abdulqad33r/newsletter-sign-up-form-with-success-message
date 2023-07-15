# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

Desktop Design
![Form Desktop](/public/screenshots/form-desktop.jpeg)
![Invalid state](/public/screenshots/invalid-state-desktop.jpeg)
![Success message](/public/screenshots/success-desktop.jpeg)
Hover and focus states
![Input Focus](/public/screenshots/focus-state-input-desktop.jpeg)
![Button Hover state](/public/screenshots/hover-state-desktop.jpeg)
Mobile Design
![Form Mobile](/public/screenshots/form-mobile.jpeg)
![Success Mobile](/public/screenshots/success-mobile.jpeg)

### Links

- Solution URL: [Abdul Qadeer's Solution on Github](https://github.com/abdulqad33r/newsletter-sign-up-form-with-success-message)
- Live Site URL: https://abdulqad33r.github.io/newsletter-sign-up-form-with-success-message/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [SASS](https://sass-lang.com/)
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/)

### What I learned

Using different images on different screen sizes using picture tag

```html
<h1>Some HTML code I'm proud of</h1>
<picture>
  <source
    media="(width > 375px)"
    srcset="images/illustration-sign-up-desktop.svg" />
  <source media="" srcset="images/illustration-sign-up-mobile.svg" />

  <img
    src="images/illustration-sign-up-desktop.svg"
    alt="illustration-sign-up" />
</picture>
```

```css
/* Some CSS code I'm proud of */
li + li {
  margin-top: 10px;
}
```

### Continued development

Responsive Design

### Useful resources

- [Kevin Powell - CSS king](https://www.youtube.com/@KevinPowell) - I learnt picture tag from his videos and responsiveness.

## Author

- Website - [Abdul Qadeer](https://abdulqad33r.github.io/newsletter-sign-up-form-with-success-message/)
- Frontend Mentor - [@abdulqad33r](https://www.frontendmentor.io/profile/Abdul-Qad33r)

## Acknowledgments

I want to thank Kevin Powell that helped me a lot in my journey of learning HTML and CSS.
