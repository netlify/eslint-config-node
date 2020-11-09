#!/usr/bin/env node
// Upload test coverage to Codecov
// We need to use a Node.js script instead of using a npm script or the official
// GitHub action because we want to send OS and Node.js version as flags.
// Codecov does not support dots nor dashes in flags. However, GitHub actions
// variables for those do, so we need to strip them.
const process = require('process')

const execa = require('execa')

const [, , os, nodeVersion] = process.argv

const reportCoverage = async function () {
  try {
    const curlProcess = execa('curl', ['-s', 'https://codecov.io/bash'], {
      stdin: 'ignore',
      stdout: 'pipe',
      stderr: 'inherit',
    })
    const bashProcess = execa(
      'bash',
      [
        '-s',
        '--',
        '-Z',
        '-f',
        'coverage/coverage-final.json',
        '-F',
        os.replace('-latest', ''),
        '-F',
        nodeVersion.replace(/\./g, '_'),
      ],
      { stdin: 'pipe', stdout: 'inherit', stderr: 'inherit' },
    )
    curlProcess.stdout.pipe(bashProcess.stdin)
    await Promise.all([curlProcess, bashProcess])
    // Codecov API fails quite often. Therefore, we don't exit this process with
    // non-0 code
  } catch (error) {
    console.error(`Could not upload test coverage: ${error.message}`)
  }
}

reportCoverage()
