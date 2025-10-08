import React from 'react'
import { Dropdown } from './Dropdown.jsx'
import { ContextMenu } from '../context-menu/index.js'

export default {
  title: 'Other/Dropdown',
  component: Dropdown,
}

const Story = () => (
  <Dropdown trigger={<div>Click Me</div>}>
    <ContextMenu>
      <ContextMenu.Item>foo</ContextMenu.Item>
      <ContextMenu.Separator />
      <ContextMenu.Item>bar</ContextMenu.Item>
    </ContextMenu>
  </Dropdown>
)

export const Default = Story.bind({})
Default.args = {}
