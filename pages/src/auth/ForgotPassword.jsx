import React, { useState } from 'react'
import { Title, Text, Button, Input } from '@ossy/design-system'

export const ForgotPassword = ({
  title = 'Reset password',
  subtitle = 'Enter your email and we\'ll send you a link to reset your password',
  onSubmit,
  loginLink,
  successMessage = 'Check your email for a reset link.',
  loading = false,
  success = false,
}) => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.({ email })
  }

  if (success) {
    return (
      <div data-component="@ossy/pages/forgot-password">
        <style href="@ossy/pages/forgot-password" precedence="high">
          {`
            [data-component="@ossy/pages/forgot-password"] {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 60vh;
              padding: var(--space-xl) var(--space-m);
              text-align: center;
            }

            [data-component="@ossy/pages/forgot-password"] .success-actions {
              margin-top: var(--space-xl);
            }
          `}
        </style>

        <Title variant="display" style={{ marginBottom: 'var(--space-m)' }}>
          Check your email
        </Title>
        <Text style={{ marginBottom: 'var(--space-l)', maxWidth: '400px' }}>
          {successMessage}
        </Text>
        {loginLink && (
          <div className="success-actions">
            <Button variant="cta" {...loginLink}>
              Back to sign in
            </Button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div data-component="@ossy/pages/forgot-password">
      <style href="@ossy/pages/forgot-password" precedence="high">
        {`
          [data-component="@ossy/pages/forgot-password"] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 60vh;
            padding: var(--space-xl) var(--space-m);
          }

          [data-component="@ossy/pages/forgot-password"] form {
            width: 100%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            gap: var(--space-l);
          }

          [data-component="@ossy/pages/forgot-password"] .field {
            display: flex;
            flex-direction: column;
            gap: var(--space-s);
          }

          [data-component="@ossy/pages/forgot-password"] .actions {
            display: flex;
            flex-direction: column;
            gap: var(--space-m);
            align-items: stretch;
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
          <Text variant="small">Email</Text>
          <Input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <div className="actions">
          <Button type="submit" variant="cta" disabled={loading}>
            {loading ? 'Sending...' : 'Send reset link'}
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
