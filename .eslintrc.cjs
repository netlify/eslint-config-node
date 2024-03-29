const { codes: httpStatusCodes } = require('statuses')

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'script',
  },
  plugins: ['markdown', 'html', 'fp', 'unicorn'],
  extends: [
    'eslint:recommended',
    'standard',
    'prettier',
    'plugin:eslint-comments/recommended',
    'plugin:n/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:ava/recommended',
    'plugin:react/recommended',
    'plugin:you-dont-need-lodash-underscore/all',
    'plugin:markdown/recommended',
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    // Those ESLint rules are not enabled by Prettier, ESLint recommended rules
    // nor standard JavaScript. However, they are still useful
    'array-callback-return': [2, { allowImplicit: true, checkForEach: true }],
    'arrow-body-style': 2,
    'block-scoped-var': 2,
    'class-methods-use-this': 2,
    complexity: [2, { max: 10 }],
    'consistent-this': 2,
    'default-case': 2,
    'default-param-last': 2,
    'func-name-matching': [2, { considerPropertyDescriptor: true }],
    'func-names': [2, 'as-needed'],
    'func-style': 2,
    'id-length': [2, { exceptions: ['t', '_'] }],
    'line-comment-position': 2,
    'max-classes-per-file': 2,
    'max-depth': [2, 2],
    'max-lines': [2, { max: 150, skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': [2, { max: 100, skipBlankLines: true, skipComments: true, IIFEs: true }],
    'max-nested-callbacks': [2, 2],
    'max-params': [2, { max: 4 }],
    'max-statements': [2, 15],
    'max-statements-per-line': [2, { max: 2 }],
    'multiline-comment-style': [2, 'separate-lines'],
    'no-bitwise': 2,
    'no-constructor-return': 2,
    'no-else-return': [2, { allowElseIf: false }],
    'no-extra-label': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': [2, { lexicalBindings: true }],
    'no-inline-comments': 2,
    'no-invalid-this': 2,
    'no-label-var': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-magic-numbers': [
      2,
      {
        ignore: [
          ...httpStatusCodes,
          // Common small numbers
          -2,
          -1,
          0,
          1,
          2,
          3,
        ],
        enforceConst: true,
        detectObjects: true,
      },
    ],
    'no-multi-assign': 2,
    'no-negated-condition': 2,
    // Conflicts with unicorn/no-nested-ternary
    'no-nested-ternary': 0,
    'no-nonoctal-decimal-escape': 2,
    'no-param-reassign': [
      2,
      {
        props: true,
        ignorePropertyModificationsFor: [
          'error',
          'errorA',
          'req',
          'request',
          'res',
          'response',
          'state',
          'runState',
          'logs',
          'logsArray',
          'currentEnv',
          't',
        ],
      },
    ],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-promise-executor-return': 2,
    'no-shadow': 2,
    'no-underscore-dangle': [2, { enforceInMethodNames: true }],
    'no-undef': [2, { typeof: true }],
    'no-unsafe-optional-chaining': [2, { disallowArithmeticOperators: true }],
    'no-unused-vars': [2, {}],
    'no-useless-computed-key': [2, { enforceForClassMembers: true }],
    'no-useless-concat': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'operator-assignment': 2,
    'padding-line-between-statements': 2,
    'prefer-arrow-callback': [2, { allowNamedFunctions: true }],
    'prefer-destructuring': 2,
    'prefer-exponentiation-operator': 2,
    'prefer-numeric-literals': 2,
    'prefer-object-spread': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    radix: [2, 'as-needed'],
    'require-await': 2,

    // TODO: enable
    // strict: 2,

    // The autofix makes it impossible to use those in debugging
    'ava/no-only-test': 0,
    'ava/no-skip-test': 0,

    'eslint-comments/no-unused-disable': 0,
    'eslint-comments/no-use': [
      2,
      { allow: ['eslint-disable-next-line', 'eslint-disable', 'eslint-enable', 'eslint-env'] },
    ],

    // Those rules are too strict
    'no-await-in-loop': 0,

    'fp/no-rest-parameters': 0,
    'fp/no-unused-expression': 0,
    'fp/no-nil': 0,
    'fp/no-throw': 0,

    'import/extensions': [2, 'never', { json: 'always' }],
    'import/max-dependencies': [2, { max: 20 }],
    'import/newline-after-import': 2,
    'import/no-amd': 2,
    'import/no-anonymous-default-export': 2,
    'import/no-cycle': 2,
    'import/no-deprecated': 2,
    'import/no-dynamic-require': [2, { esmodule: true }],
    'import/no-extraneous-dependencies': 2,
    'import/no-mutable-exports': 2,
    'import/no-named-default': 2,
    'import/no-namespace': 2,
    'import/no-self-import': 2,
    'import/no-unassigned-import': [2, { allow: ['*polyfill*', '**/*polyfill*', 'log-process-errors/**'] }],
    'import/no-unresolved': [2, { commonjs: true }],
    'import/no-useless-path-segments': [2, { commonjs: true }],
    'import/order': [
      2,
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    'n/no-sync': 2,
    'n/callback-return': 2,
    'n/exports-style': 2,
    'n/global-require': 2,
    'n/no-mixed-requires': 2,
    // Using path.join() is often not needed when using only core Node.js APIs
    'n/no-path-concat': 0,
    // TODO: remove once bug in eslint-plugin-node is fixed:
    // https://github.com/mysticatea/eslint-plugin-node/issues/250
    'n/no-unsupported-features/es-syntax': [
      2,
      {
        ignores: ['modules', 'dynamicImport'],
      },
    ],
    // Browser globals should not use `require()`. Non-browser globals should
    'n/prefer-global/console': 2,
    'n/prefer-global/buffer': [2, 'never'],
    'n/prefer-global/process': [2, 'never'],
    'n/prefer-global/url-search-params': 2,
    'n/prefer-global/url': 2,
    'n/prefer-global/text-decoder': 2,
    'n/prefer-global/text-encoder': 2,
    'n/prefer-promises/fs': 2,
    'n/prefer-promises/dns': 2,
    // This does not work well in a monorepo
    'n/shebang': 0,

    'promise/no-callback-in-promise': 2,
    'promise/no-nesting': 2,
    'promise/no-promise-in-callback': 2,
    'promise/no-return-in-finally': 2,
    'promise/prefer-await-to-callbacks': 2,
    'promise/prefer-await-to-then': 2,
    'promise/valid-params': 2,

    'react/prop-types': 0,

    'unicorn/custom-error-definition': 2,
    'unicorn/no-unused-properties': 2,
    // The additional `non-zero` option is useful for code consistency
    'unicorn/explicit-length-check': [2, { 'non-zero': 'not-equal' }],
    // TODO: harmonize with filename snake_case in other Netlify Dev projects
    'unicorn/filename-case': [2, { case: 'snakeCase', ignore: ['.*.md'] }],
    // The `sortCharacterClasses` option is not very useful
    'unicorn/better-regex': [2, { sortCharacterClasses: false }],

    // Too strict
    'unicorn/no-null': 0,
    'unicorn/no-array-reduce': 0,
    'unicorn/no-array-for-each': 0,
    'unicorn/prefer-module': 0,
    'unicorn/prefer-object-from-entries': 0,
    // Conflicts with no-unresolved and no-missing-import
    'unicorn/prefer-node-protocol': 0,
    // This rule gives too many false positives
    'unicorn/prevent-abbreviations': 0,
    // Conflicts with Prettier sometimes
    'unicorn/number-literal-case': 0,
    // Conflicts with the core ESLint `prefer-destructuring` rule
    'unicorn/no-unreadable-array-destructuring': 0,
    // Not useful for us
    'unicorn/expiring-todo-comments': 0,
    'unicorn/no-array-callback-reference': 0,
    // TODO: enable those rules
    'unicorn/no-process-exit': 0,
    'unicorn/import-style': 0,
    // Useful rules
    'unicorn/catch-error-name': 2,
    'unicorn/consistent-destructuring': 2,
    'unicorn/consistent-function-scoping': 2,
    'unicorn/empty-brace-spaces': 2,
    'unicorn/error-message': 2,
    'unicorn/escape-case': 2,
    'unicorn/import-index': 0,
    'unicorn/new-for-builtins': 2,
    'unicorn/no-abusive-eslint-disable': 2,
    'unicorn/no-array-method-this-argument': 2,
    'unicorn/no-array-push-push': 2,
    'unicorn/no-await-expression-member': 2,
    'unicorn/no-console-spaces': 2,
    'unicorn/no-document-cookie': 2,
    'unicorn/no-empty-file': 2,
    'unicorn/no-for-loop': 2,
    'unicorn/no-hex-escape': 2,
    'unicorn/no-instanceof-array': 2,
    'unicorn/no-invalid-remove-event-listener': 2,
    'unicorn/no-keyword-prefix': 0,
    'unicorn/no-lonely-if': 2,
    'unicorn/no-nested-ternary': 2,
    'unicorn/no-new-array': 2,
    'unicorn/no-new-buffer': 2,
    'unicorn/no-object-as-default-parameter': 2,
    'unicorn/no-static-only-class': 2,
    'unicorn/no-thenable': 2,
    'unicorn/no-this-assignment': 2,
    'unicorn/no-unsafe-regex': 0,
    'unicorn/no-useless-fallback-in-spread': 2,
    'unicorn/no-useless-length-check': 2,
    'unicorn/no-useless-promise-resolve-reject': 2,
    'unicorn/no-useless-spread': 2,
    'unicorn/no-useless-undefined': 2,
    'unicorn/no-zero-fractions': 2,
    'unicorn/numeric-separators-style': 2,
    'unicorn/prefer-add-event-listener': 2,
    'unicorn/prefer-array-find': 2,
    'unicorn/prefer-array-flat': 2,
    'unicorn/prefer-array-flat-map': 2,
    'unicorn/prefer-array-index-of': 2,
    'unicorn/prefer-array-some': 2,
    // TODO: Enable this by default when targeting a Node.js version that supports `Array#at`.
    'unicorn/prefer-at': 0,
    'unicorn/prefer-code-point': 2,
    'unicorn/prefer-date-now': 2,
    'unicorn/prefer-default-parameters': 2,
    'unicorn/prefer-dom-node-append': 2,
    'unicorn/prefer-dom-node-dataset': 2,
    'unicorn/prefer-dom-node-remove': 2,
    'unicorn/prefer-dom-node-text-content': 2,
    'unicorn/prefer-export-from': 2,
    'unicorn/prefer-includes': 2,
    'unicorn/prefer-json-parse-buffer': 2,
    'unicorn/prefer-keyboard-event-key': 2,
    'unicorn/prefer-math-trunc': 2,
    'unicorn/prefer-modern-dom-apis': 2,
    'unicorn/prefer-negative-index': 2,
    'unicorn/prefer-number-properties': 2,
    'unicorn/prefer-optional-catch-binding': 2,
    'unicorn/prefer-prototype-methods': 2,
    'unicorn/prefer-query-selector': 2,
    'unicorn/prefer-reflect-apply': 2,
    'unicorn/prefer-regexp-test': 2,
    'unicorn/prefer-set-has': 2,
    'unicorn/prefer-spread': 2,
    // TODO: Enable this by default when targeting Node.js 16.
    'unicorn/prefer-string-replace-all': 0,
    'unicorn/prefer-string-slice': 2,
    'unicorn/prefer-string-starts-ends-with': 2,
    'unicorn/prefer-string-trim-start-end': 2,
    'unicorn/prefer-switch': 2,
    'unicorn/prefer-ternary': 2,
    // TODO: Enable this by default when targeting Node.js 14.
    'unicorn/prefer-top-level-await': 0,
    'unicorn/prefer-type-error': 2,
    'unicorn/relative-url-style': 2,
    'unicorn/require-array-join-separator': 2,
    'unicorn/require-number-to-fixed-digits-argument': 2,
    // Turned off because we can't distinguish `window.postMessage` and `{Worker,MessagePort,Client,BroadcastChannel}#postMessage()`
    // See https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1396
    'unicorn/require-post-message-target-origin': 0,
    'unicorn/string-content': 0,
    'unicorn/template-indent': 1,
    'unicorn/throw-new-error': 2,
  },
  overrides: [
    {
      files: ['**/tests.{cjs,mjs,js}', '**/tests/**/*.{cjs,mjs,js}'],
      rules: {
        'max-lines': 0,
        'n/no-unpublished-require': 0,
        'n/no-missing-require': 0,
        'unicorn/no-process-exit': 0,
        'fp/no-mutating-methods': 0,
        'fp/no-mutation': 0,
        'fp/no-delete': 0,
      },
    },
    {
      files: ['.*.{cjs,mjs,js}'],
      rules: {
        'max-lines': 0,
        'no-magic-numbers': 0,
        'n/no-unpublished-require': 0,
      },
    },
    {
      files: ['scripts/**/*.{cjs,mjs,js}'],
      rules: {
        'n/no-unpublished-require': 0,
      },
    },
    {
      // **/*.md/*.js references code blocks inside markdown files
      files: ['**/*.md/*.js'],
      rules: {
        'no-undef': 0,
        'no-unused-vars': 0,

        // Inline comments making code samples vertically shorter are useful
        'line-comment-position': 0,
        'no-inline-comments': 0,

        // Using literal numbers is simpler in documentation examples
        'no-magic-numbers': 0,

        strict: 0,
        'import/no-unresolved': 0,
        'n/no-missing-require': 0,
        'n/no-missing-import': 0,

        // code blocks in markdown files have autogenerated file names
        'unicorn/filename-case': 0,

        // Documentation might import dependencies not in package.json
        'n/no-unpublished-require': 0,
        'n/no-extraneous-require': 0,
        'n/no-extraneous-import': 0,
        'import/no-extraneous-dependencies': 0,
      },
    },
    // TypeScript-specific settings.
    {
      files: ['*.cts', '*mts', '*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
    },
    // React
    {
      files: ['*.jsx', '*.tsx'],
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      env: {
        browser: true,
      },
      rules: {
        'n/no-unsupported-features/es-syntax': 0,
        'unicorn/filename-case': 0,
        'unicorn/import-index': 0,
      },
    },
    // HTML files
    {
      files: ['*.html'],
      env: {
        browser: true,
      },
    },
    {
      // ES modules
      files: ['*.mjs'],
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        'import/extensions': [2, 'always'],
      },
    },
    // Cypress test files
    {
      files: ['cypress/**/*.{cjs,mjs,js}'],
      parserOptions: {
        sourceType: 'module',
      },
      env: {
        'cypress/globals': true,
      },
      plugins: ['cypress'],
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['*.cts', '*mts', '.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.cjs', '.mjs', '.js', '.jsx', '.d.ts', '*.cts', '*mts', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    node: {
      tryExtensions: ['.cjs', '.mjs', '.js', '*.cts', '*mts', '.ts', '.d.ts'],
    },
    react: {
      version: '16.13.1',
    },
  },
}
