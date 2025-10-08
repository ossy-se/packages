import React from 'react'
import { StandardLayout } from './StandardLayout.jsx'

export default {
  title: 'Design System Extras/Router Layouts/Standard',
  component: StandardLayout,
  parameters: {
   layout: 'fullscreen',
 },
}

const Story = props => (
  <StandardLayout {...props} />
)

export const Default = Story.bind({})
Default.args = {
  logo: 'Logo',
  copyright: 'Copyright @ Company 2023',
  navigation: [
    { id: 'header-nav', label: 'Start', href: '#' },
    { id: 'testimonials-nav', label: 'Testimonials', href: '#testimonials' },
    { id: 'contact-nav', label: 'Contact', href: '#contact' },
    { id: 'services-nav', label: 'Services', href: '#services' },
    { id: 'about-nav', label: 'About', href: '#about' },
  ],
  headerActions: [
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
