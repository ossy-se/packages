import React from 'react'
import { Title, Text, Button, Card } from '@ossy/design-system'

export const Pricing = ({
  title = 'Simple, transparent pricing',
  subtitle = 'Choose the plan that fits your needs',
  plans = [],
  billingToggle,
}) => {
  const defaultPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and small projects',
      features: ['Up to 3 projects', 'Basic analytics', 'Email support'],
      cta: { label: 'Get started', href: '/signup' },
      highlighted: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'For growing teams and businesses',
      features: ['Unlimited projects', 'Advanced analytics', 'Priority support', 'API access'],
      cta: { label: 'Start free trial', href: '/signup' },
      highlighted: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      features: ['Everything in Pro', 'Dedicated support', 'Custom integrations', 'SLA'],
      cta: { label: 'Contact sales', href: '/contact' },
      highlighted: false,
    },
  ]

  const displayPlans = plans.length > 0 ? plans : defaultPlans

  return (
    <div data-component="@ossy/pages/pricing">
      <style href="@ossy/pages/pricing" precedence="high">
        {`
          [data-component="@ossy/pages/pricing"] {
            padding: var(--space-xxl) var(--space-m);
          }

          [data-component="@ossy/pages/pricing"] .header {
            text-align: center;
            margin-bottom: var(--space-xxl);
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          [data-component="@ossy/pages/pricing"] .plans {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: var(--space-xl);
            max-width: 1200px;
            margin: 0 auto;
            align-items: stretch;
          }

          [data-component="@ossy/pages/pricing"] .plan-card {
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: var(--space-xl);
            border-radius: var(--space-m);
            border: 1px solid var(--separator-primary);
            position: relative;
          }

          [data-component="@ossy/pages/pricing"] .plan-card.highlighted {
            border-color: var(--color-primary);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }

          [data-component="@ossy/pages/pricing"] .plan-price {
            display: flex;
            align-items: baseline;
            gap: var(--space-xs);
            margin-bottom: var(--space-s);
          }

          [data-component="@ossy/pages/pricing"] .plan-features {
            list-style: none;
            padding: 0;
            margin: var(--space-l) 0;
            flex: 1;
          }

          [data-component="@ossy/pages/pricing"] .plan-features li {
            padding: var(--space-s) 0;
            border-bottom: 1px solid var(--separator-secondary, transparent);
            display: flex;
            align-items: center;
            gap: var(--space-s);
          }

          [data-component="@ossy/pages/pricing"] .plan-features li:last-child {
            border-bottom: none;
          }
        `}
      </style>

      <div className="header">
        <Title variant="display" style={{ marginBottom: 'var(--space-m)' }}>
          {title}
        </Title>
        <Text style={{ marginBottom: billingToggle ? 'var(--space-l)' : 0 }}>
          {subtitle}
        </Text>
        {billingToggle}
      </div>

      <div className="plans">
        {displayPlans.map((plan) => (
          <Card
            key={plan.id}
            surface="primary"
            className={`plan-card ${plan.highlighted ? 'highlighted' : ''}`}
          >
            <Title variant="tertiary" style={{ marginBottom: 'var(--space-s)' }}>
              {plan.name}
            </Title>
            <div className="plan-price">
              <Title variant="display">{plan.price}</Title>
              {plan.period && (
                <Text variant="small" style={{ color: 'var(--foreground-secondary)' }}>
                  {plan.period}
                </Text>
              )}
            </div>
            <Text variant="small" style={{ marginBottom: 'var(--space-m)' }}>
              {plan.description}
            </Text>
            <ul className="plan-features">
              {plan.features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            {plan.cta && (
              <Button
                variant={plan.highlighted ? 'cta' : 'default'}
                {...plan.cta}
                style={{ marginTop: 'auto' }}
              >
                {plan.cta.label}
              </Button>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
