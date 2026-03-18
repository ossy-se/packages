import React from 'react'
import { Pricing } from './Pricing.jsx'

export default {
  title: 'Pages/SaaS/Pricing',
  component: Pricing,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <Pricing {...props} />

export const Default = Story.bind({})
Default.args = {
  title: 'Simple, transparent pricing',
  subtitle: 'Choose the plan that fits your needs',
}

export const CustomPlans = Story.bind({})
CustomPlans.args = {
  title: 'Pick your plan',
  subtitle: 'All plans include a 14-day free trial',
  plans: [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Try it out',
      features: ['1 project', 'Basic support'],
      cta: { label: 'Get started', href: '/signup' },
      highlighted: false,
    },
    {
      id: 'team',
      name: 'Team',
      price: '$49',
      period: '/month',
      description: 'For growing teams',
      features: ['Unlimited projects', 'Priority support', 'Team features'],
      cta: { label: 'Start trial', href: '/signup' },
      highlighted: true,
    },
  ],
}
