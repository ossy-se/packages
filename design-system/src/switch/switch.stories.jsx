import React from 'react'
import { useState } from 'react'
import { Switch } from './Switch'

export default {
  title: 'Base/Switch',
  component: Switch,
}

const Story = props => {
  const [status, setStatus] = useState('Loading')
  return (
    <Switch on={status}>
      <Switch.Case match={['Error']}>
        Error
      </Switch.Case>

      <Switch.Case match={['Loading']}>
        Loading
      </Switch.Case>

      <Switch.Case match={['Success']}>
        Success
      </Switch.Case>
    </Switch>
  )
}

export const Default = Story.bind({})
Default.args = {}
