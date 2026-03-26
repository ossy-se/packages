import { existsSync } from 'fs'
import { resolve as pathResolve } from 'path'
import { spawn } from 'child_process'
import arg from 'arg'
import { logInfo, logError } from '../log.js'
import {
  readWebsiteConfigDeployFields,
  resolvePlatformFromDeployments
} from './resolve-config.js'

const DEPLOYMENT_TOOLS = '@ossy/deployment-tools'

function runNpxDeploymentTools (deploymentArgs) {
  const args = ['--yes', DEPLOYMENT_TOOLS, 'deployment', ...deploymentArgs]
  logInfo({ message: `[@ossy/cli] publish: npx ${DEPLOYMENT_TOOLS} deployment ${deploymentArgs[0]} …` })
  return new Promise((resolvePromise, reject) => {
    const child = spawn('npx', args, { stdio: 'inherit', shell: true })
    child.on('error', reject)
    child.on('close', (code) => {
      if (code === 0) resolvePromise()
      else reject(new Error(`npx exited with code ${code}`))
    })
  })
}

/**
 * Publish container deployments: default = one site (`deployment deploy`);
 * `--all` = `deployment deploy-all` for the platform.
 */
export async function publish (options) {
  const parsedArgs = arg({
    '--username': String,
    '-u': '--username',
    '--authentication': String,
    '-a': '--authentication',
    '--domain': String,
    '-d': '--domain',
    '--platform': String,
    '-p': '--platform',
    '--config': String,
    '-c': '--config',
    '--platforms-path': String,
    '-pp': '--platforms-path',
    '--deployments-path': String,
    '-dp': '--deployments-path',
    '--all': Boolean
  }, { argv: options })

  const username = parsedArgs['--username']
  const authentication = parsedArgs['--authentication']
  const platformsPath = parsedArgs['--platforms-path']
  const deploymentsPath = parsedArgs['--deployments-path']

  if (!username || !authentication) {
    logError({
      message: '[@ossy/cli] publish: --username (-u) and --authentication (-a) are required.'
    })
    process.exit(1)
  }
  if (!platformsPath || !deploymentsPath) {
    logError({
      message: '[@ossy/cli] publish: --platforms-path (-pp) and --deployments-path (-dp) are required.'
    })
    process.exit(1)
  }

  let configPath = parsedArgs['--config']
  if (!configPath) {
    const cwdConfig = pathResolve(process.cwd(), 'src/config.js')
    if (existsSync(cwdConfig)) {
      configPath = cwdConfig
    }
  } else if (!existsSync(pathResolve(configPath))) {
    logError({ message: `[@ossy/cli] publish: --config file not found: ${configPath}` })
    process.exit(1)
  }

  const fromConfig = configPath ? readWebsiteConfigDeployFields(configPath) : {}

  if (parsedArgs['--all']) {
    let targetPlatform = parsedArgs['--platform'] || fromConfig.platform
    if (!targetPlatform) {
      logError({
        message: '[@ossy/cli] publish --all: pass --platform (-p) or set platform in src/config.js (or --config).'
      })
      process.exit(1)
    }
    logInfo({ message: `[@ossy/cli] publish --all: platform=${targetPlatform}` })
    await runNpxDeploymentTools([
      'deploy-all',
      '-u', username,
      '-a', authentication,
      '-p', targetPlatform,
      '-pp', platformsPath,
      '-dp', deploymentsPath
    ])
    return
  }

  let targetDomain = parsedArgs['--domain'] || fromConfig.domain
  let targetPlatform = parsedArgs['--platform'] || fromConfig.platform

  if (!targetPlatform && targetDomain && deploymentsPath) {
    const resolved = resolvePlatformFromDeployments(deploymentsPath, targetDomain)
    if (resolved && typeof resolved === 'object' && resolved.ambiguous) {
      logError({
        message: `[@ossy/cli] publish: domain "${targetDomain}" matches multiple platforms (${resolved.platforms.join(', ')}). Set platform in src/config.js or pass --platform (-p).`
      })
      process.exit(1)
    }
    targetPlatform = resolved
  }

  if (!targetDomain || !targetPlatform) {
    logError({
      message: '[@ossy/cli] publish: need --domain (-d) and --platform (-p), or src/config.js / --config with domain (and optional platform); platform can be inferred from deployments when domain is unique.'
    })
    process.exit(1)
  }

  logInfo({ message: `[@ossy/cli] publish: domain=${targetDomain} platform=${targetPlatform}` })

  await runNpxDeploymentTools([
    'deploy',
    '-u', username,
    '-a', authentication,
    '-d', targetDomain,
    '-p', targetPlatform,
    '-pp', platformsPath,
    '-dp', deploymentsPath
  ])
}
