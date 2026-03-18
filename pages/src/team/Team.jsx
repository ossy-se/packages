import React from 'react'
import { Title, Text, Button, Input, Card } from '@ossy/design-system'

export const Team = ({
  title = 'Team',
  subtitle = 'Invite and manage your team members',
  members = [],
  pendingInvites = [],
  onInvite,
  onRemoveMember,
  onResendInvite,
  onCancelInvite,
}) => {
  const defaultMembers = [
    { id: '1', name: 'You', email: 'you@example.com', role: 'Owner' },
    { id: '2', name: 'Jane Doe', email: 'jane@example.com', role: 'Admin' },
  ]

  const defaultPending = [
    { id: '1', email: 'pending@example.com', role: 'Member', status: 'pending' },
  ]

  const displayMembers = members.length > 0 ? members : defaultMembers
  const displayPending = pendingInvites.length > 0 ? pendingInvites : defaultPending

  return (
    <div data-component="@ossy/pages/team">
      <style href="@ossy/pages/team" precedence="high">
        {`
          [data-component="@ossy/pages/team"] {
            padding: var(--space-xl) var(--space-m);
            max-width: 800px;
            margin: 0 auto;
          }

          [data-component="@ossy/pages/team"] .invite-form {
            display: flex;
            gap: var(--space-m);
            margin-bottom: var(--space-xl);
            flex-wrap: wrap;
          }

          [data-component="@ossy/pages/team"] .invite-form input {
            flex: 1;
            min-width: 200px;
          }

          [data-component="@ossy/pages/team"] .member-row,
          [data-component="@ossy/pages/team"] .pending-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--space-m) 0;
            border-bottom: 1px solid var(--separator-primary);
            flex-wrap: wrap;
            gap: var(--space-s);
          }

          [data-component="@ossy/pages/team"] .member-row:last-child,
          [data-component="@ossy/pages/team"] .pending-row:last-child {
            border-bottom: none;
          }
        `}
      </style>

      <Title variant="display" style={{ marginBottom: 'var(--space-s)' }}>
        {title}
      </Title>
      <Text style={{ marginBottom: 'var(--space-xxl)' }}>
        {subtitle}
      </Text>

      {onInvite && (
        <form
          className="invite-form"
          onSubmit={(e) => {
            e.preventDefault()
            const email = e.target.email?.value
            if (email) onInvite({ email })
          }}
        >
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <Button type="submit" variant="cta">
            Invite
          </Button>
        </form>
      )}

      <Title variant="tertiary" as="h2" style={{ marginBottom: 'var(--space-m)' }}>
        Members
      </Title>
      <Card surface="primary" style={{ padding: 'var(--space-m)', marginBottom: 'var(--space-xl)' }}>
        {displayMembers.map((member) => (
          <div key={member.id} className="member-row">
            <div>
              <Text>{member.name}</Text>
              <Text variant="small" style={{ color: 'var(--foreground-secondary)' }}>
                {member.email} · {member.role}
              </Text>
            </div>
            {onRemoveMember && member.role !== 'Owner' && (
              <Button
                variant="link"
                onClick={() => onRemoveMember(member)}
                style={{ color: 'var(--color-error, #c00)' }}
              >
                Remove
              </Button>
            )}
          </div>
        ))}
      </Card>

      {displayPending.length > 0 && (
        <>
          <Title variant="tertiary" as="h2" style={{ marginBottom: 'var(--space-m)' }}>
            Pending invites
          </Title>
          <Card surface="primary" style={{ padding: 'var(--space-m)' }}>
            {displayPending.map((invite) => (
              <div key={invite.id} className="pending-row">
                <div>
                  <Text>{invite.email}</Text>
                  <Text variant="small" style={{ color: 'var(--foreground-secondary)' }}>
                    {invite.role} · {invite.status}
                  </Text>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-s)' }}>
                  {onResendInvite && (
                    <Button variant="link" onClick={() => onResendInvite(invite)}>
                      Resend
                    </Button>
                  )}
                  {onCancelInvite && (
                    <Button
                      variant="link"
                      onClick={() => onCancelInvite(invite)}
                      style={{ color: 'var(--color-error, #c00)' }}
                    >
                      Cancel
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </Card>
        </>
      )}
    </div>
  )
}
