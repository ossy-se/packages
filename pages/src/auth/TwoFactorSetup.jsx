import React, { useState } from 'react'
import { Title, Text, Button, Input } from '@ossy/design-system'

export const TwoFactorSetup = ({
  title = 'Two-factor authentication',
  subtitle = 'Add an extra layer of security to your account',
  enabled = false,
  onEnable,
  onDisable,
  onVerify,
  loading = false,
}) => {
  const [code, setCode] = useState('')

  if (enabled) {
    return (
      <div data-component="@ossy/pages/two-factor">
        <style href="@ossy/pages/two-factor" precedence="high">
          {`
            [data-component="@ossy/pages/two-factor"] {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 60vh;
              padding: var(--space-xl) var(--space-m);
            }

            [data-component="@ossy/pages/two-factor"] .content {
              max-width: 480px;
              text-align: center;
            }

            [data-component="@ossy/pages/two-factor"] .success {
              padding: var(--space-m);
              background: var(--surface-primary, rgba(0,0,0,0.05));
              border-radius: var(--space-s);
              margin: var(--space-xl) 0;
              color: var(--color-accent);
            }

            [data-component="@ossy/pages/two-factor"] .actions {
              margin-top: var(--space-xl);
            }
          `}
        </style>

        <Title variant="display" style={{ marginBottom: 'var(--space-s)' }}>
          {title}
        </Title>
        <Text style={{ marginBottom: 'var(--space-m)' }}>
          Two-factor authentication is enabled on your account.
        </Text>

        <div className="success">
          <Text variant="small">Your account is protected with 2FA.</Text>
        </div>

        {onDisable && (
          <div className="actions">
            <Button
              variant="secondary"
              onClick={onDisable}
              disabled={loading}
              style={{ color: 'var(--color-error, #c00)' }}
            >
              {loading ? 'Disabling...' : 'Disable 2FA'}
            </Button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div data-component="@ossy/pages/two-factor">
      <style href="@ossy/pages/two-factor" precedence="high">
        {`
          [data-component="@ossy/pages/two-factor"] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 60vh;
            padding: var(--space-xl) var(--space-m);
          }

          [data-component="@ossy/pages/two-factor"] .content {
            max-width: 480px;
            text-align: center;
          }

          [data-component="@ossy/pages/two-factor"] form {
            width: 100%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            gap: var(--space-l);
            margin-top: var(--space-xl);
          }

          [data-component="@ossy/pages/two-factor"] .field {
            display: flex;
            flex-direction: column;
            gap: var(--space-s);
          }

          [data-component="@ossy/pages/two-factor"] .steps {
            text-align: left;
            margin: var(--space-xl) 0;
            padding: var(--space-m);
            background: var(--surface-primary, rgba(0,0,0,0.05));
            border-radius: var(--space-s);
          }

          [data-component="@ossy/pages/two-factor"] .steps ol {
            margin: 0;
            padding-left: var(--space-l);
          }

          [data-component="@ossy/pages/two-factor"] .steps li {
            margin-bottom: var(--space-s);
          }
        `}
      </style>

      <Title variant="display" style={{ marginBottom: 'var(--space-s)' }}>
        {title}
      </Title>
      <Text style={{ marginBottom: 'var(--space-m)' }}>
        {subtitle}
      </Text>

      <div className="steps">
        <Text variant="small" style={{ marginBottom: 'var(--space-s)' }}>
          To enable 2FA:
        </Text>
        <ol>
          <li><Text variant="small">Download an authenticator app (e.g. Google Authenticator)</Text></li>
          <li><Text variant="small">Scan the QR code we'll show you</Text></li>
          <li><Text variant="small">Enter the 6-digit code to verify</Text></li>
        </ol>
      </div>

      {onEnable ? (
        <Button variant="cta" onClick={onEnable} disabled={loading}>
          {loading ? 'Setting up...' : 'Enable 2FA'}
        </Button>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onVerify?.(code)
          }}
        >
          <div className="field">
            <Text variant="small">Verification code</Text>
            <Input
              type="text"
              placeholder="000000"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              maxLength={6}
              autoComplete="one-time-code"
            />
          </div>
          <Button type="submit" variant="cta" disabled={loading || code.length !== 6}>
            {loading ? 'Verifying...' : 'Verify and enable'}
          </Button>
        </form>
      )}
    </div>
  )
}
