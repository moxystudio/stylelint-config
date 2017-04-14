# stylelint-config

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/stylelint-config-moxy
[npm-image]:http://img.shields.io/npm/v/stylelint-config-moxy.svg
[downloads-image]:http://img.shields.io/npm/dm/stylelint-config-moxy.svg
[travis-url]:https://travis-ci.org/moxystudio/stylelint-config
[travis-image]:http://img.shields.io/travis/moxystudio/stylelint-config/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/stylelint-config
[david-dm-image]:https://img.shields.io/david/moxystudio/stylelint-config.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/stylelint-config#info=devDependencies
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/stylelint-config.svg

MOXY [stylelint](http://stylelint.org/) configuration to be used across projects.


## Installation

`$ npm install --save-dev stylelint stylelint-config-moxy`


## Usage

Create a `.stylelintrc.json` file with:

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

/*
   Multi
   line
   comment
*/
```


## License

[MIT License](http://opensource.org/licenses/MIT)
