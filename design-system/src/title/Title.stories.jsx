import React, { useState } from 'react'
import { Title } from './Title.jsx'

export default {
  title: 'Display/Title',
  component: Title,
  args: {
    children: 'This is a title'
  }
}

const Story = ({ theme, ...props }) => (
  <Title {...props} />
)

export const Default = Story.bind({})
Default.args = { as: 'h1' }

export const Primary = Story.bind({})
Primary.args = { as: 'h1', variant: 'primary' }

export const Secondary = Story.bind({})
Secondary.args = { as: 'h1', variant: 'secondary' }

export const Tertiary = Story.bind({})
Tertiary.args = { as: 'h1', variant: 'tertiary' }

export const SubTitle = Story.bind({})
SubTitle.args = { as: 'h1', variant: 'sub-title', children: 'This is a sub title'  }

export const Logo = Story.bind({})
Logo.args = { as: 'h1', variant: 'logo' }

export const Hero = Story.bind({})
Hero.args = { as: 'h1', variant: 'hero', children: 'Logo'  }
