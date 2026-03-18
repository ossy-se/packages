import React from 'react'
import { Title, Text, Button } from '@ossy/design-system'

export const Unauthorized = ({
  title = 'Access denied',
  subtitle = "You don't have permission to view this page.",
  homeLink,
  loginLink,
}) => {
  return (
    <div data-component="@ossy/pages/unauthorized">
      <style href="@ossy/pages/unauthorized" precedence="high">
        {`
          [data-component="@ossy/pages/unauthorized"] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 70vh;
            padding: var(--space-xl) var(--space-m);
            text-align: center;
          }

          [data-component="@ossy/pages/unauthorized"] .code {
            font-size: 6rem;
            font-weight: 200;
            line-height: 1;
            color: var(--foreground-secondary, #999);
            margin-bottom: var(--space-m);
          }

          [data-component="@ossy/pages/unauthorized"] .actions {
            display: flex;
            gap: var(--space-m);
            margin-top: var(--space-xl);
            justify-content: center;
            flex-wrap: wrap;
          }
        `}
      </style>

      <div className="code">403</div>
      <Title variant="display" style={{ marginBottom: 'var(--space-m)' }}>
        {title}
      </Title>
      <Text style={{ maxWidth: '400px', marginBottom: 'var(--space-l)' }}>
        {subtitle}
      </Text>

      <div className="actions">
        {homeLink && (
          <Button variant="cta" {...homeLink}>
            Go to homepage
          </Button>
        )}
        {loginLink && (
          <Button variant="secondary" {...loginLink}>
            Sign in
          </Button>
        )}
      </div>
    </div>
  )
}
