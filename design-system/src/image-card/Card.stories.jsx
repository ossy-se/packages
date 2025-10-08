import React from 'react'
import { ImageCard } from './ImageCard.jsx'

export default {
  title: 'Display/ImageCard',
  component: ImageCard,
};

const Story = (args) => <ImageCard {...args} />;

export const Default = Story.bind({});
Default.args = {
  title: 'Unsplash image',
  subTitle: 'Tue 12, 2020',
  src: 'https://picsum.photos/200/300',
};

export const OnlyImage = Story.bind({});
OnlyImage.args = {
  src: 'https://picsum.photos/200/300',
  placeholderSrc: 'https://picsum.photos/20/30',
};
