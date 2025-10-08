import React from 'react'
import { Icon, icons } from './Icon.jsx'
import { View } from '../view/View.jsx'
import { Text } from '../text/Text.jsx'

export default {
  title: 'Display/Icon',
  component: Icon,
}

const Story = () => (
  <View layout="row-wrap" gap="l">
    {Object.keys(icons).map(name => (
      <View key={name} gap="s" justifyContent='center' alignItems="center">
        <View surface="primary" style={{
          padding: 'm',
          border: '1px solid var(--separator)',
          borderRadius: 'var(--space-m)'
        }}>
          <Icon name={name} />        
        </View>
        <Text>{name}</Text>
      </View>
    ))}
  </View>
)

export const Default = Story.bind({})
Default.args = {}