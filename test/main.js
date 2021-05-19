const test = require('ava')
const execa = require('execa')

const ESLINT_CONFIG = `${__dirname}/../.eslintrc.js`
const TEST_FILE = `${__dirname}/fixtures/_valid.js`

test('Smoke test', async (t) => {
  const { exitCode, stdout, stderr } = await execa('eslint', [TEST_FILE, '--config', ESLINT_CONFIG], {
    preferLocal: true,
    // @todo remove once https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore/pull/315 is merged and released
    env: { NODE_OPTIONS: '--no-deprecation' },
  })
  t.is(exitCode, 0)
  t.is(stdout.trim(), '')
  t.is(stderr.trim(), '')
})
