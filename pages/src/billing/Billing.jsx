import React from 'react'
import { Title, Text, Button, Card, View } from '@ossy/design-system'

export const Billing = ({
  title = 'Billing',
  subtitle = 'Manage your subscription and payment methods',
  currentPlan,
  paymentMethod,
  invoices = [],
  onChangePlanLink,
  onUpdatePaymentLink,
}) => {
  const defaultPlan = {
    name: 'Pro',
    price: '$29/month',
    status: 'active',
    nextBillingDate: 'March 18, 2026',
  }

  const defaultPayment = {
    type: 'card',
    last4: '4242',
    brand: 'Visa',
    expiry: '12/28',
  }

  const displayPlan = currentPlan || defaultPlan
  const displayPayment = paymentMethod || defaultPayment

  return (
    <div data-component="@ossy/pages/billing">
      <style href="@ossy/pages/billing" precedence="high">
        {`
          [data-component="@ossy/pages/billing"] {
            padding: var(--space-xl) var(--space-m);
            max-width: 800px;
            margin: 0 auto;
          }

          [data-component="@ossy/pages/billing"] .section {
            margin-bottom: var(--space-xxl);
          }

          [data-component="@ossy/pages/billing"] .plan-card,
          [data-component="@ossy/pages/billing"] .payment-card {
            padding: var(--space-xl);
            border-radius: var(--space-m);
            border: 1px solid var(--separator-primary);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: var(--space-m);
            margin-bottom: var(--space-m);
          }

          [data-component="@ossy/pages/billing"] .invoice-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--space-m) 0;
            border-bottom: 1px solid var(--separator-primary);
          }

          [data-component="@ossy/pages/billing"] .invoice-row:last-child {
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

      <div className="section">
        <Title variant="tertiary" as="h2" style={{ marginBottom: 'var(--space-m)' }}>
          Current plan
        </Title>
        <Card surface="primary" className="plan-card">
          <div>
            <Title variant="primary">{displayPlan.name}</Title>
            <Text variant="small" style={{ color: 'var(--foreground-secondary)' }}>
              {displayPlan.price} · {displayPlan.status}
            </Text>
            {displayPlan.nextBillingDate && (
              <Text variant="small" style={{ display: 'block', marginTop: 'var(--space-xs)' }}>
                Next billing: {displayPlan.nextBillingDate}
              </Text>
            )}
          </div>
          {onChangePlanLink && (
            <Button variant="secondary" {...onChangePlanLink}>
              Change plan
            </Button>
          )}
        </Card>
      </div>

      <div className="section">
        <Title variant="tertiary" as="h2" style={{ marginBottom: 'var(--space-m)' }}>
          Payment method
        </Title>
        <Card surface="primary" className="payment-card">
          <div>
            <Text>
              {displayPayment.brand} •••• {displayPayment.last4}
            </Text>
            <Text variant="small" style={{ color: 'var(--foreground-secondary)' }}>
              Expires {displayPayment.expiry}
            </Text>
          </div>
          {onUpdatePaymentLink && (
            <Button variant="secondary" {...onUpdatePaymentLink}>
              Update
            </Button>
          )}
        </Card>
      </div>

      {invoices.length > 0 && (
        <div className="section">
          <Title variant="tertiary" as="h2" style={{ marginBottom: 'var(--space-m)' }}>
            Invoices
          </Title>
          <Card surface="primary" style={{ padding: 'var(--space-m)' }}>
            {invoices.map((inv, i) => (
              <div key={i} className="invoice-row">
                <div>
                  <Text>{inv.date || 'Mar 18, 2026'}</Text>
                  <Text variant="small" style={{ color: 'var(--foreground-secondary)' }}>
                    {inv.description || 'Pro plan'}
                  </Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-m)' }}>
                  <Text>{inv.amount || '$29.00'}</Text>
                  {inv.downloadLink && (
                    <Button variant="link" {...inv.downloadLink}>
                      Download
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </Card>
        </div>
      )}
    </div>
  )
}
