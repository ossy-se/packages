import path from 'path';
import url from 'url';
import fs from 'fs';
import { watch } from 'rollup';
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
import { spawn } from 'node:child_process'
// import inject from '@rollup/plugin-inject'

export const dev = async (cliArgs) => {
    console.log('[@ossy/app][dev] Starting...')

    const options = arg({
        '--source': String,
        '--s': '--source',

        '--destination': String,
        '--d': '--destination',
    
        '--config': String,
        '-c': '--config',
      }, { argv: cliArgs, permissive: true })


    const appSourcePath = path.resolve(options['--source'] || 'src/App.jsx');
    let apiSourcePath = path.resolve(options['--api-source'] || 'src/api.js');
    let middlewareSourcePath = path.resolve(options['--middleware-source'] || 'src/middleware.js');
    const configPath = path.resolve(options['--config'] || 'src/config.js');
    const buildPath = path.resolve(options['--destination'] || 'build');
    const publicDir = path.resolve('public')

    const scriptDir = path.dirname(url.fileURLToPath(import.meta.url))
    const inputClient = path.resolve(scriptDir, 'client.js')
    const inputServer = path.resolve(scriptDir, 'server.js')

    const inputFiles = [inputClient, inputServer]

    if (!fs.existsSync(appSourcePath)) {
        throw new Error(`[@ossy/app][build] Source path does not exist: ${appSourcePath}`);
    }

    if (!fs.existsSync(apiSourcePath)) {
      apiSourcePath = path.resolve(scriptDir, 'api.js')
    }

    if (!fs.existsSync(middlewareSourcePath)) {
      middlewareSourcePath = path.resolve(scriptDir, 'middleware.js')
    }

    if (fs.existsSync(configPath)) {
        inputFiles.push(configPath)
    }

    const inputOptions = {
        input: inputFiles,
        plugins: [
          remove({ targets: buildPath }),
          // inject({ 'React': 'react' }),
          replace({
            preventAssignment: true,
            delimiters: ['%%', '%%'],
            '@ossy/app/source-file': appSourcePath,
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
            'process.env.NODE_ENV': JSON.stringify('development')
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
          // minifyJS(),
          copy({
              targets: [
                fs.existsSync(publicDir)
                  ? { src: `${publicDir}/**/*`, dest: 'build/public' }
                  : undefined,
              ].filter(x => !!x)
            })
        ],
    };

    const outputOptions = {
      dir: 'build',
      // preserveModules: true,
      entryFileNames: ({ name }) => {
        const serverFileNames = ['server', 'api', 'middleware']
        if (serverFileNames.includes(name)) return '[name].js'
        if (name === 'client') return 'public/static/main.js'
        if (name === 'config') return 'public/static/[name].js'
        return 'public/static/[name].js'
      },
      chunkFileNames: 'public/static/[name]-[hash].js',
      format: 'esm',
    }

    let serverProcess = null
    const startServer = () => {
      if (serverProcess) return
      serverProcess = spawn(process.execPath, [path.resolve(buildPath, 'server.js'), ...process.argv.slice(3)], {
        stdio: 'inherit',
        env: {
          ...process.env,
          OSSY_DEV_RELOAD: '1',
          NODE_ENV: 'development',
        },
      })
      serverProcess.on('exit', () => {
        serverProcess = null
      })
    }

    const restartServer = () => {
      if (!serverProcess) return startServer()
      serverProcess.kill('SIGTERM')
      serverProcess = null
      startServer()
    }

    const triggerReload = async () => {
      const port = process.env.PORT || '3000'
      try {
        await fetch(`http://localhost:${port}/__ossy_reload`, { method: 'POST' })
      } catch {
        // server might not be up yet
      }
    }

    const watcher = watch({
      ...inputOptions,
      output: outputOptions,
      watch: { clearScreen: false },
    })

    watcher.on('event', async (event) => {
      if (event.code === 'BUNDLE_START') {
        console.log('[@ossy/app][dev] Building...')
      }
      if (event.code === 'ERROR') {
        console.error('[@ossy/app][dev] Build error', event.error)
      }
      if (event.code === 'BUNDLE_END') {
        console.log(`[@ossy/app][dev] Built in ${event.duration}ms`)
      }
      if (event.code === 'END') {
        await triggerReload()
        restartServer()
      }
    })
};