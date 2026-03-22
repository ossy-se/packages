import React from 'react'
import { Dropdown } from './Dropdown.jsx'
import { ContextMenu } from '../context-menu/index.js'
import { Button } from '../button/index.js'

export default {
  title: 'Design System/Other/Dropdown',
  component: Dropdown,
}

const Story = () => (
  <Dropdown trigger={<Button variant="neutral">Click me</Button>}>
    <ContextMenu>
      <ContextMenu.Item>foo</ContextMenu.Item>
      <ContextMenu.Separator />
      <ContextMenu.Item>bar</ContextMenu.Item>
    </ContextMenu>
  </Dropdown>
)

export const Default = Story.bind({})
Default.args = {}
