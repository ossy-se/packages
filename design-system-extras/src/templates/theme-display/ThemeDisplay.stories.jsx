import React from 'react'
import { ThemeDisplay } from './ThemeDisplay.jsx'
import { Standard } from '@ossy/themes'

export default {
  title: 'Design System Extras/Templates/Theme Display',
  component: ThemeDisplay,
  parameters: {
   layout: 'fullscreen',
 },
}

const Story = props => (
  <ThemeDisplay {...props}/>
)

export const Default = Story.bind({})
Default.args = { theme: Standard }
