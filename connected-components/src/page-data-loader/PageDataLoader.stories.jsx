import React from 'react'
import { PageDataLoader } from './PageDataLoader.jsx'

export default {
  title: 'Connected components/PageDataLoader',
  component: PageDataLoader,
  parameters: {
   layout: 'fullscreen',
   workspaceId: '36zDqF0TKZZ5KkJdyg7NH'
 },
}

const Story = props => <PageDataLoader {...props}/>

export const Default = Story.bind({})
Default.args = { }
