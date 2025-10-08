import React from 'react'
import { Stack } from './Stack'

export default {
  title: 'Layout/Stack',
  component: Stack,
}

const Story = props => {

  return (
    <Stack horizontal bordered style={{ height: '200px' }}>

      <Stack.Item as="section" fill>
        ~Hello...
      </Stack.Item>

      <Stack.Item as="section" style={{ width: '300px' }}>
        ...from the other siiiide~
      </Stack.Item>

    </Stack>
  )
}

export const Default = Story.bind({})
Default.args = {}
