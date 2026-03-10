#!/usr/bin/env node
/* eslint-disable global-require, no-unused-vars */
import { handler } from './resource-templates/cli.js'

const [_, __, handlerName, ...restArgs] = process.argv

const handler = {
  'resource-templates': () => handler
}[handlerName]

handler(restArgs)
