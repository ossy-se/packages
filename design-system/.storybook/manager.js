import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Ossy Design System',
    brandImage: 'https://d1yuixo7x29bj4.cloudfront.net/36zDqF0TKZZ5KkJdyg7NH/PBFpT6d48OPG9kXzT49r7.png',
    brandTarget: '_self',
  }),
});