// CommonJS allows omitting `.js` but not `.cjs`
// eslint-disable-next-line import/extensions
const baseEslintrc = require('./.eslintrc.cjs')

// ESLint configuration for packages using pure ES modules.
// This should be merged to the main `.eslintrc.js` once all our repositories
// have migrated to pure ES modules.
module.exports = {
  ...baseEslintrc,
  parserOptions: {
    ...baseEslintrc.parserOptions,
    sourceType: 'module',
  },
  rules: {
    ...baseEslintrc.rules,
    'import/extensions': [2, 'ignorePackages'],
  },
}
