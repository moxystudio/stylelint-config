# stylelint-config

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]


[npm-url]:https://npmjs.org/package/@moxy/stylelint-config
[npm-image]:https://img.shields.io/npm/v/@moxy/stylelint-config.svg
[downloads-image]:https://img.shields.io/npm/dm/@moxy/stylelint-config.svg
[build-status-url]:https://github.com/moxystudio/stylelint-config/actions
[build-status-image]:https://img.shields.io/github/workflow/status/moxystudio/stylelint-config/Node%20CI/master
[david-dm-url]:https://david-dm.org/moxystudio/stylelint-config
[david-dm-image]:https://img.shields.io/david/moxystudio/stylelint-config.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/stylelint-config?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/stylelint-config.svg

MOXY [stylelint](http://stylelint.org/) configuration to be used across projects.


## Installation

```ssh
$ npm install stylelint @moxy/stylelint-config --save-dev
```

## Usage

Create a `.stylelintrc.json` file with:

```json
{
    "extends": "@moxy/stylelint-config"
}
```

ℹ️ By default, stylelint will run on all files. If your project uses separate CSS files, it's better to only lint `.css` files to avoid unexpected errors. You can do this by adding the tweaking `ignoreFiles`:

```json
{
    "extends": "@moxy/stylelint-config",
    "ignoreFiles": [
        "!**/*.css"
    ]
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

```sh
$ npm test
$ npm test -- --watch # during development
```

## License

[MIT License](http://opensource.org/licenses/MIT)
