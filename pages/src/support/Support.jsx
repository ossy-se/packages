import React from 'react'
import { Title, Text, Button } from '@ossy/design-system'

export const Support = ({
  title = 'Help & Support',
  subtitle = 'Find answers or get in touch',
  faqs = [],
  contactEmail,
  contactLink,
  documentationLink,
}) => {
  const defaultFaqs = [
    { question: 'How do I reset my password?', answer: 'Go to Settings > Security and click "Reset password". You\'ll receive an email with a link to set a new password.' },
    { question: 'How do I change my plan?', answer: 'Visit the Billing page to upgrade or downgrade your subscription. Changes take effect immediately.' },
    { question: 'How do I invite team members?', answer: 'Go to the Team page and enter their email address. They\'ll receive an invitation to join your workspace.' },
  ]

  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs

  return (
    <div data-component="@ossy/pages/support">
      <style href="@ossy/pages/support" precedence="high">
        {`
          [data-component="@ossy/pages/support"] {
            padding: var(--space-xl) var(--space-m);
            max-width: 800px;
            margin: 0 auto;
          }

          [data-component="@ossy/pages/support"] .faq-item {
            padding: var(--space-l) 0;
            border-bottom: 1px solid var(--separator-primary);
          }

          [data-component="@ossy/pages/support"] .faq-item:last-child {
            border-bottom: none;
          }

          [data-component="@ossy/pages/support"] .faq-question {
            margin-bottom: var(--space-s);
          }

          [data-component="@ossy/pages/support"] .contact-section {
            margin-top: var(--space-xxl);
            padding-top: var(--space-xxl);
            border-top: 1px solid var(--separator-primary);
            text-align: center;
          }

          [data-component="@ossy/pages/support"] .contact-actions {
            display: flex;
            gap: var(--space-m);
            justify-content: center;
            flex-wrap: wrap;
            margin-top: var(--space-m);
          }
        `}
      </style>

      <Title variant="display" style={{ marginBottom: 'var(--space-s)' }}>
        {title}
      </Title>
      <Text style={{ marginBottom: 'var(--space-xxl)' }}>
        {subtitle}
      </Text>

      <Title variant="tertiary" as="h2" style={{ marginBottom: 'var(--space-l)' }}>
        Frequently asked questions
      </Title>
      {displayFaqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <Title variant="tertiary" as="h3" className="faq-question">
            {faq.question}
          </Title>
          <Text variant="small" style={{ color: 'var(--foreground-secondary)' }}>
            {faq.answer}
          </Text>
        </div>
      ))}

      <div className="contact-section">
        <Title variant="tertiary" as="h2" style={{ marginBottom: 'var(--space-s)' }}>
          Still need help?
        </Title>
        <Text style={{ marginBottom: 'var(--space-m)' }}>
          {contactEmail ? `Reach out at ${contactEmail}` : "We're here to help."}
        </Text>
        <div className="contact-actions">
          {contactLink && (
            <Button variant="cta" {...contactLink}>
              Contact support
            </Button>
          )}
          {documentationLink && (
            <Button variant="secondary" {...documentationLink}>
              Documentation
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
