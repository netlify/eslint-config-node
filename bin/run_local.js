#!/usr/bin/env node
'use strict'

const process = require('process')

const execa = require('execa')
const isCI = require('is-ci')

const [, , command] = process.argv

const runLocal = async function () {
  if (!isCI) {
    await execa.command(command, { stdio: 'inherit' })
  }
}

runLocal()
