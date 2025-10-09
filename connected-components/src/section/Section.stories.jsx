import React from 'react'
import { Section } from './Section.jsx'

export default {
  title: 'Connected components/Section',
  component: Section,
  parameters: {
   layout: 'fullscreen',
   workspaceId: '36zDqF0TKZZ5KkJdyg7NH',
   renderInsideApp: true,
 },
}

const Story = props => <Section {...props}/>

export const Default = Story.bind({})
Default.args = { }
