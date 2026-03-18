import React from 'react'
import { Billing } from './Billing.jsx'

export default {
  title: 'Pages/SaaS/Billing',
  component: Billing,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <Billing {...props} />

export const Default = Story.bind({})
Default.args = {
  onChangePlanLink: { href: '/pricing' },
  onUpdatePaymentLink: { href: '/billing/payment' },
}

export const WithInvoices = Story.bind({})
WithInvoices.args = {
  ...Default.args,
  invoices: [
    { date: 'Mar 18, 2026', description: 'Pro plan', amount: '$29.00', downloadLink: { href: '#' } },
    { date: 'Feb 18, 2026', description: 'Pro plan', amount: '$29.00', downloadLink: { href: '#' } },
  ],
}
