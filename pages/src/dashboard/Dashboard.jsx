import React from 'react'
import { Title, Text, View, Card } from '@ossy/design-system'

export const Dashboard = ({
  title = 'Dashboard',
  subtitle,
  children,
  stats = [],
}) => {
  const defaultStats = [
    { label: 'Active users', value: '—' },
    { label: 'Revenue', value: '—' },
    { label: 'Conversions', value: '—' },
  ]

  const displayStats = stats.length > 0 ? stats : defaultStats

  return (
    <div data-component="@ossy/pages/dashboard">
      <style href="@ossy/pages/dashboard" precedence="high">
        {`
          [data-component="@ossy/pages/dashboard"] {
            padding: var(--space-xl) var(--space-m);
          }

          [data-component="@ossy/pages/dashboard"] .header {
            margin-bottom: var(--space-xxl);
          }

          [data-component="@ossy/pages/dashboard"] .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: var(--space-l);
            margin-bottom: var(--space-xxl);
          }

          [data-component="@ossy/pages/dashboard"] .stat-card {
            padding: var(--space-l);
            border-radius: var(--space-m);
            border: 1px solid var(--separator-primary);
          }
        `}
      </style>

      <div className="header">
        <Title variant="display" style={{ marginBottom: 'var(--space-s)' }}>
          {title}
        </Title>
        {subtitle && (
          <Text style={{ color: 'var(--foreground-secondary)' }}>
            {subtitle}
          </Text>
        )}
      </div>

      <div className="stats">
        {displayStats.map((stat, i) => (
          <Card key={i} surface="primary" className="stat-card">
            <Text variant="small" style={{ marginBottom: 'var(--space-xs)' }}>
              {stat.label}
            </Text>
            <Title variant="primary">{stat.value}</Title>
          </Card>
        ))}
      </div>

      {children}
    </div>
  )
}
