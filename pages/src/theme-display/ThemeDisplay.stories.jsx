import React from 'react'
import { ThemeDisplay } from './ThemeDisplay.jsx'
import { CloudLight } from '@ossy/themes'

export default {
  title: 'Pages/Theme Display',
  component: ThemeDisplay,
  parameters: {
   layout: 'fullscreen',
 },
}

const Story = props => (
  <ThemeDisplay {...props}/>
)

export const Default = Story.bind({})
Default.args = { theme: CloudLight }
