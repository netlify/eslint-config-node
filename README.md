[![Build](https://github.com/netlify/eslint-config-node/workflows/Build/badge.svg)](https://github.com/netlify/node-eslint-config/actions)
[![Node](https://img.shields.io/node/v/@netlify/eslint-config-node.svg?logo=node.js)](https://www.npmjs.com/package/@netlify/node-eslint-config)

Linting and formatting configuration shared by Netlify Node.js repositories:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Editorconfig](https://editorconfig.org/)
- `.gitattributes`

## How to add to a new Node.js repository

- `npm install -D @netlify/eslint-config-node husky cross-env npm-run-all`
- Add the following `.eslintrc.js` at the root. Individual `rules` and `overrides` can be tweaked for the specific
  project.

```js
const { overrides } = require('@netlify/eslint-config-node')

module.exports = {
  extends: '@netlify/eslint-config-node',
  rules: {},
  overrides: [...overrides],
}
```

- Add the following `.prettierrc.json` at the root:

```json
"@netlify/eslint-config-node/.prettierrc.json"
```

- Copy the `.editorconfig`,`.gitattributes` and `./scripts/run_on_error.js` files relativity to the root of the project.
- Add the following properties to the `package.json`. Please replace the `scriptsArgs` globbing expressions to match the
  files where the source JavaScript/Markdown/HTML/JSON/YAML files are located. `npm run format` should also be run
  during `npm test` and `npm run format:ci` during CI
  ([example](https://github.com/netlify/cli/blob/master/.github/workflows/main.yml)).

```json
{
  "scripts": {
    "format": "run-s format:check-fix:*",
    "format:ci": "run-s format:check:*",
    "format:check-fix:lint": "./scripts/run_on_error.js format:check:lint format:fix:lint",
    "format:check:lint": "cross-env-shell eslint $npm_package_scriptsArgs_eslint",
    "format:fix:lint": "cross-env-shell eslint --fix $npm_package_scriptsArgs_eslint",
    "format:check-fix:prettier": "./scripts/run_on_error.js format:check:prettier format:fix:prettier",
    "format:check:prettier": "cross-env-shell prettier --check $npm_package_scriptsArgs_prettier",
    "format:fix:prettier": "cross-env-shell prettier --write $npm_package_scriptsArgs_prettier"
  },
  "scriptsArgs": {
    "eslint": "--ignore-path .gitignore --cache --format=codeframe --max-warnings=0 \"{src,scripts,site,tests,.github}/**/*.{js,md,html}\" \"*.{js,md,html}\" \".*.{js,md,html}\"",
    "prettier": "--ignore-path .gitignore --loglevel=warn \"{src,scripts,site,tests,.github}/**/*.{js,md,yml,json,html}\" \"*.{js,yml,json,html}\" \".*.{js,yml,json,html}\" \"!package-lock.json\""
  },
  "husky": {
    "hooks": {
      "pre-push": "npm run format"
    }
  }
}
```
