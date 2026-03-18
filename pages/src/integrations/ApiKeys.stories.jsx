import React from 'react'
import { ApiKeys } from './ApiKeys.jsx'

export default {
  title: 'Pages/SaaS/API Keys',
  component: ApiKeys,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <ApiKeys {...props} />

export const Default = Story.bind({})
Default.args = {
  onCreateKey: () => console.log('Create key'),
  onRevokeKey: (key) => console.log('Revoke', key),
}
