#!/usr/bin/env node
import { argv } from 'process'

import execa from 'execa'
import isCI from 'is-ci'

const [, , command] = argv

const runLocal = async function () {
  if (!isCI) {
    await execa.command(command, { stdio: 'inherit' })
  }
}

runLocal()
