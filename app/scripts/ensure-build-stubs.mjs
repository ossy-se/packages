import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const STUBS = [
  ['api.js', 'export default []\n'],
  ['middleware.js', 'export default []\n'],
]

/** Ensures build/api.js and build/middleware.js exist when Rollup omits empty chunks. */
export function ensureBuildStubs(buildDir) {
  if (!fs.existsSync(buildDir)) {
    console.warn(`[ensure-build-stubs] skip: ${buildDir} missing`)
    return
  }
  for (const [name, content] of STUBS) {
    const filePath = path.join(buildDir, name)
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, content)
      console.log(`[ensure-build-stubs] wrote ${name} (rollup omitted empty chunk)`)
    }
  }
}

const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)

if (isMain) {
  const buildDir = path.join(process.cwd(), 'build')
  if (!fs.existsSync(buildDir)) {
    console.error('[ensure-build-stubs] build/ missing; run build first')
    process.exit(1)
  }
  ensureBuildStubs(buildDir)
}
