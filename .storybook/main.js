import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../design-system/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../pages/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../connected-components/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-docs",
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
