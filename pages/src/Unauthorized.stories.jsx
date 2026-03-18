import React from 'react'
import { Unauthorized } from './Unauthorized.jsx'

export default {
  title: 'Pages/SaaS/Unauthorized',
  component: Unauthorized,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <Unauthorized {...props} />

export const Default = Story.bind({})
Default.args = {
  homeLink: { href: '/' },
  loginLink: { href: '/login' },
}
