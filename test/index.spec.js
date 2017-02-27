/* eslint quote-props:0 */

'use strict';

const stylelint = require('stylelint');

function runStylelintOnGoodFiles() {
    return stylelint.lint({ files: `${__dirname}/fixtures/**/good-*.css`, formatter: 'string' })
    .then((result) => {
        const output = result.output.trim();

        output && console.log(output);

        expect(result.errored).toBe(false);
    });
}

function runStylelintOnBadFiles() {
    return stylelint.lint({ files: `${__dirname}/fixtures/**/bad-*.css` })
    .then((result) => {
        expect(result.errored).toBe(true);

        const output = JSON.parse(result.output);

        output.forEach((entry) => {
            const expected = require(entry.source.replace(/\.css$/, '.warns.json'));  // eslint-disable-line global-require
            const actual = entry.warnings
                .sort((warn1, warn2) => warn1.line - warn2.line)
                .map((warn) => ({ rule: warn.rule, severity: warn.severity }));

            expect(actual).toEqual(expected);
        });
    });
}

// ----------------------------------------------------------

it('should pass on good files', () => runStylelintOnGoodFiles());

it('should fail on bad files', () => runStylelintOnBadFiles());
