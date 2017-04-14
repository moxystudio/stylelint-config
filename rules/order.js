'use strict';

// See https://github.com/hudochenkov/stylelint-order
module.exports = {
    'plugins': [
        'stylelint-order',
    ],
    'rules': {
        // Remove alphabetic order enforced by suitcss (remove when they https://github.com/suitcss/stylelint-config-suitcss/pull/29 gets merged)
        'order/declaration-block-properties-alphabetical-order': null,
        // Remove alphabetic order enforced by suitcss
        'order/properties-alphabetical-order': null,
        'order/properties-order': [
            [
                // Overview
                {
                    'properties': [
                        'all',
                        'content',
                        'box-sizing',
                        'will-change',
                    ],
                },

                // Position, dimensions and boundaries
                {
                    'properties': [
                        'position',
                        'top',
                        'right',
                        'bottom',
                        'left',

                        'width',
                        'min-width',
                        'max-width',
                        'height',
                        'min-height',
                        'max-height',

                        'z-index',
                        'overflow',
                        'overflow-x',
                        'overflow-y',

                        'margin',
                        'padding',

                        'transform',
                        'zoom',
                    ],
                },

                // Display
                {
                    'properties': [
                        'display',

                        // Flexbox only
                        'flex',
                        'flex-basis',
                        'flex-grow',
                        'flex-shrink',
                        'flex-flow',
                        'flex-wrap',
                        'flex-direction',
                        'justify-content',
                        'align-self',
                        'align-items',
                        'align-content',
                        'order',

                        'clear',
                        'float',
                        'visibility',
                        'vertical-align',
                        'direction',

                        // Table related stuff only
                        'table-layout',
                        'empty-cells',
                    ],
                },

                // Asthethic
                {
                    'properties': [
                        'list-style',
                        'border',
                        'outline',

                        'opacity',
                        'object-fit',
                        'object-position',
                        'clip-path',
                        'background',

                        'border-radius',
                        'box-shadow',
                        'filter',
                    ],
                },

                // Text
                {
                    'properties': [
                        'color',

                        'font',
                        'font-family',
                        'font-variant',
                        'font-size',
                        'font-size-adjust',
                        'font-kerning',
                        'font-weight',
                        'font-stretch',
                        'font-style',
                        'font-smoothing',

                        'text-decoration',
                        'text-underline-position',
                        'text-transform',
                        'text-shadow',
                        'text-overflow',
                        'text-align',
                        'text-justify',
                        'text-indent',

                        'line-height',
                        'tab-size',
                        'white-space',
                        'word-spacing',
                        'word-wrap',
                        'overflow-wrap',
                    ],
                },

                // Paragraphs and wrapping
                {
                    'properties': [
                        'word-break',
                        'hyphens',
                        'orphans',
                        'widows',
                    ],
                },

                // Cursor
                {
                    'properties': [
                        'pointer-events',
                        'user-select',
                        'cursor',
                        'resize',
                    ],
                },

                // Animations & transitions
                {
                    'properties': [
                        'animation',
                        'animation-name',
                        'animation-play-state',
                        'animation-direction',
                        'animation-fill-mode',
                        'animation-duration',
                        'animation-delay',
                        'animation-iteration-count',
                        'animation-timing-function',

                        'transition',
                        'transition-property',
                        'transition-duration',
                        'transition-delay',
                        'transition-timing-function',
                    ],
                },
            ],
            { 'unspecified': 'bottom' },
        ],
    },
};
