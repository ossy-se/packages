import React from 'react'
import { Layout } from './Layout.jsx'

export default {
  title: 'Connected components/Layout',
  component: Layout,
  parameters: {
   layout: 'fullscreen',
   workspaceId: '36zDqF0TKZZ5KkJdyg7NH'
 },
}

const Story = props => <Layout {...props}/>

export const Default = Story.bind({})
Default.args = { }
