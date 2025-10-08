import React from 'react'
import { ColumnGallery } from './ColumnGallery.jsx'

export default {
  title: 'Other/Column Gallery',
  component: ColumnGallery,
};


const Story = (args) => <ColumnGallery {...args} />;

export const Default = Story.bind({});
Default.args = {
  columnMinWidth: 250,
  minNumberOfColumns: 2,
  items: [
    {
      url: 'https://images.unsplash.com/photo-1645548291117-719a896a45c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      title: 'Unsplashed',
      link: 'https://images.unsplash.com/photo-1645548291117-719a896a45c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      dateTaken: 'Tue, 12 Aug',
    }
  ],
};
