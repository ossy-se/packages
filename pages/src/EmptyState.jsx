import React from 'react'
import { Title, Text, Button } from '@ossy/design-system'

export const EmptyState = ({
  title = 'No data yet',
  subtitle = "Get started by creating your first item.",
  icon,
  action,
  secondaryAction,
}) => {
  return (
    <div data-component="@ossy/pages/empty-state">
      <style href="@ossy/pages/empty-state" precedence="high">
        {`
          [data-component="@ossy/pages/empty-state"] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 40vh;
            padding: var(--space-xxl) var(--space-m);
            text-align: center;
          }

          [data-component="@ossy/pages/empty-state"] .icon {
            font-size: 4rem;
            margin-bottom: var(--space-xl);
            opacity: 0.4;
          }

          [data-component="@ossy/pages/empty-state"] .actions {
            display: flex;
            gap: var(--space-m);
            margin-top: var(--space-xl);
            justify-content: center;
            flex-wrap: wrap;
          }
        `}
      </style>

      {icon && <div className="icon">{icon}</div>}
      <Title variant="tertiary" style={{ marginBottom: 'var(--space-s)' }}>
        {title}
      </Title>
      <Text style={{ maxWidth: '400px', color: 'var(--foreground-secondary)' }}>
        {subtitle}
      </Text>

      <div className="actions">
        {action && (
          <Button variant="cta" {...action}>
            {action.label || 'Get started'}
          </Button>
        )}
        {secondaryAction && (
          <Button variant="secondary" {...secondaryAction}>
            {secondaryAction.label || 'Learn more'}
          </Button>
        )}
      </div>
    </div>
  )
}
