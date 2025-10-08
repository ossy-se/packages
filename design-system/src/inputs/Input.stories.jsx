import React from 'react'
import { Input, InputTitle, Input2, Textarea, Select, Upload } from './Input.jsx'
import { View } from '../view'

export default {
  title: 'Inputs/Input',
  component: Input,
}

const Story = () => (
  <View gap="m" style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Input />
    <InputTitle />
    <Input2 />
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
