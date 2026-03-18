import React, { useState } from 'react'
import { Title, Text, Button, Input } from '@ossy/design-system'

export const ResetPassword = ({
  title = 'Set new password',
  subtitle = 'Enter your new password below',
  onSubmit,
  loginLink,
  loading = false,
  success = false,
  successMessage = 'Your password has been reset.',
}) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      onSubmit?.({ password })
    }
  }

  if (success) {
    return (
      <div data-component="@ossy/pages/reset-password">
        <style href="@ossy/pages/reset-password" precedence="high">
          {`
            [data-component="@ossy/pages/reset-password"] {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 60vh;
              padding: var(--space-xl) var(--space-m);
              text-align: center;
            }

            [data-component="@ossy/pages/reset-password"] .success-actions {
              margin-top: var(--space-xl);
            }
          `}
        </style>

        <Title variant="display" style={{ marginBottom: 'var(--space-m)' }}>
          Password reset
        </Title>
        <Text style={{ marginBottom: 'var(--space-l)', maxWidth: '400px' }}>
          {successMessage}
        </Text>
        {loginLink && (
          <div className="success-actions">
            <Button variant="cta" {...loginLink}>
              Sign in
            </Button>
          </div>
        )}
      </div>
    )
  }

  const passwordsMatch = password === confirmPassword || !confirmPassword

  return (
    <div data-component="@ossy/pages/reset-password">
      <style href="@ossy/pages/reset-password" precedence="high">
        {`
          [data-component="@ossy/pages/reset-password"] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 60vh;
            padding: var(--space-xl) var(--space-m);
          }

          [data-component="@ossy/pages/reset-password"] form {
            width: 100%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            gap: var(--space-l);
          }

          [data-component="@ossy/pages/reset-password"] .field {
            display: flex;
            flex-direction: column;
            gap: var(--space-s);
          }

          [data-component="@ossy/pages/reset-password"] .actions {
            display: flex;
            flex-direction: column;
            gap: var(--space-m);
            align-items: stretch;
          }

          [data-component="@ossy/pages/reset-password"] .error {
            color: var(--color-error, #c00);
            font-size: 0.875rem;
          }
        `}
      </style>

      <Title variant="display" style={{ marginBottom: 'var(--space-s)', textAlign: 'center' }}>
        {title}
      </Title>
      <Text style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
        {subtitle}
      </Text>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <Text variant="small">New password</Text>
          <Input
            type="password"
            name="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            autoComplete="new-password"
          />
        </div>

        <div className="field">
          <Text variant="small">Confirm password</Text>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={8}
            autoComplete="new-password"
          />
          {confirmPassword && !passwordsMatch && (
            <Text className="error">Passwords do not match</Text>
          )}
        </div>

        <div className="actions">
          <Button
            type="submit"
            variant="cta"
            disabled={loading || !passwordsMatch || password.length < 8}
          >
            {loading ? 'Resetting...' : 'Reset password'}
          </Button>

          {loginLink && (
            <Button variant="link" {...loginLink} style={{ alignSelf: 'center' }}>
              Back to sign in
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
