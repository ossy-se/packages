import React, { useEffect, useRef } from 'react'

// Taken from: https://felixgerschau.com/react-hooks-settimeout/#declarative-timeouts-with-the-usetimeout-hook
export const useTimeout = (callback, delay) => {
  const savedCallback = useRef(callback)

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the timeout.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    if (delay === null) return

    const id = setTimeout(
      () => savedCallback.current(),
      delay
    )

    return () => clearTimeout(id)
  }, [delay])
}
