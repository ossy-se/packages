import React from 'react'
import { Title, Text } from '@ossy/design-system'

export const Maintenance = ({
  title = "We'll be back soon",
  subtitle = "We're performing scheduled maintenance. Please check back in a few minutes.",
  estimatedTime,
}) => {
  return (
    <div data-component="@ossy/pages/maintenance">
      <style href="@ossy/pages/maintenance" precedence="high">
        {`
          [data-component="@ossy/pages/maintenance"] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: var(--space-xl) var(--space-m);
            text-align: center;
          }

          [data-component="@ossy/pages/maintenance"] .icon {
            font-size: 4rem;
            margin-bottom: var(--space-xl);
            opacity: 0.5;
          }
        `}
      </style>

      <div className="icon">⚙️</div>
      <Title variant="display" style={{ marginBottom: 'var(--space-m)' }}>
        {title}
      </Title>
      <Text style={{ maxWidth: '400px', marginBottom: 'var(--space-s)' }}>
        {subtitle}
      </Text>
      {estimatedTime && (
        <Text variant="small" style={{ color: 'var(--foreground-secondary)' }}>
          Estimated downtime: {estimatedTime}
        </Text>
      )}
    </div>
  )
}
