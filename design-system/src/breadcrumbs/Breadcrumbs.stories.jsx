import React from 'react'
import { Breadcrumbs } from './Breadcrumbs.jsx'
import { Button } from '../button/Button.jsx'

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
}

const Story = () => (
  <Breadcrumbs>
    <Button prefix="home" variant="command"/>
    <Button variant="command">foo</Button>
    <Button variant="command">bar</Button>
  </Breadcrumbs>
)

export const Default = Story.bind({})
Default.args = {}
