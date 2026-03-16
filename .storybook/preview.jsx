import React from 'react';
import { Theme } from '@ossy/design-system';
import { CloudLight } from '@ossy/themes';

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
        order: ['App', 'Layout', '*', 'Base'],
      },
    },
  },
  decorators: [
    (Story) => (
      <Theme theme={CloudLight}>
        <Story />
      </Theme>
    ),
  ],
  tags: ['autodocs'],
};

export default preview;
