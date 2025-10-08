import React, { useState } from 'react'
import { useTimeout } from '../hooks/index.js'

export const DelayedRender = ({
  delay = 1000, // milliseconds
  children
}) => {
  const [render, setRender] = useState(false)

  useTimeout(() => {
    setRender(true)
  }, delay)

  return render ? children : <></>
}
