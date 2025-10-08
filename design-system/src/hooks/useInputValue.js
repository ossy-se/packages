import { useState } from 'react'

export const useInputValue = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue)

  const setValueFromEvent = maybeEvent => {

    if (typeof maybeEvent === 'string') {
      setValue(maybeEvent)
    } else if (!!event && !!event.target && !!event.target.value ) {
      setValue(event.target.value)
    } else {
      setValue('')
    }

  }

  return [
    value,
    setValueFromEvent,
    () => setValue(defaultValue)
  ]
}
