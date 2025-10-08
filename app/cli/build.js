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
// import inject from '@rollup/plugin-inject'

export const build = async (cliArgs) => {
    console.log('[@ossy/cli][app][build] Starting...')

    const options = arg({
        '--source': String,
        '--s': '--source',

        '--destination': String,
        '--d': '--destination',
    
        '--config': String,
        '-c': '--config',
      }, { argv: cliArgs })


    const appSourcePath = path.resolve(options['--source'] || 'src/App.jsx');
    let apiSourcePath = path.resolve(options['--api-source'] || 'src/Api.js');
    const configPath = path.resolve(options['--config'] || 'src/config.js');
    const buildPath = path.resolve(options['--destination'] || 'build');
    const publicDir = path.resolve('public')

    const scriptDir = path.dirname(url.fileURLToPath(import.meta.url))
    const inputClient = path.resolve(scriptDir, 'client.js')
    const inputServer = path.resolve(scriptDir, 'server.js')

    const inputFiles = [inputClient, inputServer]

    if (!fs.existsSync(appSourcePath)) {
        throw new Error(`[@ossy/cli][app][build] Source path does not exist: ${appSourcePath}`);
    }

    if (!fs.existsSync(apiSourcePath)) {
      apiSourcePath = path.resolve(scriptDir, 'Api.js')
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
            delimiters: ['%%', '%%'],
            '@ossy/app/source-file': appSourcePath,
          }),
          replace({
            delimiters: ['%%', '%%'],
            '@ossy/api/source-file': apiSourcePath,
          }),
          replace({
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
              if (name === 'server') {
                return '[name].js'
              } else if (name === 'Api') {
                return '[name].js'
              } else if (name === 'client') {
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

    console.log('[@ossy/cli][app][build] Finished');
};