import typescript from '@rollup/plugin-typescript'
import resolveCommonJsDependencies from '@rollup/plugin-commonjs'
import { nodeResolve as resolveDependencies } from '@rollup/plugin-node-resolve'
import removeOwnPeerDependencies from 'rollup-plugin-peer-deps-external'
import { dts } from "rollup-plugin-dts"
import minifyJS from '@rollup/plugin-terser'
import pkg from './package.json' with { type: 'json' };

export default [
  {
    input: pkg.source,
    output: [
      {
        dir: 'build',
        preserveModules: true,
        format: 'esm',
      },
    ],
    plugins: [
      resolveCommonJsDependencies(),
      resolveDependencies(),
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: 'build',
      }),
      removeOwnPeerDependencies(),
      minifyJS()
    ]
  },
  {
    input: "build/types/src/public.index.d.ts",
    output: [{ file: "build/public.index.d.ts", format: "es" }],
    plugins: [
      dts()
    ],
  },
]