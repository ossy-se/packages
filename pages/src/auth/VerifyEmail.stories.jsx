import React from 'react'
import { VerifyEmail } from './VerifyEmail.jsx'

export default {
  title: 'Pages/SaaS/Verify Email',
  component: VerifyEmail,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <VerifyEmail {...props} />

export const Default = Story.bind({})
Default.args = {
  title: 'Verify your email',
  subtitle: "We've sent a verification link to your email address. Click the link to activate your account.",
  onResend: () => console.log('Resend verification'),
  loginLink: { href: '/login' },
}

export const Resent = Story.bind({})
Resent.args = {
  ...Default.args,
  resent: true,
}

export const Loading = Story.bind({})
Loading.args = {
  ...Default.args,
  loading: true,
}
