import React from 'react'
import { ThemeDisplay } from './ThemeDisplay.jsx'
import { CloudLight } from '@ossy/themes'

export default {
  title: 'Pages/Theme Display',
  component: ThemeDisplay,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = props => (
  <ThemeDisplay {...props}/>
)

export const Default = Story.bind({})
Default.args = { theme: CloudLight }
