const test = require('ava')
const execa = require('execa')

const ESLINT_CONFIG = `${__dirname}/../.eslintrc.js`
const TEST_FILE = `${__dirname}/fixtures/_valid.js`

test('Smoke test', async (t) => {
  const { exitCode, stdout, stderr } = await execa('eslint', [TEST_FILE, '--config', ESLINT_CONFIG], {
    preferLocal: true,
  })
  t.is(exitCode, 0)
  t.is(stdout.trim(), '')
  t.is(stderr.trim(), '')
})
