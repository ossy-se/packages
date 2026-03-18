import React from 'react'
import { ResetPassword } from './ResetPassword.jsx'

export default {
  title: 'Pages/SaaS/Reset Password',
  component: ResetPassword,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <ResetPassword {...props} />

export const Default = Story.bind({})
Default.args = {
  onSubmit: (data) => console.log('Reset password', data),
  loginLink: { href: '/login' },
}

export const Success = Story.bind({})
Success.args = {
  ...Default.args,
  success: true,
}

export const Loading = Story.bind({})
Loading.args = {
  ...Default.args,
  loading: true,
}
