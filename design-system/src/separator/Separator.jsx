import React from 'react'

export const Separator = ({
  variant = 'primary',
  as: Element = 'div',
  ...props
}) => {

  return (
    <>
      <style href="@ossy/design-system/separator" precedence='high'>
      {`
        [data-separator] {
          border-style: solid;
          border-width: 1px 0 0 0;
        }
      `}
      </style>
      <style href={`@ossy/design-system/separator/${variant}`} precedence='high'>
      {`
        [data-separator-variant="${variant}"] {
          border-color: var(--separator-${variant}),
        }
      `}
      </style>
      <Element {...props} data-separator data-separator-variant={variant}/>
    </>
  )
}
