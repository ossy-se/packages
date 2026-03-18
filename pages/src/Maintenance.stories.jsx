import React from 'react'
import { Maintenance } from './Maintenance.jsx'

export default {
  title: 'Pages/SaaS/Maintenance',
  component: Maintenance,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <Maintenance {...props} />

export const Default = Story.bind({})
Default.args = {}

export const WithEstimate = Story.bind({})
WithEstimate.args = {
  estimatedTime: '~30 minutes',
}
