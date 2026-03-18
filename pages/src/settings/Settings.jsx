import React from 'react'
import { Title, Text, Button, Input, PageSection } from '@ossy/design-system'

export const Settings = ({
  title = 'Settings',
  subtitle = 'Manage your account and preferences',
  sections = [],
}) => {
  const defaultSections = [
    {
      id: 'profile',
      title: 'Profile',
      description: 'Update your personal information',
      fields: [
        { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
        { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
      ],
      submitLabel: 'Save changes',
    },
    {
      id: 'security',
      title: 'Security',
      description: 'Manage your password and security settings',
      fields: [
        { id: 'current-password', label: 'Current password', type: 'password', placeholder: '••••••••' },
        { id: 'new-password', label: 'New password', type: 'password', placeholder: '••••••••' },
      ],
      submitLabel: 'Update password',
    },
    {
      id: 'notifications',
      title: 'Notifications',
      description: 'Choose how you want to be notified',
      toggles: [
        { id: 'email', label: 'Email notifications', description: 'Receive updates via email' },
        { id: 'marketing', label: 'Marketing emails', description: 'Receive product updates and tips' },
      ],
    },
  ]

  const displaySections = sections.length > 0 ? sections : defaultSections

  return (
    <div data-component="@ossy/pages/settings">
      <style href="@ossy/pages/settings" precedence="high">
        {`
          [data-component="@ossy/pages/settings"] {
            padding: var(--space-xl) var(--space-m);
            max-width: 800px;
            margin: 0 auto;
          }

          [data-component="@ossy/pages/settings"] .section {
            margin-bottom: var(--space-xxl);
          }

          [data-component="@ossy/pages/settings"] .field {
            display: flex;
            flex-direction: column;
            gap: var(--space-s);
            margin-bottom: var(--space-l);
          }

          [data-component="@ossy/pages/settings"] .toggle-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--space-m) 0;
            border-bottom: 1px solid var(--separator-primary);
          }

          [data-component="@ossy/pages/settings"] .toggle-row:last-child {
            border-bottom: none;
          }

          [data-component="@ossy/pages/settings"] .toggle-label {
            display: flex;
            flex-direction: column;
            gap: var(--space-xs);
          }

          [data-component="@ossy/pages/settings"] .toggle-checkbox {
            width: 44px;
            height: 24px;
            accent-color: var(--color-primary);
          }
        `}
      </style>

      <Title variant="display" style={{ marginBottom: 'var(--space-s)' }}>
        {title}
      </Title>
      <Text style={{ marginBottom: 'var(--space-xxl)' }}>
        {subtitle}
      </Text>

      {displaySections.map((section) => (
        <PageSection
          key={section.id}
          surface="primary"
          style={{ marginBottom: 'var(--space-xl)', padding: 'var(--space-xl)' }}
        >
          <Title variant="tertiary" as="h2" style={{ marginBottom: 'var(--space-s)' }}>
            {section.title}
          </Title>
          <Text variant="small" style={{ marginBottom: 'var(--space-l)' }}>
            {section.description}
          </Text>

          {section.fields?.map((field) => (
            <div key={field.id} className="field">
              <Text variant="small">{field.label}</Text>
              <Input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                {...field}
              />
            </div>
          ))}

          {section.toggles?.map((toggle) => (
            <div key={toggle.id} className="toggle-row">
              <div className="toggle-label">
                <Text>{toggle.label}</Text>
                {toggle.description && (
                  <Text variant="small" style={{ color: 'var(--foreground-secondary)' }}>
                    {toggle.description}
                  </Text>
                )}
              </div>
              <input
                type="checkbox"
                className="toggle-checkbox"
                checked={toggle.value ?? false}
                onChange={(e) => toggle.onChange?.(e.target.checked)}
              />
            </div>
          ))}

          {section.submitLabel && (
            <Button variant="cta" style={{ marginTop: 'var(--space-m)' }}>
              {section.submitLabel}
            </Button>
          )}
        </PageSection>
      ))}
    </div>
  )
}
