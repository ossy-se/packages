import React from 'react'
import { Card } from './Card.jsx'

export default {
  title: 'Display/Card',
  component: Card,
}

const Story = props => {

  return (
    <Card>
      Card content
    </Card>
  )
}

export const Default = Story.bind({})
Default.args = {}
