import React from 'react'
import { Title } from '../../title'
import { Text } from '../../text'
import { Button } from '../../button'

export const Hero = ({
  title,
  titleMaxWidth = '800px',
  text,
  actions = [],
}) => (
  <div data-hero>

    <style href="@ossy/design-system/hero" precedence='high'>
    {`
      [data-hero] {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }


      @media (min-width: 820px) {
        [data-hero] {
          min-height: 60vh;
          flex: 0 0 auto;
        }
      }
    `}
    </style>

    <Title
      variant="display"
      style={{ maxWidth: titleMaxWidth, marginBottom: 'var(--space-l)' }}
    >
      {title}
    </Title>

    <Text style={{ marginBottom: 'var(--space-l)' }}>
      {text}
    </Text>

    <div style={{ display: 'flex', gap: 'var(--space-m)'}}>
      {actions.map(({ label, ...props }) => (
        <Button {...props} key={label}>
          {label}
        </Button>
      ))}
    </div>

  </div>
)
