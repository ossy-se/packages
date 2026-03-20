import path from 'path';
import url from 'url';
import fs from 'fs';
import { rollup } from 'rollup';
import babel from '@rollup/plugin-babel';
import { nodeResolve as resolveDependencies } from '@rollup/plugin-node-resolve'
import resolveCommonJsDependencies from '@rollup/plugin-commonjs'
import removeOwnPeerDependencies from 'rollup-plugin-peer-deps-external'
import minifyJS from '@rollup/plugin-terser'
// import typescript from '@rollup/plugin-typescript'
import preserveDirectives from "rollup-plugin-preserve-directives"
import json from "@rollup/plugin-json"
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';
import remove from 'rollup-plugin-delete';
import arg from 'arg'
import { ensureBuildStubs } from '../scripts/ensure-build-stubs.mjs'
// import inject from '@rollup/plugin-inject'

const PAGE_FILE_PATTERN = /\.page\.(jsx?|tsx?)$/

export function discoverPageFiles(srcDir) {
  const dir = path.resolve(srcDir)
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
    return []
  }
  const files = []
  const walk = (d) => {
    const entries = fs.readdirSync(d, { withFileTypes: true })
    for (const e of entries) {
      const full = path.join(d, e.name)
      if (e.isDirectory()) walk(full)
      else if (PAGE_FILE_PATTERN.test(e.name)) files.push(full)
    }
  }
  walk(dir)
  return files.sort()
}

export function filePathToRoute(filePath, srcDir) {
  const rel = path.relative(srcDir, filePath).replace(/\\/g, '/')
  let pathPart = rel.replace(PAGE_FILE_PATTERN, '').replace(/\/index$/, '').replace(/\/home$/, '') || 'home'
  if (pathPart === 'index' || pathPart === 'home') pathPart = 'home'
  const id = pathPart === 'home' ? 'home' : pathPart.replace(/\//g, '-')
  const routePath = pathPart === 'home' ? '/' : '/' + pathPart
  return { id, path: routePath }
}

export function generatePagesModule(pageFiles, cwd, srcDir = 'src') {
  const resolvedSrc = path.resolve(cwd, srcDir)
  const lines = [
    "import React from 'react'",
    ...pageFiles.map((f, i) => {
      const rel = path.relative(cwd, f).replace(/\\/g, '/')
      return `import * as _page${i} from './${rel}'`
    }),
    '',
    'function toPage(mod, derived) {',
    '  const meta = mod?.metadata || {}',
    "  const def = mod?.default",
    "  if (typeof def === 'function') {",
    "    return { ...derived, ...meta, element: React.createElement(def) }",
    '  }',
    "  return { ...derived, ...meta, ...(def || {}) }",
    '}',
    '',
    'export default [',
    ...pageFiles.map((f, i) => {
      const { id, path: defaultPath } = filePathToRoute(f, resolvedSrc)
      const pathStr = JSON.stringify(defaultPath)
      return `  toPage(_page${i}, { id: '${id}', path: ${pathStr} }),`
    }),
    ']',
  ]
  return lines.join('\n')
}

export function parsePagesFromSource(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const items = []
    // Match { id: 'x', path: '/y' } or { id: "x", path: "/y" }
    const idPathPattern = /\{\s*id\s*:\s*['"]([^'"]*)['"]\s*,\s*path\s*:\s*['"]([^'"]*)['"]/g
    // Match { path: '/y', element: ... } (path-first)
    const pathElementPattern = /\{\s*path\s*:\s*['"]([^'"]*)['"]\s*,\s*element\s*:/g
    // Match { path: { en: '/x', sv: '/y' }, ... }
    const pathObjPattern = /\{\s*path\s*:\s*\{\s*([^}]+)\}/g
    let m
    while ((m = idPathPattern.exec(content)) !== null) {
      items.push({ id: m[1], path: m[2] })
    }
    if (items.length === 0) {
      while ((m = pathElementPattern.exec(content)) !== null) {
        const p = m[1]
        const id = p === '/' ? 'home' : p.replace(/^\//, '').replace(/\/$/, '').replace(/\//g, '-') || 'page'
        items.push({ id, path: p })
      }
    }
    if (items.length === 0) {
      while ((m = pathObjPattern.exec(content)) !== null) {
        const pathStr = m[1].replace(/\s/g, '').replace(/:/g, ': ')
        items.push({ id: 'page', path: pathStr })
      }
    }
    return items
  } catch {
    return []
  }
}

export function printBuildOverview({ pagesSourcePath, apiSourcePath, configPath, isPageFiles, pageFiles }) {
  const rel = (p) => path.relative(process.cwd(), p)
  const cwd = process.cwd()
  const srcDir = path.resolve(cwd, 'src')
  console.log('\n  \x1b[1mBuild overview\x1b[0m')
  console.log('  ' + '─'.repeat(50))
  console.log(`  \x1b[36mPages:\x1b[0m ${rel(pagesSourcePath)}`)
  if (fs.existsSync(configPath)) {
    console.log(`  \x1b[36mConfig:\x1b[0m ${rel(configPath)}`)
  }
  console.log('  ' + '─'.repeat(50))

  const pages = isPageFiles && pageFiles?.length
    ? pageFiles.map((f) => filePathToRoute(f, srcDir))
    : parsePagesFromSource(pagesSourcePath)
  if (pages.length > 0) {
    console.log('  \x1b[36mRoutes:\x1b[0m')
    const maxId = Math.max(6, ...pages.map((p) => String(p.id).length))
    const maxPath = Math.max(6, ...pages.map((p) => String(p.path).length))
    pages.forEach((p) => {
      const id = String(p.id).padEnd(maxId)
      const pathStr = String(p.path).padEnd(maxPath)
      console.log(`    ${id}  ${pathStr}`)
    })
  } else {
    console.log('  \x1b[33mRoutes:\x1b[0m (could not parse or empty)')
  }

  if (fs.existsSync(apiSourcePath)) {
    const apiRoutes = parsePagesFromSource(apiSourcePath)
    if (apiRoutes.length > 0) {
      console.log('  \x1b[36mAPI routes:\x1b[0m')
      apiRoutes.forEach((r) => {
        console.log(`    ${r.id}  ${r.path}`)
      })
    }
  }
  console.log('  ' + '─'.repeat(50) + '\n')
}

export const build = async (cliArgs) => {
    console.log('[@ossy/app][build] Starting...')

    const options = arg({
        '--pages': String,
        '--p': '--pages',

        '--destination': String,
        '--d': '--destination',
    
        '--config': String,
        '-c': '--config',
      }, { argv: cliArgs })


    const scriptDir = path.dirname(url.fileURLToPath(import.meta.url))
    const cwd = process.cwd()
    const pagesOpt = options['--pages'] || 'src'
    const srcDir = path.resolve(pagesOpt)
    const pageFiles = discoverPageFiles(srcDir)
    const pagesJsxPath = path.resolve('src/pages.jsx')
    const hasPagesJsx = fs.existsSync(pagesJsxPath)

    let effectivePagesSource
    let isPageFiles = false
    if (pageFiles.length > 0) {
      const generatedPath = path.join(cwd, '.ossy-pages.generated.jsx')
      fs.writeFileSync(generatedPath, generatePagesModule(pageFiles, cwd, pagesOpt))
      effectivePagesSource = generatedPath
      isPageFiles = true
    } else if (hasPagesJsx) {
      effectivePagesSource = pagesJsxPath
    } else {
      throw new Error(`[@ossy/app][build] No pages found. Create *.page.jsx files in src/, or src/pages.jsx`);
    }

    let apiSourcePath = path.resolve(options['--api-source'] || 'src/api.js');
    let middlewareSourcePath = path.resolve(options['--middleware-source'] || 'src/middleware.js');
    const configPath = path.resolve(options['--config'] || 'src/config.js');
    const buildPath = path.resolve(options['--destination'] || 'build');
    const publicDir = path.resolve('public')

    const inputClient = path.resolve(scriptDir, 'client.js')
    const inputServer = path.resolve(scriptDir, 'server.js')

    const inputFiles = [inputClient, inputServer]

    const appEntryPath = path.resolve(scriptDir, 'default-app.jsx')
    printBuildOverview({ pagesSourcePath: effectivePagesSource, apiSourcePath, configPath, isPageFiles, pageFiles: isPageFiles ? pageFiles : [] });

    if (!fs.existsSync(apiSourcePath)) {
      apiSourcePath = path.resolve(scriptDir, 'api.js')
    }

    if (!fs.existsSync(middlewareSourcePath)) {
      middlewareSourcePath = path.resolve(scriptDir, 'middleware.js')
    }

    const configSourcePath = fs.existsSync(configPath)
      ? configPath
      : path.resolve(scriptDir, 'default-config.js')

    const inputOptions = {
        input: inputFiles,
        plugins: [
          remove({ targets: buildPath }),
          // inject({ 'React': 'react' }),
          replace({
            preventAssignment: true,
            delimiters: ['%%', '%%'],
            '@ossy/app/source-file': appEntryPath,
          }),
          replace({
            preventAssignment: true,
            delimiters: ['%%', '%%'],
            '@ossy/pages/source-file': effectivePagesSource,
          }),
          replace({
            preventAssignment: true,
            delimiters: ['%%', '%%'],
            '@ossy/api/source-file': apiSourcePath,
          }),
          replace({
            preventAssignment: true,
            delimiters: ['%%', '%%'],
            '@ossy/middleware/source-file': middlewareSourcePath,
          }),
          replace({
            preventAssignment: true,
            delimiters: ['%%', '%%'],
            '@ossy/config/source-file': configSourcePath,
          }),
          replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('production')
          }),
          json(),
          // removeOwnPeerDependencies(),
          resolveCommonJsDependencies(),
          resolveDependencies({ preferBuiltins: true }),
          babel({
            babelHelpers: 'bundled',
          //   exclude: ['**/node_modules/**/*'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }),
          // preserveDirectives(),
          minifyJS(),
          copy({
              targets: [
                fs.existsSync(publicDir)
                  ? { src: `${publicDir}/**/*`, dest: 'build/public' }
                  : undefined,
              ].filter(x => !!x)
            })
        ],
    };

    const outputOptions = [
        {
            dir: 'build',
            // preserveModules: true,
            entryFileNames: ({ name }) => {

              const serverFileNames = ['server', 'api', 'middleware']

              if (serverFileNames.includes(name)) {
                return '[name].js'
              }  else if (name === 'client') {
                return 'public/static/main.js'
              } else if (name === 'config') {
                return 'public/static/[name].js'
              } else {
                return 'public/static/[name].js'
              }
            },
            chunkFileNames: 'public/static/[name]-[hash].js',
            format: 'esm',
        }
    ];

    const bundle = await rollup(inputOptions);

    for (const options of outputOptions) {
        await bundle.write(options);
    }

    ensureBuildStubs(buildPath)

    console.log('[@ossy/app][build] Finished');
};