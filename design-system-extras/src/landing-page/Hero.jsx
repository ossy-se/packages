import React from 'react'
import { Title, Text, Button } from "@ossy/design-system"

export const Hero = ({
  title,
  titleMaxWidth = '800px',
  text,
  actions = [],
}) => (
  <div data-component="hero">

    <style href="@ossy/design-system-extras/hero" precedence="high">
      {`
      [data-component="hero"] {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        @media (min-width: 820px) {
          [data-component="hero"] {
            /* min-height: 60vh; */
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
