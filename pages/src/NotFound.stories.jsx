import React from 'react'
import { NotFound } from './NotFound.jsx'

export default {
  title: 'Pages/SaaS/Not Found',
  component: NotFound,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <NotFound {...props} />

export const Default = Story.bind({})
Default.args = {
  title: 'Page not found',
  subtitle: "The page you're looking for doesn't exist or has been moved.",
  homeLink: { href: '/' },
}
