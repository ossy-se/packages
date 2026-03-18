import React from 'react'
import { Team } from './Team.jsx'

export default {
  title: 'Pages/SaaS/Team',
  component: Team,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <Team {...props} />

export const Default = Story.bind({})
Default.args = {
  onInvite: (data) => console.log('Invite', data),
  onRemoveMember: (member) => console.log('Remove', member),
  onResendInvite: (invite) => console.log('Resend', invite),
  onCancelInvite: (invite) => console.log('Cancel', invite),
}
