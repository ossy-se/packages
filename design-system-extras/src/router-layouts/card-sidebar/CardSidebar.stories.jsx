import React from 'react'
import { CardSidebar } from './CardSidebar.jsx'

export default {
  title: 'Design System Extras/Router Layouts/Card Sidebar',
  component: CardSidebar,
  parameters: {
   layout: 'fullscreen',
 },
}

const Story = props => (
  <CardSidebar {...props}/>
)

export const Default = Story.bind({})
Default.args = {
  navigation: [
    { id: 'general-nav', label: 'General', href: 'general' },
    { id: 'users-nav', label: 'Users', href: 'users' },
    { id: 'api-tokens-nav', label: 'Api tokens', href: 'api-tokens' },
  ]
}
