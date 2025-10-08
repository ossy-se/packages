import React from 'react';
import { Theme } from '../src/theme/Theme';
import { Standard } from '@ossy/themes'
import { Ossy } from '@ossy/themes'

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
      <Theme theme={Ossy} >
        <Story />
      </Theme>
    ),
  ],
  tags: ['autodocs']
};

export default preview;
