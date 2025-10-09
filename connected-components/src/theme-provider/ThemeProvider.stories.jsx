import React from 'react'
import { ThemeProvider } from './ThemeProvider.jsx'

export default {
  title: 'Connected components/ThemeProvider',
  component: ThemeProvider,
  parameters: {
   layout: 'fullscreen',
   workspaceId: '36zDqF0TKZZ5KkJdyg7NH'
 },
}

const Story = props => <ThemeProvider {...props}/>

export const Default = Story.bind({})
Default.args = { }
