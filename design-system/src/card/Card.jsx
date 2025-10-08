import React from 'react'
import { View } from '../view/View.jsx'

export const Card = ({
  variant = 'default',
  ...props
}) => {

  return (
    <>
      <style href="@ossy/design-system/card" precedence='high'>
      {`
        [data-card] {
          overflow: hidden;
          box-sizing: border-box;
        }
      `}
      </style>
      <style href={`@ossy/design-system/card/${variant}`} precedence='high'>
      {`
        [data-card-variant="${variant}"] {
          box-shadow: var(--card-${variant}-box-shadow, var(--card-default-box-shadow));
          padding: var(--card-${variant}-padding, var(--card-default-padding, var(--space-m)));
          border-radius: var(--card-${variant}-border-radius, var(--card-default-border-radius));
          background: var(--card-${variant}-background, var(--card-default-background));
          backdrop-filter: var(--card-${variant}-backdrop-filter, var(--card-default-backdrop-filter));
          border-width: var(--card-${variant}-border-width, var(--card-default-border-width));
          border-style: var(--card-${variant}-border-style, var(--card-default-border-style));
          border-color: var(--card-${variant}-border-color, var(--card-default-border-color));
        }
      `}
      </style>
      <View data-card data-card-variant={variant} {...props} />
    </>
  )
}
