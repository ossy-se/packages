import React from 'react'
import { View } from '../view'

/**
 * Semantic `<form>` with {@link View} layout props. Defaults to `preventDefault` on
 * submit so Storybook and SPA embeds do not trigger navigation; pass `onSubmit` to handle.
 */
export function Form({ onSubmit, children, ...props }) {
  return (
    <View
      as="form"
      onSubmit={e => {
        e.preventDefault()
        onSubmit?.(e)
      }}
      {...props}
    >
      {children}
    </View>
  )
}
