import React from 'react'
import { Footer } from './Footer.jsx'

export default {
  title: 'App/Footer/Footer',
  component: Footer,
}

const Story = props => <Footer {...props} />

export const Default = Story.bind({})
Default.args = {
  columns: [
    {
      title: 'Contact',
      list: [
        { label: 'Instagram', href: 'https://www.instagram.com/' },
        { label: 'Facebook', href: 'https://www.facebook.com' },
        { label: 'claudius6tus@yahoo.se', href: 'mailto:example@example.com' },
        { label: 'Tel: +11 222 33 444' }
      ]
    },
    {
      title: 'Navigation',
      list: [
        { id: 'header-nav', label: 'Start', href: '#' },
        { id: 'testimonials-nav', label: 'Testimonials', href: '#testimonials' },
        { id: 'contact-nav', label: 'Contact', href: '#contact' },
        { id: 'treatments-nav', label: 'Treatments', href: '#treatments' },
        { id: 'about-nav', label: 'About me', href: '#about' },
      ]
    },
    {
      title: 'Languages',
      list: [
        { label: 'English', href: '/en', code: 'en' },
        { label: 'Português', href: '/pt', code: 'pt' },
        { label: 'Svenska', href: '/sv', code: 'sv' },
        { label: 'Français', href: '/fr', code: 'fr' },
        { label: 'Español', href: '/es', code: 'es' },
      ],
    }
  ]
}
