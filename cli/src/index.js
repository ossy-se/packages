#!/usr/bin/env node
import { build, dev } from '@ossy/app'
import * as Cms from './cms/cli.js'

const [,, command, ...restArgs] = process.argv

if (!command) {
  console.error('[@ossy/cli] No command provided. Usage: ossy dev | build | cms <subcommand>')
  process.exit(1)
}

const run = async () => {
  if (command === 'cms') {
    Cms.handler(restArgs)
    return
  }
  if (command === 'dev') {
    await dev(restArgs)
    return
  }
  if (command === 'build') {
    await build(restArgs)
    return
  }
  console.error(`[@ossy/cli] Unknown command: ${command}`)
  process.exit(1)
}

run()
