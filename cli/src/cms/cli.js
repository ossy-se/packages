import { resolve } from 'path'
import { readFileSync, existsSync } from 'fs'
import arg from 'arg'
import { logInfo, logError } from '../log.js'

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

const resolveConfigImport = (filePath) =>
  filePath.endsWith('json')
    ? Promise.resolve(JSON.parse(readFileSync(filePath, 'utf8')))
    : import(filePath)

const upload = (options) => {
  const parsedArgs = arg({
    '--authentication': String,
    '--a': '--authentication',
    '--ossy-file': String,
  }, { argv: options })

  const token = parsedArgs['--authentication']
  const ossyFilePath = parsedArgs['--ossy-file']

  if (!token) {
    logError({ message: '[@ossy/cli] No token provided. Use --authentication or -a' })
    process.exit(1)
  }
  if (!ossyFilePath) {
    logError({ message: '[@ossy/cli] No config file provided. Use --ossy-file' })
    process.exit(1)
  }

  logInfo({ message: '[@ossy/cli] Reading config...' })
  const filePath = resolve(ossyFilePath)

  return resolveConfigImport(filePath)
    .then((module) => {
      const config = module?.default ?? module
      const apiUrl = config?.apiUrl || 'https://api.ossy.se/api/v0'
      const workspaceId = config?.workspaceId
      const resourceTemplates = config?.resourceTemplates

      if (!workspaceId) {
        logError({ message: '[@ossy/cli] No workspaceId in ossy file' })
        process.exit(1)
      }
      if (!resourceTemplates) {
        logError({ message: '[@ossy/cli] No resourceTemplates in ossy file' })
        process.exit(1)
      }

      logInfo({ message: '[@ossy/cli] Uploading resource templates...' })

      return Api.uploadResourceTemplates(apiUrl, token, workspaceId, resourceTemplates)
        .then((response) => {
          if (!response.ok) throw new Error(`Upload failed: ${response.status}`)
          logInfo({ message: '[@ossy/cli] Done' })
        })
        .catch((error) => {
          logError({ message: '[@ossy/cli] Error', error })
          process.exit(1)
        })
    })
    .catch((error) => {
      logError({ message: '[@ossy/cli] Error', error })
      process.exit(1)
    })
}

const validate = (options) => {
  const parsedArgs = arg({
    '--ossy-file': String,
  }, { argv: options })

  const ossyFilePath = parsedArgs['--ossy-file']
  const filePath = ossyFilePath ? resolve(ossyFilePath) : resolve('ossy.json')

  if (!existsSync(filePath)) {
    logError({ message: `[@ossy/cli] File not found: ${filePath}. Use --ossy-file` })
    process.exit(1)
  }

  logInfo({ message: '[@ossy/cli] Validating...' })

  resolveConfigImport(filePath)
    .then((module) => {
      const config = module?.default ?? module
      const workspaceId = config?.workspaceId
      const resourceTemplates = config?.resourceTemplates

      const errors = []
      if (!workspaceId) errors.push('Missing workspaceId')
      if (!resourceTemplates) {
        errors.push('Missing resourceTemplates')
      } else if (!Array.isArray(resourceTemplates)) {
        errors.push('resourceTemplates must be an array')
      } else {
        resourceTemplates.forEach((t, i) => {
          if (!t.id) errors.push(`Template ${i}: missing id`)
          if (!t.name) errors.push(`Template ${i}: missing name`)
          if (!t.fields || !Array.isArray(t.fields)) {
            errors.push(`Template ${i}: fields must be an array`)
          }
        })
      }

      if (errors.length > 0) {
        console.error('[@ossy/cli] Validation failed:')
        errors.forEach((e) => console.error('  -', e))
        process.exit(1)
      }
      logInfo({ message: '[@ossy/cli] Valid' })
    })
    .catch((error) => {
      logError({ message: '[@ossy/cli] Error', error })
      process.exit(1)
    })
}

const subcommands = {
  upload,
  validate,
}

export const handler = ([subcommand, ...options]) => {
  if (!subcommand) {
    logError({ message: '[@ossy/cli] cms: no subcommand. Use: ossy cms upload | validate' })
    process.exit(1)
  }
  const fn = subcommands[subcommand]
  if (!fn) {
    logError({ message: `[@ossy/cli] cms: unknown subcommand "${subcommand}". Use: ossy cms upload | validate` })
    process.exit(1)
  }
  fn(options)
}
