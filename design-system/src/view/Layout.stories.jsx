import React from 'react'
import { View } from './View.jsx'
import { Text } from '../text/Text.jsx'
import { Title } from '../title/Title.jsx'
import fontHeight from '../icons/icons2/font-height.jsx'

export default {
  title: 'Layout',
  component: View,
  tags: ['autodocs']
}

const containerStyles = {
  boxSizing: 'border-box',
  background: 'hsl(188deg 95% 97%)',
  width: '100%',
  padding: 'var(--space-m)',
  borderRadius: 'var(--space-s)',
  color: 'hsl(188deg 61% 20%)',
  // border: '1px solid hsl(188deg 61% 40%)',
  boxShadow: '0px 0px 2px 4px hsla(188deg 61% 40%, .2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const Story = (args) => (
  <View {...args} gap="m" style={{ height: '100%'}}>
    
    <View slot="header" style={containerStyles}>
      <Text style={{ fontWeight: 'bold' }}>header</Text>
    </View>
    <View slot="sidebar-primary" style={containerStyles}>
      <Text style={{ fontWeight: 'bold' }}>sidebar-primary</Text>
    </View>

    <View slot="sidebar-secondary" style={containerStyles}>
      <Text style={{ fontWeight: 'bold' }}>sidebar-secondary</Text>
    </View>

    <View slot="content" style={{ ...containerStyles, minHeight: '450px' }}>
     <Text style={{ fontWeight: 'bold' }}>
        Content
      </Text> 
    </View>

    <View slot="footer" style={containerStyles}>
      <Text style={{ fontWeight: 'bold' }}>footer</Text>
    </View>
  </View>
)

export const Page = Story.bind({})
Page.args = { layout: 'page' }

export const Sidebar = Story.bind({});
Sidebar.args = {
  layout: 'sidebar'
}

export const OffCenter = Story.bind({})
OffCenter.args = { layout: 'off-center' }

export const OffCenterSmall = Story.bind({})
OffCenterSmall.args = { layout: 'off-center-s' }

export const OffCenterMedium = Story.bind({})
OffCenterMedium.args = { layout: 'off-center-m' }
