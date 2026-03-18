import React, { useState } from 'react'
import { Onboarding } from './Onboarding.jsx'

export default {
  title: 'Pages/SaaS/Onboarding',
  component: Onboarding,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <Onboarding {...props} />

export const Default = Story.bind({})
Default.args = {
  onNext: (step) => console.log('Next', step),
  onBack: () => console.log('Back'),
  onSkip: () => console.log('Skip'),
}

const InteractiveStory = () => {
  const [step, setStep] = useState(0)
  return (
    <Onboarding
      currentStep={step}
      onNext={(next) => setStep(typeof next === 'number' ? next : 0)}
      onBack={() => setStep((s) => Math.max(0, s - 1))}
      onSkip={() => setStep(0)}
    />
  )
}

export const Interactive = InteractiveStory
