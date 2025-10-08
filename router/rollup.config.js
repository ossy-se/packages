import typescript from '@rollup/plugin-typescript'
import resolveCssModules from 'rollup-plugin-postcss-modules'
import resolveCommonJsDependencies from '@rollup/plugin-commonjs'
import { nodeResolve as resolveDependencies } from '@rollup/plugin-node-resolve'
import removeOwnPeerDependencies from 'rollup-plugin-peer-deps-external'
import autoprefixer from 'autoprefixer'
import { dts } from "rollup-plugin-dts"
import preserveDirectives from "rollup-plugin-preserve-directives";

export default [
  {
    input: 'src/public.index.ts',
    output: [
      {
        dir: 'build/esm',
        preserveModules: true,
        format: 'esm',
      },
    ],
    plugins: [
      resolveCommonJsDependencies(),
      removeOwnPeerDependencies(),
      resolveDependencies(),
      resolveCssModules({
        plugins: [autoprefixer()],
        writeDefinitions: true,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      preserveDirectives(),
    ]
  },
  {
    input: "build/esm/public.index.d.ts",
    output: [{ file: "build/public.index.d.ts", format: "es" }],
    plugins: [
      dts()
    ],
  },
]