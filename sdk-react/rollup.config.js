import babel from '@rollup/plugin-babel'
import { nodeResolve as resolveDependencies } from '@rollup/plugin-node-resolve'
import resolveCommonJsDependencies from '@rollup/plugin-commonjs'
import removeOwnPeerDependencies from 'rollup-plugin-peer-deps-external'
import minifyJS from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import preserveDirectives from "rollup-plugin-preserve-directives"
import { dts } from "rollup-plugin-dts"
import pkg from './package.json' with { type: 'json' };

export default [
  {
    input: pkg.source,
    output: [
      {
        dir: 'build',
        preserveModules: true,
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
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: 'build',
      }),
    ]
  },
  {
    input: "build/types/public.index.d.ts",
    output: [{ file: "build/public.index.d.ts", format: "es" }],
    plugins: [
      dts()
    ],
  },
]
