#!/usr/bin/env node
import { resolve } from 'path'
import { readFileSync } from 'fs'
import arg from 'arg'
import { logInfo, logError, logErrorAndReject, logDebug } from '../log.js'

const Api = {
  uploadResourceTemplates: (apiUrl, token, workspaceId, resourceTemplates) => {
    const endpoint = `${apiUrl}/workspaces/${workspaceId}/resource-templates`

    const fetchOptions = {
      method: 'POST',
      headers: { 'Authorization': token, 'Content-Type': 'application/json' },
      body: JSON.stringify(resourceTemplates)
    }

    return fetch(endpoint, fetchOptions)
  }
}

const resolveConfigImport = path => path.endsWith('json')
  ? Promise.resolve(JSON.parse(readFileSync(path), 'utf8'))
  : import(path)

const importResourceTemplates = options => {

  const parsedArgs = arg({
    '--authentication': String,
    '--a': '--authentication',

    '--config': String,
    '-c': '--config',
  }, { argv: options })

  logInfo({ message: '[CMS] reading files' })
  const token = parsedArgs['--authentication'];
  const filePath = resolve(parsedArgs['--config'])

  if (!token) return logErrorAndReject({ message: '[CMS] No token provided with --authentication'})

  return resolveConfigImport(filePath)
    .then(module => {
      const config = module?.default
      const apiUrl = config?.apiUrl || 'https://api.ossy.se/api/v0'
      const workspaceId = config?.workspaceId
      const resourceTemplates = config?.resourceTemplates

      if (!workspaceId) return logErrorAndReject({ message: '[CMS] No workspaceId provided in ossy.json'})
      if (!resourceTemplates) return logErrorAndReject({ message: '[CMS] No resource templates provided in ossy.json'})

      logInfo({ message: '[CMS] uploading resource templates' })

      Api.uploadResourceTemplates(apiUrl, token, workspaceId, resourceTemplates)
          .then(response => {
            logInfo({ message: '[CMS] Done' })
          })
          .catch(error => logError({ message: '[CMS] Error', error }))
    })

}

export const handler = ([command, ...options]) => {
  !!command
    ? { 'import-resource-templates': importResourceTemplates }[command](options)
    : logError({ message: '[CMS] No command provided' })
}
