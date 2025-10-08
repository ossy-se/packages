import React from 'react'
import { CardLayout } from './Card.layout.jsx'

export default {
  title: 'Design System Extras/Router Layouts/Card',
  component: CardLayout,
  parameters: {
   layout: 'fullscreen',
 },
}

const Story = props => <CardLayout {...props} />

export const Default = Story.bind({})
Default.args = {}
