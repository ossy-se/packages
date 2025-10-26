import babel from 'rollup-plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import removeOwnPeerDependencies from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import minifyJS from '@rollup/plugin-terser'
import pkg from './package.json'

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      exclude: ['**/node_modules/**/*'],
      presets: ['@babel/preset-react']
    }),
    removeOwnPeerDependencies(),
    minifyJS()
  ]
}
