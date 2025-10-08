import React from 'react'
import { View } from './View.jsx'

export default {
  title: 'Base/View',
  component: View,
  tags: ['autodocs']
}

const containerStyles = {
   background: 'hsl(188deg 90% 98%)',
   width: '100%',
   padding: '16px',
   borderRadius: '2px',
   color: 'hsl(188deg 61% 20%)',
   border: '1px solid hsl(188deg 61% 40%)'
}

const Story = (args) => (
  <View {...args} style={{ height: '100%', gap: '16px' }}>
    <div slot="header" style={containerStyles}>Header</div>
    <div slot="sidebar-primary" style={containerStyles}>Sidebar primary</div>
    <div slot="sidebar-secondary" style={containerStyles}>Sidebar secondary</div>
    <div slot="content" style={containerStyles}>
     <div style={{ height: '700px' }}>
      Content
      </div> 
    </div>
    <div slot="footer" style={containerStyles}>Footer</div>
  </View>
)

const SelectableStory = ({ surface, ...args }) => (
  <View surface={surface} style={{ padding: 'var(--space-m)' }}>
    <View {...args} style={{ height: '80px', width: '80px' }} />
  </View>
  
)

export const Selectable = SelectableStory.bind({})
Selectable.args = { layout: 'row', surface: "secondary", selectable: true }

export const Surfaces = Story.bind({})
Surfaces.args = { layout: 'page' }

