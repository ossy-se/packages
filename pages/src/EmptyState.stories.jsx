import React from 'react'
import { EmptyState } from './EmptyState.jsx'

export default {
  title: 'Pages/SaaS/Empty State',
  component: EmptyState,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <EmptyState {...props} />

export const Default = Story.bind({})
Default.args = {
  title: 'No projects yet',
  subtitle: 'Create your first project to get started.',
  action: { label: 'Create project', onClick: () => console.log('Create') },
}

export const WithSecondary = Story.bind({})
WithSecondary.args = {
  ...Default.args,
  secondaryAction: { label: 'View docs', href: '/docs' },
}

export const WithIcon = Story.bind({})
WithIcon.args = {
  ...Default.args,
  icon: '📁',
}
