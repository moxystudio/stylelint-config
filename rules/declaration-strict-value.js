'use strict';

// See https://github.com/AndyOGo/stylelint-declaration-strict-value

const properties = [
    'font-family',
    'font-weight',
    'z-index',
];

const options = {
    'ignoreKeywords': ['inherit', 'initial', 'unset'],
    'disableFix': true,
    'severity': 'warning',
    'message': 'Using plain values directly is not allowed, please use a CSS custom property instead.',
};

module.exports = {
    'plugins': [
        'stylelint-declaration-strict-value',
    ],
    'rules': {
        'scale-unlimited/declaration-strict-value': [properties, options],
    },
};
