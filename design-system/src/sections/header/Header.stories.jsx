import React from 'react'
import { Header } from './Header.jsx'

export default {
  title: 'Other/Header/Header',
  component: Header,
}

const Story = props => (
  <Header {...props} />
)

export const Default = Story.bind({})
Default.args = {
  logo: 'Logo',
  navigation: [
    { id: 'start-nav', label: 'Start', href: '/' },
    { id: 'features-nav', label: 'Features', href: '#features' },
    { id: 'documentation-nav', label: 'Documentation', href: '/documentation' }
  ],
  actions: [
    {
      key: 'log-in',
      children: 'Login',
      href: '/sign-in'
    },
    {
      key: 'sign-up',
      children: 'Sign up',
      href: '/sign-up',
      variant: 'cta'
    }
  ]
}
