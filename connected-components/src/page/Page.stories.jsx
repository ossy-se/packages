import React from 'react'
import { Page } from './Page.jsx'

export default {
  title: 'Connected components/Page',
  component: Page,
  parameters: {
   layout: 'fullscreen',
   workspaceId: '36zDqF0TKZZ5KkJdyg7NH',
   renderInsideApp: true
 },
}

const Story = props => <Page {...props}/>

export const Default = Story.bind({})
Default.args = { }
