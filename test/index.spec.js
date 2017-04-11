/* eslint quote-props:0 */

'use strict';

const stylelint = require('stylelint');

it('should pass on all files', () => {
    return stylelint.lint({ files: `${__dirname}/fixtures/**/*.css` })
    .then((result) => {
        const output = JSON.parse(result.output);

        output.forEach((entry) => {
            const filePath = entry.source;

            // Build actual
            const actual = entry.warnings
                .sort((warn1, warn2) => warn1.line - warn2.line || warn1.column - warn2.column || warn1.rule.localeCompare(warn2.rule))
                .map((warn) => ({ rule: warn.rule, severity: warn.severity, line: warn.line, column: warn.column }));

            // Uncomment line below to rewrite all expected json results
            // require('fs').writeFileSync(filePath.replace(/\.css$/, '.json'), JSON.stringify(actual, null, 2));

            // Read expected
            const expected = require(filePath.replace(/\.css$/, '.json'));  // eslint-disable-line global-require

            try {
                expect(actual).toEqual(expected);
            } catch (err) {
                console.log(`Tests failed at ${filePath}`);
                throw err;
            }
        });
    });
});
