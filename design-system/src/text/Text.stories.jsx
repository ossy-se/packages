import React, { useState } from 'react'
import { Text } from './Text.jsx'

export default {
  title: 'Display/Text',
  component: Text,
}

const Story = props => {
  return (
    <Text {...props} >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis massa eget mauris posuere feugiat. Duis non posuere mauris, a dictum nisi. Nam et turpis ut sem aliquam hendrerit et non risus. Curabitur id varius dui, at interdum lectus. Vivamus dui arcu, consectetur vel suscipit vitae, maximus et eros. Integer mauris urna, vestibulum id viverra rutrum, varius eleifend est. Vestibulum pellentesque magna vel sapien ornare fringilla. Quisque pellentesque diam ex, quis fermentum felis varius nec. Nam pulvinar tortor turpis, in auctor tortor lobortis a. Sed viverra faucibus finibus. Phasellus neque enim, semper et sapien non, elementum varius lectus. Donec interdum dolor libero, non posuere ipsum imperdiet ut. Nullam erat leo, tincidunt vitae libero sed, fringilla sagittis leo.
    </Text>
  )
}

export const Default = Story.bind({})
Default.args = { as: 'p' }
