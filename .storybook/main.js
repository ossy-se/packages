import path from 'path'
import { fileURLToPath } from 'url'
import remarkGfm from 'remark-gfm'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../docs/**/*.mdx",
    "../connected-components/docs/**/*.mdx",
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
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ossy/themes': path.resolve(__dirname, '../themes/src/index.js'),
    }
    return config
  },
};
export default config;
