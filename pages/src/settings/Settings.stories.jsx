import React, { useState } from 'react'
import { Settings } from './Settings.jsx'

export default {
  title: 'Pages/SaaS/Settings',
  component: Settings,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <Settings {...props} />

export const Default = Story.bind({})
Default.args = {
  title: 'Settings',
  subtitle: 'Manage your account and preferences',
}

const WithTogglesStory = () => {
  const [emailNotif, setEmailNotif] = useState(true)
  const [marketing, setMarketing] = useState(false)
  return (
    <Settings
      title="Settings"
      subtitle="Manage your account and preferences"
      sections={[
        {
          id: 'profile',
          title: 'Profile',
          description: 'Update your personal information',
          fields: [
            { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
            { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
          ],
          submitLabel: 'Save changes',
        },
        {
          id: 'notifications',
          title: 'Notifications',
          description: 'Choose how you want to be notified',
          toggles: [
            { id: 'email', label: 'Email notifications', description: 'Receive updates via email', value: emailNotif, onChange: setEmailNotif },
            { id: 'marketing', label: 'Marketing emails', description: 'Receive product updates and tips', value: marketing, onChange: setMarketing },
          ],
        },
      ]}
    />
  )
}

export const WithToggles = WithTogglesStory
