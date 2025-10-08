import React from 'react'
import { ContextMenu } from './ContextMenu.jsx'

export default {
  title: 'Actions/ContextMenu',
  component: ContextMenu,
}

const Story = () => (
  <ContextMenu>
    <ContextMenu.Item prefix="details-more">Details</ContextMenu.Item>
    <ContextMenu.Item prefix="pen">Edit</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item prefix="share">Share</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item variant="command-danger" prefix="trash" >Remove</ContextMenu.Item>
  </ContextMenu>
)

export const Default = Story.bind({})
Default.args = {}