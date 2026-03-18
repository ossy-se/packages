import React from 'react'
import { Title, Text, Button } from '@ossy/design-system'

export const NotFound = ({
  title = 'Page not found',
  subtitle = 'The page you\'re looking for doesn\'t exist or has been moved.',
  homeLink,
}) => {
  return (
    <div data-component="@ossy/pages/not-found">
      <style href="@ossy/pages/not-found" precedence="high">
        {`
          [data-component="@ossy/pages/not-found"] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 70vh;
            padding: var(--space-xl) var(--space-m);
            text-align: center;
          }

          [data-component="@ossy/pages/not-found"] .code {
            font-size: 6rem;
            font-weight: 200;
            line-height: 1;
            color: var(--foreground-secondary, #999);
            margin-bottom: var(--space-m);
          }

          [data-component="@ossy/pages/not-found"] .actions {
            margin-top: var(--space-xl);
          }
        `}
      </style>

      <div className="code">404</div>
      <Title variant="display" style={{ marginBottom: 'var(--space-m)' }}>
        {title}
      </Title>
      <Text style={{ maxWidth: '400px', marginBottom: 'var(--space-l)' }}>
        {subtitle}
      </Text>

      {homeLink && (
        <div className="actions">
          <Button variant="cta" {...homeLink}>
            Go to homepage
          </Button>
        </div>
      )}
    </div>
  )
}
