'use strict';

// Overrides to https://github.com/suitcss/stylelint-config-suitcss
module.exports = {
    'rules': {
        // Require or disallow an empty line before at-rules.
        'at-rule-empty-line-before': ['always', {
            'except': ['blockless-after-same-name-blockless', 'inside-block'],
            'ignore': ['after-comment'],
        }],
        // Require or disallow an empty line before comments.
        'comment-empty-line-before': ['always', {
            'except': ['first-nested'],
            'ignore': ['after-comment', 'stylelint-commands'],
        }],
        // Require or disallow an empty line before nested rules
        'rule-empty-line-before': ['always-multi-line', {
            'except': ['first-nested'],
        }],
        // Disallow duplicate properties within declaration blocks
        'declaration-block-no-duplicate-properties': [true, {
            'ignore': ['consecutive-duplicates-with-different-values'],
        }],
        // Do not allow empty comments
        'comment-no-empty': true,
        // Max line length
        'max-line-length': 140,
        // Specify indentation
        'indentation': 4,
    },
};
