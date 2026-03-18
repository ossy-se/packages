import React, { useState } from 'react'
import { Title, Text, Button, Input } from '@ossy/design-system'

export const SignUp = ({
  title = 'Create an account',
  subtitle = 'Get started with your free account',
  onSubmit,
  loginLink,
  termsLink,
  loading = false,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.({ email, password, name })
  }

  return (
    <div data-component="@ossy/pages/sign-up">
      <style href="@ossy/pages/sign-up" precedence="high">
        {`
          [data-component="@ossy/pages/sign-up"] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 60vh;
            padding: var(--space-xl) var(--space-m);
          }

          [data-component="@ossy/pages/sign-up"] form {
            width: 100%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            gap: var(--space-l);
          }

          [data-component="@ossy/pages/sign-up"] .field {
            display: flex;
            flex-direction: column;
            gap: var(--space-s);
          }

          [data-component="@ossy/pages/sign-up"] .actions {
            display: flex;
            flex-direction: column;
            gap: var(--space-m);
            align-items: stretch;
          }

          [data-component="@ossy/pages/sign-up"] .terms {
            font-size: 0.875rem;
            color: var(--foreground-secondary, inherit);
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
          <Text variant="small">Name</Text>
          <Input
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
        </div>

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

        <div className="field">
          <Text variant="small">Password</Text>
          <Input
            type="password"
            name="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
        </div>

        <div className="actions">
          <Button type="submit" variant="cta" disabled={loading}>
            {loading ? 'Creating account...' : 'Create account'}
          </Button>

          {termsLink && (
            <Text variant="small" className="terms" style={{ textAlign: 'center' }}>
              By signing up, you agree to our{' '}
              <Button variant="link" {...termsLink} style={{ padding: 0 }}>
                Terms of Service
              </Button>
            </Text>
          )}

          {loginLink && (
            <Button variant="link" {...loginLink} style={{ alignSelf: 'center' }}>
              Already have an account? Sign in
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
