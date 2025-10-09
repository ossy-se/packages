import React from 'react'
import { PagesModule } from './PagesModule.jsx'

export default {
  title: 'Connected components/PagesModule',
  component: PagesModule,
  parameters: {
   layout: 'fullscreen',
   workspaceId: '36zDqF0TKZZ5KkJdyg7NH',
   renderInsideApp: true
 },
}

const Story = props => <PagesModule {...props}/>

export const Default = Story.bind({})
Default.args = { }
