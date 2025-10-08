import React, { useState } from 'react'
import { Tabs } from './Tabs.jsx'

export default {
  title: 'Display/Tabs',
  component: Tabs,
  args: {
    activeTabId: 'English',
    tabs: [
      { id: 'Português', label: 'Português' },
      { id: 'English', label: 'English' },
      { id: 'Svenska', label: 'Svenska' },
      { id: 'Français', label: 'Français' },
      { id: 'Español', label: 'Español' },
    ]
  },
}

const Story = ({ theme = {}, ...props }) => {
  const [activeTabId, setActiveTabId] = useState(props.activeTabId)

  const onTabClick = (event, tab) => {
    setActiveTabId(tab.id)
  }

  return (
    <Tabs
      {...props}
      activeTabId={activeTabId}
      onTabClick={onTabClick}
    />

  )
}

export const Default = Story.bind({})
Default.args = {}

export const AsLinks = Story.bind({})
AsLinks.args = {
  tabs: [
    { id: 'Português', label: 'Português', href: '/portuguese' },
    { id: 'English', label: 'English', href: '/' },
    { id: 'Svenska', label: 'Svenska', href: '/swedish' },
    { id: 'Français', label: 'Français', href: '/french' },
    { id: 'Español', label: 'Español', href: '/spanish' },
  ]
}

export const Theming = Story.bind({})
Theming.args = {
  variant: 'dark',
  theme: {
    "tabs-dark-background": "hsl(0, 0%, 20%)",
    "tabs-dark-color": "hsl(0, 0%, 80%)",
    "tabs-dark-accent-active": "hsl(25, 80%, 50%)"
  }
}
