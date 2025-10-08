import React from 'react'
import { View } from '../view/View.jsx'
import { Text } from '../text/Text.jsx'
import { Icons, Icon2 } from './Icon2.jsx'

export default {
  title: 'Display/Icon2',
  component: Icon2,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      options: ['s', 'm', 'l', 'xl'],
      control: { type: 'select' },
    },
  },
}

export const Icon = {
  args: {
    icon: 'folder'
  },
};

export const Library = {
  args: {
    primary: true,
    label: 'Button',
  },
  render: (props) => (
    <View layout="row-wrap" gap="l">
      {Object.keys(Icons).map(name => (
        <View key={name} gap="s" justifyContent='center' alignItems="center">
          <View surface="primary" style={{
            padding: 'var(--space-m)',
            border: '1px solid var(--separator)',
            borderRadius: 'var(--space-m)'
          }}>
            <Icon2 name={name} {...props}/>        
          </View>
          <Text>{name}</Text>
        </View>
      ))}
    </View>
  )
};