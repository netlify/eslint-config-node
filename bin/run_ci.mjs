#!/usr/bin/env node
import { argv } from 'process'

import { execaCommand } from 'execa'
import isCI from 'is-ci'

const [, , command] = argv

const runCI = async function () {
  if (isCI) {
    await execaCommand(command, { stdio: 'inherit' })
  }
}

runCI()
