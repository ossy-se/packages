import React from 'react'
import { DeleteAccount } from './DeleteAccount.jsx'

export default {
  title: 'Pages/SaaS/Delete Account',
  component: DeleteAccount,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <DeleteAccount {...props} />

export const Default = Story.bind({})
Default.args = {
  onSubmit: () => console.log('Delete account'),
  cancelLink: { href: '/settings' },
}

export const Loading = Story.bind({})
Loading.args = {
  ...Default.args,
  loading: true,
}
