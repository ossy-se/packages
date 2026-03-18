import React from 'react'
import { Support } from './Support.jsx'

export default {
  title: 'Pages/SaaS/Support',
  component: Support,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <Support {...props} />

export const Default = Story.bind({})
Default.args = {
  contactEmail: 'support@example.com',
  contactLink: { href: 'mailto:support@example.com' },
  documentationLink: { href: '/docs' },
}
