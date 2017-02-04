'use strict';

module.exports = {
    'extends': 'stylelint-config-suitcss',
    'legacyNumberedSeverities': false,
    'rules': {
        // require or disallow an empty line before at-rules.
        'at-rule-empty-line-before': ['always', {
            'except': ['first-nested', 'blockless-group'],
        }],
        // require or disallow an empty line before comments.
        'comment-empty-line-before': ['always', {
            'except': ['first-nested'],
            'ignore': ['stylelint-commands', 'between-comments'],
        }],
        // require or disallow an empty line before nested rules
        'rule-nested-empty-line-before': ['always-multi-line', {
            'except': ['first-nested'],
            'ignore': ['after-comment'],
        }],
        'max-line-length': 140,
        // specify indentation
        'indentation': 4,
        // specify the order of properties within rules.
        // based on https://gist.github.com/MadLittleMods/929bcdefb2b29c9b97c3
        'declaration-block-properties-order': [
            // overview
            {
                'order': 'strict',
                'properties': [
                    'all',
                    'content',
                    'box-sizing',
                    'will-change',
                ],
            },

            // position, dimensions and boundaries
            {
                'order': 'strict',
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

            // display
            {
                'order': 'strict',
                'properties': [
                    'display',

                    // flexbox only
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

            // asthethic
            {
                'order': 'strict',
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

            // text
            {
                'order': 'strict',
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

            // paragraphs and wrapping
            {
                'strict': true,
                'properties': [
                    'word-break',
                    'hyphens',
                    'orphans',
                    'widows',
                ],
            },

            // cursor
            {
                'strict': true,
                'properties': [
                    'pointer-events',
                    'user-select',
                    'cursor',
                    'resize',
                ],
            },

            // animations & transitions
            {
                'strict': true,
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
                ],
            },
        ],
    },
};
