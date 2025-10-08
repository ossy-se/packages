import React from 'react'
import { Image } from './Image.jsx'

export default {
  title: 'Display/Image',
  component: Image,
};

const Story = (args) => (
  <Image {...args} style={{ width: '200px', height: '300px' }}/>
)

export const Default = Story.bind({});
Default.args = {
  src: 'https://picsum.photos/200/300',
  placeholderSrc: 'https://picsum.photos/20/30',
}
