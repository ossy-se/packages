/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../design-system/docs/**/*.mdx",
    "../design-system/src/**/*.mdx",
    "../design-system/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../design-system-extras/src/**/*.mdx",
    "../design-system-extras/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../connected-components/src/**/*.mdx",
    "../connected-components/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {},
};
export default config;
