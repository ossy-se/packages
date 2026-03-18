import React from 'react'
import { Login } from './Login.jsx'

export default {
  title: 'Pages/SaaS/Login',
  component: Login,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <Login {...props} />

export const Default = Story.bind({})
Default.args = {
  title: 'Sign in',
  subtitle: 'Enter your credentials to access your account',
  onSubmit: (data) => console.log('Login', data),
  signUpLink: { href: '/signup' },
  forgotPasswordLink: { href: '/forgot-password' },
}

export const Loading = Story.bind({})
Loading.args = {
  ...Default.args,
  loading: true,
}
