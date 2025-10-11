#!/usr/bin/env node
/* eslint-disable global-require, no-unused-vars */

const [_, __, handlerName, ...restArgs] = process.argv

const loadHandler = {
  cms: () => import('./cms/cli.js')
}[handlerName]

!!loadHandler && loadHandler().then(({ handler })=> handler(restArgs))
