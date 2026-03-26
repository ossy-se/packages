import { readFileSync } from 'fs'
import { resolve } from 'path'
import { globSync } from 'glob'

/**
 * Reads string `domain` / `platform` from a site `src/config.js` without executing it
 * (config is often ESM with package-only imports).
 *
 * @param {string} configPath
 * @returns {{ domain?: string, platform?: string }}
 */
export function readWebsiteConfigDeployFields (configPath) {
  const abs = resolve(configPath)
  const source = readFileSync(abs, 'utf8')

  const pick = (key) => {
    const m = source.match(new RegExp(`${key}\\s*:\\s*['"]([^'"]+)['"]`))
    return m ? m[1] : undefined
  }

  const domain = pick('domain')
  const platform = pick('platform') || pick('targetDeploymentPlatform')

  return { domain, platform }
}

/**
 * @param {string} deploymentsGlob
 * @param {string} domain
 * @returns {string | undefined | { ambiguous: true, platforms: string[] }}
 */
export function resolvePlatformFromDeployments (deploymentsGlob, domain) {
  const filePaths = globSync(deploymentsGlob, { ignore: 'node_modules/**' })
  const deployments = filePaths.flatMap((p) => JSON.parse(readFileSync(p, 'utf8')))
  const matches = deployments.filter((d) => d.domain === domain)
  if (matches.length === 0) {
    return undefined
  }
  const platforms = [...new Set(matches.map((d) => d.targetDeploymentPlatform))]
  if (platforms.length > 1) {
    return { ambiguous: true, platforms }
  }
  return platforms[0]
}
