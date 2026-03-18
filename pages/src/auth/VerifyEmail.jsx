import React from 'react'
import { Title, Text, Button } from '@ossy/design-system'

export const VerifyEmail = ({
  title = 'Verify your email',
  subtitle = 'We\'ve sent a verification link to your email address. Click the link to activate your account.',
  onResend,
  loginLink,
  loading = false,
  resent = false,
}) => {
  return (
    <div data-component="@ossy/pages/verify-email">
      <style href="@ossy/pages/verify-email" precedence="high">
        {`
          [data-component="@ossy/pages/verify-email"] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 60vh;
            padding: var(--space-xl) var(--space-m);
            text-align: center;
          }

          [data-component="@ossy/pages/verify-email"] .actions {
            display: flex;
            flex-direction: column;
            gap: var(--space-m);
            margin-top: var(--space-xl);
            align-items: center;
          }
        `}
      </style>

      <Title variant="display" style={{ marginBottom: 'var(--space-m)' }}>
        {title}
      </Title>
      <Text style={{ marginBottom: 'var(--space-l)', maxWidth: '400px' }}>
        {subtitle}
      </Text>

      {resent && (
        <Text variant="small" style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-m)' }}>
          A new verification link has been sent.
        </Text>
      )}

      <div className="actions">
        {onResend && (
          <Button variant="secondary" onClick={onResend} disabled={loading}>
            {loading ? 'Sending...' : 'Resend verification email'}
          </Button>
        )}
        {loginLink && (
          <Button variant="link" {...loginLink}>
            Back to sign in
          </Button>
        )}
      </div>
    </div>
  )
}
