import React, { useState } from 'react'
import { Title, Text, Button, Input } from '@ossy/design-system'

export const DeleteAccount = ({
  title = 'Delete account',
  subtitle = 'This action cannot be undone. All your data will be permanently removed.',
  confirmText = 'delete my account',
  onSubmit,
  cancelLink,
  loading = false,
}) => {
  const [confirm, setConfirm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (confirm.toLowerCase() === confirmText.toLowerCase()) {
      onSubmit?.()
    }
  }

  const isConfirmed = confirm.toLowerCase() === confirmText.toLowerCase()

  return (
    <div data-component="@ossy/pages/delete-account">
      <style href="@ossy/pages/delete-account" precedence="high">
        {`
          [data-component="@ossy/pages/delete-account"] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 60vh;
            padding: var(--space-xl) var(--space-m);
          }

          [data-component="@ossy/pages/delete-account"] .content {
            max-width: 480px;
            text-align: center;
          }

          [data-component="@ossy/pages/delete-account"] .warning {
            padding: var(--space-m);
            background: var(--surface-secondary, rgba(0,0,0,0.05));
            border-radius: var(--space-s);
            margin: var(--space-xl) 0;
            border: 1px solid var(--color-error, #c00);
          }

          [data-component="@ossy/pages/delete-account"] form {
            width: 100%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            gap: var(--space-l);
            margin-top: var(--space-xl);
          }

          [data-component="@ossy/pages/delete-account"] .field {
            display: flex;
            flex-direction: column;
            gap: var(--space-s);
          }

          [data-component="@ossy/pages/delete-account"] .actions {
            display: flex;
            gap: var(--space-m);
            justify-content: center;
            flex-wrap: wrap;
          }
        `}
      </style>

      <Title variant="display" style={{ marginBottom: 'var(--space-s)', textAlign: 'center' }}>
        {title}
      </Title>
      <Text style={{ marginBottom: 'var(--space-m)', textAlign: 'center' }}>
        {subtitle}
      </Text>

      <div className="warning">
        <Text variant="small">
          This will permanently delete your account and all associated data. This action cannot be undone.
        </Text>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <Text variant="small">
            Type <strong>{confirmText}</strong> to confirm
          </Text>
          <Input
            type="text"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder={confirmText}
            autoComplete="off"
          />
        </div>

        <div className="actions">
          {cancelLink && (
            <Button variant="secondary" {...cancelLink}>
              Cancel
            </Button>
          )}
          <Button
            type="submit"
            variant="cta"
            disabled={loading || !isConfirmed}
            style={{ background: 'var(--color-error, #c00)' }}
          >
            {loading ? 'Deleting...' : 'Delete account'}
          </Button>
        </div>
      </form>
    </div>
  )
}
