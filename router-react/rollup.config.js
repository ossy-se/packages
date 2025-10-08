import babel from '@rollup/plugin-babel'
import { nodeResolve as resolveDependencies } from '@rollup/plugin-node-resolve'
import resolveCommonJsDependencies from '@rollup/plugin-commonjs'
import removeOwnPeerDependencies from 'rollup-plugin-peer-deps-external'
import minifyJS from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import preserveDirectives from "rollup-plugin-preserve-directives"

export default [
  {
    input: 'src/router-react.tsx',
    output: [
      {
        file: 'build/cjs/index.js',
        format: 'cjs'
      },
      {
        file: 'build/esm/index.js',
        format: 'esm'
      }
    ],
    plugins: [
      resolveCommonJsDependencies(),
      resolveDependencies(),
      removeOwnPeerDependencies(),
      babel({
        exclude: ['**/node_modules/**/*'],
        presets: ['@babel/preset-react']
      }),
      minifyJS(),
      preserveDirectives(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ]
  },
]
