import React from 'react'
import { Title } from '../title'
import { Text } from '../text'
import { Button } from '../button'

export const Guide = ({
  title,
  titleVariant = 'secondary',
  text,
  textVariant,
  actions = [],
  as: Element = 'div',
  children,
  align = 'center',
  style = {},
  ...props
}) => (
  <Element {...props} style={{ textAlign: align, ...style }}>
    <style href="@ossy/design-system/guide" precedence='high'>
    {`
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    `}
    </style>
    <div>
      <Title variant={titleVariant} style={{ marginBottom: 'var(--space-s)' }}>
        {title}
      </Title>
      {
        !!text
          ? <Text style={{ marginBottom: 'var(--space-m)' }}>{text}</Text>
          : children
      }
      <div style={{ display: 'flex', gap: 'var(--space-m)', justifyContent: 'center' }}>
        {actions.map(({ label, key, ...props }) => (
          <Button {...props} key={key | label}>
            {label}
          </Button>
        ))}
      </div>
    </div>
  </Element>
)
