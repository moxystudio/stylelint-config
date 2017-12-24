/* eslint quote-props:0 */

'use strict';

const path = require('path');
const stylelint = require('stylelint');
const glob = require('glob');

const files = glob.sync(`${__dirname}/fixtures/**/*.css`);

files.forEach((file) =>
    it(`should pass on ${path.relative(__dirname, file)}`, async () => {
        const result = await stylelint.lint({ files: file });
        const output = JSON.parse(result.output);

        output.forEach((entry) => {
            const result = entry.warnings
            .sort((warn1, warn2) => warn1.line - warn2.line || warn1.column - warn2.column || warn1.rule.localeCompare(warn2.rule))
            .map((warn) => ({ rule: warn.rule, severity: warn.severity, line: warn.line, column: warn.column }));

            expect(result).toMatchSnapshot();
        });
    })
);
