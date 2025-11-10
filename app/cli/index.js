#!/usr/bin/env node
/* eslint-disable global-require, no-unused-vars */
import { build } from './build.js'
import { dev } from './dev.js'

const [_, __, command, ...restArgs] = process.argv

if (!command) {
  console.error({ message: '[@ossy/app] No command provided' })
}

const commandHandler = {
  'build': build,
  'dev': dev,
}[command]

if (!commandHandler) {
  console.error({ message: `[@ossy/app] Unknown command: ${command}` })
}

commandHandler(restArgs)