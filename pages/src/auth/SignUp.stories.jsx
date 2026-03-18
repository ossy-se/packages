import React from 'react'
import { SignUp } from './SignUp.jsx'

export default {
  title: 'Pages/SaaS/Sign Up',
  component: SignUp,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <SignUp {...props} />

export const Default = Story.bind({})
Default.args = {
  title: 'Create an account',
  subtitle: 'Get started with your free account',
  onSubmit: (data) => console.log('Sign up', data),
  loginLink: { href: '/login' },
  termsLink: { href: '/terms' },
}

export const Loading = Story.bind({})
Loading.args = {
  ...Default.args,
  loading: true,
}
