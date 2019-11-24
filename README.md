# stylelint-config

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] 


[npm-url]:https://npmjs.org/package/@moxy/stylelint-config
[npm-image]:https://img.shields.io/npm/v/@moxy/stylelint-config.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/stylelint-config.svg
[travis-url]:https://travis-ci.org/moxystudio/stylelint-config
[travis-image]:https://img.shields.io/travis/moxystudio/stylelint-config/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/stylelint-config
[david-dm-image]:https://img.shields.io/david/moxystudio/stylelint-config.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/stylelint-config?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/stylelint-config.svg

MOXY [stylelint](http://stylelint.org/) configuration to be used across projects.


## Installation

`$ npm install stylelint @moxy/stylelint-config --save-dev`


## Usage

Create a `.stylelintrc.json` file with:

```json
{
    "extends": "@moxy/stylelint-config"
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

/*
   Multi
   line
   comment
*/
```


## Tests

`$ npm test`   
`$ npm test -- --watch` during development


## License

[MIT License](http://opensource.org/licenses/MIT)
