import React from 'react'
import { ThemeEditor } from './ThemeEditor.jsx'

export default {
  title: 'Connected components/ThemeEditor',
  component: ThemeEditor,
  parameters: {
   layout: 'fullscreen',
   workspaceId: '36zDqF0TKZZ5KkJdyg7NH'
 },
}

const Story = props => <ThemeEditor {...props}/>

export const Default = Story.bind({})
Default.args = { }
