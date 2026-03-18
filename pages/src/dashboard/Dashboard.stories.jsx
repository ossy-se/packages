import React from 'react'
import { Dashboard } from './Dashboard.jsx'

export default {
  title: 'Pages/SaaS/Dashboard',
  component: Dashboard,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <Dashboard {...props} />

export const Default = Story.bind({})
Default.args = {
  title: 'Dashboard',
  subtitle: 'Welcome back! Here\'s an overview of your account.',
}

export const WithStats = Story.bind({})
WithStats.args = {
  ...Default.args,
  stats: [
    { label: 'Active users', value: '2,847' },
    { label: 'Revenue', value: '$12,340' },
    { label: 'Conversions', value: '3.2%' },
  ],
}
