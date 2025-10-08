import React from 'react';
import { Theme } from '@ossy/design-system';
import { Ossy, Standard } from '@ossy/themes'

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
  ]

};

export default preview;