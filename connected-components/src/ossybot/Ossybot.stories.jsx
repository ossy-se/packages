import React from 'react'
import { Ossybot } from './Ossybot.jsx'

export default {
  title: 'Connected components/Ossybot',
  component: Ossybot,
  parameters: {
   layout: 'centered',
   workspaceId: '36zDqF0TKZZ5KkJdyg7NH',
   renderInsideApp: true
 },
}

const Story = props => <Ossybot {...props} />

export const Default = Story.bind({})
Default.args = { }

export const Add = Story.bind({})
Add.args = { icon: 'math-plus'}

export const Custom = Story.bind({})
Custom.args = { icon: 'loadbar-sound' }

export const Ascii = Story.bind({})
Ascii.args = { label: '(≧︿≦)' }
