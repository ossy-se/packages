import React from 'react'
import { Separator } from './Separator.jsx'

export default {
  title: 'Design System/Display/Separator',
  component: Separator,
}

const Story = (args) => <Separator {...args} />

export const Primary = Story.bind({})
Primary.args = {
  variant: 'primary'
}
