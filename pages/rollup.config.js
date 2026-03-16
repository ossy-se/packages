import babel from '@rollup/plugin-babel'
import { nodeResolve as resolveDependencies } from '@rollup/plugin-node-resolve'
import resolveCommonJsDependencies from '@rollup/plugin-commonjs'
import removeOwnPeerDependencies from 'rollup-plugin-peer-deps-external'
import minifyJS from '@rollup/plugin-terser'
// import typescript from '@rollup/plugin-typescript'
import preserveDirectives from "rollup-plugin-preserve-directives"

export default [
  {
    input: 'src/index.js',
    output: [
      {
        dir: 'build',
        format: 'esm'
      }
    ],
    plugins: [
      removeOwnPeerDependencies(),
      resolveCommonJsDependencies(),
      resolveDependencies(),
      babel({
        exclude: ['**/node_modules/**/*'],
        presets: ['@babel/preset-react']
      }),
      preserveDirectives(),
      minifyJS(),
      // typescript({ tsconfig: "./tsconfig.json" }),
    ]
  },
]
