'use strict';

// See https://github.com/AndyOGo/stylelint-declaration-strict-value

const properties = [
    'font-family',
    'font-weight',
    'z-index',
];

const options = {
    'ignoreKeywords': ['auto', 'inherit', 'initial', 'unset'],
    'severity': 'warning',
    'message': 'Using plain values directly is not recommended, please consider using a CSS custom property instead.',
};

module.exports = {
    'plugins': [
        'stylelint-declaration-strict-value',
    ],
    'rules': {
        'scale-unlimited/declaration-strict-value': [properties, options],
    },
};
