import React from 'react'
import { Title, Text, Button, Input, Card } from '@ossy/design-system'

export const ApiKeys = ({
  title = 'API Keys',
  subtitle = 'Manage your API keys for programmatic access',
  keys = [],
  onCreateKey,
  onRevokeKey,
}) => {
  const defaultKeys = [
    { id: '1', name: 'Production', prefix: 'sk_live_••••••••••••', created: 'Mar 1, 2026' },
    { id: '2', name: 'Development', prefix: 'sk_test_••••••••••••', created: 'Feb 15, 2026' },
  ]

  const displayKeys = keys.length > 0 ? keys : defaultKeys

  return (
    <div data-component="@ossy/pages/api-keys">
      <style href="@ossy/pages/api-keys" precedence="high">
        {`
          [data-component="@ossy/pages/api-keys"] {
            padding: var(--space-xl) var(--space-m);
            max-width: 800px;
            margin: 0 auto;
          }

          [data-component="@ossy/pages/api-keys"] .key-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--space-m) 0;
            border-bottom: 1px solid var(--separator-primary);
            flex-wrap: wrap;
            gap: var(--space-s);
          }

          [data-component="@ossy/pages/api-keys"] .key-row:last-child {
            border-bottom: none;
          }

          [data-component="@ossy/pages/api-keys"] .warning {
            padding: var(--space-m);
            background: var(--surface-secondary, rgba(0,0,0,0.05));
            border-radius: var(--space-s);
            margin-bottom: var(--space-xl);
          }
        `}
      </style>

      <Title variant="display" style={{ marginBottom: 'var(--space-s)' }}>
        {title}
      </Title>
      <Text style={{ marginBottom: 'var(--space-xl)' }}>
        {subtitle}
      </Text>

      <div className="warning">
        <Text variant="small">
          Keep your API keys secure. Never share them or commit them to version control.
        </Text>
      </div>

      {onCreateKey && (
        <Button variant="cta" onClick={onCreateKey} style={{ marginBottom: 'var(--space-xl)' }}>
          Create new key
        </Button>
      )}

      <Card surface="primary" style={{ padding: 'var(--space-m)' }}>
        {displayKeys.map((key) => (
          <div key={key.id} className="key-row">
            <div>
              <Text>{key.name}</Text>
              <Text variant="small" style={{ color: 'var(--foreground-secondary)', fontFamily: 'monospace' }}>
                {key.prefix}
              </Text>
              {key.created && (
                <Text variant="small" style={{ display: 'block', color: 'var(--foreground-secondary)' }}>
                  Created {key.created}
                </Text>
              )}
            </div>
            {onRevokeKey && (
              <Button
                variant="link"
                onClick={() => onRevokeKey(key)}
                style={{ color: 'var(--color-error, #c00)' }}
              >
                Revoke
              </Button>
            )}
          </div>
        ))}
      </Card>
    </div>
  )
}
