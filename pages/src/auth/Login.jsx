import React, { useState } from 'react'
import { Title, Text, Button, Input } from '@ossy/design-system'

export const Login = ({
  title = 'Sign in',
  subtitle = 'Enter your credentials to access your account',
  onSubmit,
  signUpLink,
  forgotPasswordLink,
  loading = false,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.({ email, password })
  }

  return (
    <div data-component="@ossy/pages/login">
      <style href="@ossy/pages/login" precedence="high">
        {`
          [data-component="@ossy/pages/login"] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 60vh;
            padding: var(--space-xl) var(--space-m);
          }

          [data-component="@ossy/pages/login"] form {
            width: 100%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            gap: var(--space-l);
          }

          [data-component="@ossy/pages/login"] .field {
            display: flex;
            flex-direction: column;
            gap: var(--space-s);
          }

          [data-component="@ossy/pages/login"] .actions {
            display: flex;
            flex-direction: column;
            gap: var(--space-m);
            align-items: stretch;
          }

          [data-component="@ossy/pages/login"] .links {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: var(--space-s);
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

        <div className="field">
          <Text variant="small">Password</Text>
          <Input
            type="password"
            name="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>

        <div className="actions">
          <Button type="submit" variant="cta" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>

          <div className="links">
            {forgotPasswordLink && (
              <Button variant="link" {...forgotPasswordLink}>
                Forgot password?
              </Button>
            )}
            {signUpLink && (
              <Button variant="link" {...signUpLink}>
                Create an account
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}
