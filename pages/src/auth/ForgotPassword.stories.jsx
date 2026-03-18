import React from 'react'
import { ForgotPassword } from './ForgotPassword.jsx'

export default {
  title: 'Pages/SaaS/Forgot Password',
  component: ForgotPassword,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <ForgotPassword {...props} />

export const Default = Story.bind({})
Default.args = {
  title: 'Reset password',
  subtitle: "Enter your email and we'll send you a link to reset your password",
  onSubmit: (data) => console.log('Forgot password', data),
  loginLink: { href: '/login' },
}

export const Success = Story.bind({})
Success.args = {
  ...Default.args,
  success: true,
  successMessage: 'Check your email for a reset link.',
}

export const Loading = Story.bind({})
Loading.args = {
  ...Default.args,
  loading: true,
}
