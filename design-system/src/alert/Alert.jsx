import React from 'react'

export const Alert = ({
  children,
  as: Element = 'div',
  ...props
}) => (
  <>
    <style href="@ossy/design-system/alert" precedence='high'>
    {`
      [data-alert] {
        border-bottom: 5px solid hsl(0, 89%, 43%);
        background-color: hsl(0, 0%, 97%);
        padding: 16px;
        border-radius: 8px;
        font-family: sans-serif;
        box-shadow: 3px 0 10px hsla(0, 0%, 85%, .75);
      }
    `}
    </style>
    <Element data-alert {...props}>
      {children}
    </Element>
  </>
)
