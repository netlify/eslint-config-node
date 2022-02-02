import { fileURLToPath } from 'url'

import test from 'ava'
import execa from 'execa'

const ESLINT_CONFIG = fileURLToPath(new URL('../.eslintrc.cjs', import.meta.url))
const TEST_FILE = fileURLToPath(new URL('fixtures/_valid.mjs', import.meta.url))

test('Smoke test', async (t) => {
  const { exitCode, stdout, stderr } = await execa('eslint', [TEST_FILE, '--config', ESLINT_CONFIG], {
    preferLocal: true,
  })
  t.is(exitCode, 0)
  t.is(stdout.trim(), '')
  t.is(stderr.trim(), '')
})
