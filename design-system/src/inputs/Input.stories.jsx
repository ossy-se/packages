import React from 'react'
import { Input, InputTitle, Textarea, Select, Upload } from './Input.jsx'
import { View } from '../view'

export default {
  title: 'Design System/Inputs/Input',
  component: Input,
}

const Story = () => (
  <View gap="m" style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Input />
    <InputTitle />
    <Textarea />
    <Select>
      <option>Foo</option>
      <option>Bar</option>
    </Select>
    <Upload/>
  </View>
)

export const Default = Story.bind({})
Default.args = {}
