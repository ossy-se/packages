#!/usr/bin/env node
/* eslint-disable global-require, no-unused-vars */
import ResourceTemplates from './resource-templates/cli.js'

const [_, __, handlerName, ...restArgs] = process.argv

const handler = {
  'resource-templates': () => ResourceTemplates.handler
}[handlerName]

handler(restArgs)
