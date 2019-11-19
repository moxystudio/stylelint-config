'use strict';

// See https://github.com/AndyOGo/stylelint-declaration-strict-value

const properties = [
    '/color/',
    'fill',
    'font-family',
    'font-weight',
    'stroke',
    'z-index',
];

const options = {
    'ignoreKeywords': ['currentColor', 'transparent', 'inherit'],
    'disableFix': true,
};

module.exports = {
    'plugins': [
        'stylelint-declaration-strict-value',
    ],
    'rules': {
        'scale-unlimited/declaration-strict-value': [properties, options],
    },
};
