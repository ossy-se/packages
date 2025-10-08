import React from 'react'
import { Carousel } from './Carousel.jsx'
import { View } from '../view/index.js'

export default {
  title: 'Display/Carousel',
  component: Carousel,
}

const Story = () => (
  <Carousel childWidth="80%" childMaxWidth='400px'>

    <View
      surface="secondary"
      style={{
        padding: 'var(--space-m)',
        height: '200px',
        background: 'hsl(0, 0%, 90%)',
        borderRadius: 'var(--space-s)',
      }}>1</View>

    <View
      surface="secondary"
      style={{
        margin: 'var(--spacing-m)',
        padding: 'var(--space-m)',
        height: '200px',
        background: 'hsl(0, 0%, 90%)',
        borderRadius: 'var(--space-s)',
      }}>2</View>

    <View
      surface="secondary"
      style={{
        padding: 'var(--space-m)',
        height: '200px',
        background: 'hsl(0, 0%, 90%)',
        borderRadius: 'var(--space-s)',
      }}>3</View>

    
  </Carousel>
)

export const Default = Story.bind({})
Default.args = {}
