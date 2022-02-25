[![Build](https://github.com/netlify/eslint-config-node/workflows/Build/badge.svg)](https://github.com/netlify/node-eslint-config/actions)
[![Node](https://img.shields.io/node/v/@netlify/eslint-config-node.svg?logo=node.js)](https://www.npmjs.com/package/@netlify/node-eslint-config)

Linting and formatting configuration shared by Netlify Node.js repositories:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Editorconfig](https://editorconfig.org/)
- `.gitattributes`
- `.husky/`

## How to add to a new Node.js repository

If you're creating a new repository, you can use the
[following GitHub template](https://github.com/netlify/node-template). Otherwise, please follow those steps:

- Add a `.eslintrc.cjs` file to the root of the project. Individual `rules` and `overrides` can be tweaked for the
  specific project.

```js
// Use '@netlify/eslint-config-node/esm' if the repository is using pure ES modules
const { overrides } = require('@netlify/eslint-config-node')

module.exports = {
  extends: '@netlify/eslint-config-node',
  rules: {},
  overrides: [...overrides],
}
```

- Add the following `.prettierrc.json` to the root of the project:

```json
"@netlify/eslint-config-node/.prettierrc.json"
```

- Copy the `commitlint.config.cjs`, `.editorconfig` and `.gitattributes` files to the root of the project.
- Add the following properties to the `package.json`. Please replace the `config` globbing expressions to match the
  files where the source JavaScript/Markdown/HTML/JSON/YAML files are located. `npm run format` should also be run
  during `npm test` and `npm run format:ci` during CI
  ([example](https://github.com/netlify/cli/blob/main/.github/workflows/main.yml)).

```json
{
  "scripts": {
    "format": "run-s format:check-fix:*",
    "format:ci": "run-s format:check:*",
    "format:check-fix:lint": "run-e format:check:lint format:fix:lint",
    "format:check:lint": "cross-env-shell eslint $npm_package_config_eslint",
    "format:fix:lint": "cross-env-shell eslint --fix $npm_package_config_eslint",
    "format:check-fix:prettier": "run-e format:check:prettier format:fix:prettier",
    "format:check:prettier": "cross-env-shell prettier --check $npm_package_config_prettier",
    "format:fix:prettier": "cross-env-shell prettier --write $npm_package_config_prettier"
  },
  "config": {
    "eslint": "--ignore-path .gitignore --cache --format=codeframe --max-warnings=0 \"{src,scripts,tests,.github}/**/*.{cjs,mjs,js,md,html}\" \"*.{cjs,mjs,js,md,html}\" \".*.{cjs,mjs,js,md,html}\"",
    "prettier": "--ignore-path .gitignore --loglevel=warn \"{src,scripts,tests,.github}/**/*.{cjs,mjs,js,md,yml,json,html}\" \"*.{cjs,mjs,js,yml,json,html}\" \".*.{cjs,mjs,js,yml,json,html}\" \"!package-lock.json\""
  }
}
```

- Add `.eslintcache` to the `.gitignore`
