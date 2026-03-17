import React from 'react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { Theme } from '@ossy/design-system';
import { CloudLight, CloudDark } from '@ossy/themes';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [['App', ['Getting Started']], 'Pages', ['Design System', ['Layout', 'Feedback', 'Navigation', 'Actions', 'Display', 'Other', 'Inputs', 'Base']], '*'],
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: CloudLight,
        dark: CloudDark,
      },
      defaultTheme: 'light',
      Provider: Theme,
    }),
  ],
  tags: ['autodocs'],
};

export default preview;
