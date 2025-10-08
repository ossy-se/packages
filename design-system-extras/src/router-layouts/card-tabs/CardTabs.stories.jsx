import React from 'react'
import { CardTabs } from './CardTabs.jsx'

export default {
  title: 'Design System Extras/Router Layouts/Card Tabs',
  component: CardTabs,
  parameters: {
   layout: 'fullscreen',
 },
}

const Story = props => (
  <CardTabs {...props}/>
)

export const Default = Story.bind({})
Default.args = {
  tabs: [
    { id: 'general-nav', label: 'General', href: 'general' },
    { id: 'users-nav', label: 'Users', href: 'users' }
  ]
}
