# stylelint-config

[![Greenkeeper badge](https://badges.greenkeeper.io/moxystudio/stylelint-config.svg)](https://greenkeeper.io/)

MOXY [stylelint](http://eslint.org/) configuration to be used across projects.


## Installation

`$ npm install --save-dev stylelint-config-moxy stylelint`


## Usage

Create a `.stylelintrc` file with:

```json
{
    "extends": "stylelint-config-moxy"
}
```

## File naming convention

File names should be hyphenated (lower case with hyphens).

If a CSS file is strictly associated with a JS file, it should follow the name of the JS file, e.g.: if we need to style a `Button.js` react component, then the css file should be named `Button.css`.


## Comments convention

```css
/* ==========================================================================
   Main comment block
   ========================================================================== */

.title {}

/* Secondary comment block
   ============================================= */

.description {}

/* Tertiary comment block & line/inline comments */

.tags {
    /* Line comment */
    background: red;
    transition: color 0.2s ease-out;  /* Inline comment */
}
```
