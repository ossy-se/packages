import React from 'react'
import { createCache } from './Cache.jsx'

export default {
  title: 'Base/Cache',
}

const Story = props => {

  const Cache = createCache({
    get: (path, state) => state,
    set: (path, value, state) => state
  })

  return (
    <Cache>
      {/* components */}
    </Cache>
  )
}

export const Default = Story.bind({})
Default.args = {}
