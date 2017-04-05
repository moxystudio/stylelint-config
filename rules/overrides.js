'use strict';

// Overrides to https://github.com/suitcss/stylelint-config-suitcss
module.exports = {
    'rules': {
        // require or disallow an empty line before at-rules.
        'at-rule-empty-line-before': ['always', {
            'except': ['blockless-after-same-name-blockless', 'inside-block'],
            'ignore': ['after-comment'],
        }],
        // require or disallow an empty line before comments.
        'comment-empty-line-before': ['always', {
            'except': ['first-nested'],
            'ignore': ['after-comment', 'stylelint-commands'],
        }],
        // require or disallow an empty line before nested rules
        'rule-empty-line-before': ['always-multi-line', {
            'except': ['first-nested'],
        }],
        // disallow duplicate properties within declaration blocks
        'declaration-block-no-duplicate-properties': [true, {
            'ignore': ['consecutive-duplicates-with-different-values'],
        }],
        // do not allow empty comments
        'comment-no-empty': true,
        // max line length
        'max-line-length': 140,
        // specify indentation
        'indentation': 4,
    },
};
