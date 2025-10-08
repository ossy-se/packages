import React from 'react'
import { Tags } from './Tags.jsx'

export default {
  title: 'Display/Tags',
  component: Tags,
  render: (args) => <Tags {...args} />,
  args: {
    tags: ['JavaScript', 'TypeScript', 'Angular', 'React'],
    activeTags: ['Angular']
  }
}


export const Medium = {
  args: {
   size: 'm'
  }
}

export const Small = {
  args: {
    size: 's'
  }
}