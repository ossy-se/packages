#!/usr/bin/env node
/* eslint-disable global-require, no-unused-vars */
import { build } from './build.js'

const [_, __, command, ...restArgs] = process.argv

if (!command) {
  console.error({ message: '[@ossy/app] No command provided' })
}

const commandHandler = {
  'build': build,
}[command]

if (!commandHandler) {
  console.error({ message: `[@ossy/app] Unknown command: ${command}` })
}

commandHandler(restArgs)