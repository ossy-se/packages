import typescript from '@rollup/plugin-typescript'
import { nodeResolve as resolveDependencies  } from '@rollup/plugin-node-resolve'
import resolveCommonJsDependencies from '@rollup/plugin-commonjs'
import removeOwnPeerDependencies from 'rollup-plugin-peer-deps-external'
import minifyJS from '@rollup/plugin-terser'
import pkg from './package.json' with { type: 'json' };
import { dts } from "rollup-plugin-dts"

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
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: 'build',
      }),
      removeOwnPeerDependencies(),
      minifyJS()
    ]
  },
  {
    input: "build/types/index.d.ts",
    output: [{ file: "build/index.d.ts", format: "es" }],
    plugins: [
      dts()
    ],
  },
]
