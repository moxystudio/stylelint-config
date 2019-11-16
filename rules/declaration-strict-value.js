'use strict';

// See https://github.com/AndyOGo/stylelint-declaration-strict-value

const properties = [
    '/color/',
    'font-family',
    'font-weight',
    'z-index',
];

module.exports = {
    'plugins': [
        'stylelint-declaration-strict-value',
    ],
    'rules': {
        'scale-unlimited/declaration-strict-value': [properties, {}],
    },
};
