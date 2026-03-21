import path from 'path'
import { fileURLToPath } from 'url'
import remarkGfm from 'remark-gfm'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../docs/**/*.mdx",
    "../design-system/docs/**/*.mdx",
    "../connected-components/docs/**/*.mdx",
    "../pages/docs/**/*.mdx",
    "../types/docs/**/*.mdx",
    "../design-system/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../pages/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../connected-components/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    "@storybook/addon-themes",
    {
      name: '@ts2doc/storybook-addon',
      options: {
        patternDocType: 'types/src/**/*.ts',
        compilerOptions: {},
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {},
  async viteFinal(config) {
    config.resolve = config.resolve || {}
    // Resolve workspace packages from source so Storybook builds without a prior
    // `npm run build` (CI only runs build:storybook). Published packages list
    // `module` → build/*.js which does not exist until packages are built.
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ossy/themes': path.resolve(__dirname, '../themes/src/index.js'),
      '@ossy/sdk': path.resolve(__dirname, '../sdk/src/public.index.ts'),
      '@ossy/sdk-react': path.resolve(__dirname, '../sdk-react/src/public.index.ts'),
      '@ossy/design-system': path.resolve(__dirname, '../design-system/src/index.js'),
      '@ossy/pages': path.resolve(__dirname, '../pages/src/index.js'),
      '@ossy/connected-components': path.resolve(
        __dirname,
        '../connected-components/src/index.js',
      ),
      '@ossy/router': path.resolve(__dirname, '../router/src/public.index.ts'),
      '@ossy/router-react': path.resolve(
        __dirname,
        '../router-react/src/router-react.tsx',
      ),
      '@ossy/types': path.resolve(__dirname, '../types/src/index.ts'),
    }
    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH
    }
    return config
  },
};
export default config;
