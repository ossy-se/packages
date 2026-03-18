import React from 'react'
import { Title, Text, Button, View } from '@ossy/design-system'

export const Onboarding = ({
  title = 'Welcome!',
  subtitle = "Let's get you set up",
  steps = [],
  currentStep = 0,
  onNext,
  onBack,
  onSkip,
  completeLabel = 'Get started',
}) => {
  const defaultSteps = [
    { id: 'profile', title: 'Complete your profile', description: 'Add your name and avatar so your team can recognize you.' },
    { id: 'workspace', title: 'Create your workspace', description: 'Set up your first workspace to start collaborating.' },
    { id: 'invite', title: 'Invite your team', description: 'Bring your team on board to work together.' },
  ]

  const displaySteps = steps.length > 0 ? steps : defaultSteps
  const step = displaySteps[currentStep]
  const isLastStep = currentStep === displaySteps.length - 1

  return (
    <div data-component="@ossy/pages/onboarding">
      <style href="@ossy/pages/onboarding" precedence="high">
        {`
          [data-component="@ossy/pages/onboarding"] {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 70vh;
            padding: var(--space-xl) var(--space-m);
          }

          [data-component="@ossy/pages/onboarding"] .progress {
            display: flex;
            gap: var(--space-s);
            margin-bottom: var(--space-xxl);
          }

          [data-component="@ossy/pages/onboarding"] .progress-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--separator-primary);
            transition: background 0.2s;
          }

          [data-component="@ossy/pages/onboarding"] .progress-dot.active {
            background: var(--color-primary);
          }

          [data-component="@ossy/pages/onboarding"] .content {
            max-width: 480px;
            text-align: center;
            margin-bottom: var(--space-xxl);
          }

          [data-component="@ossy/pages/onboarding"] .actions {
            display: flex;
            gap: var(--space-m);
            justify-content: center;
            flex-wrap: wrap;
          }
        `}
      </style>

      <div className="progress">
        {displaySteps.map((_, i) => (
          <div
            key={i}
            className={`progress-dot ${i <= currentStep ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="content">
        <Title variant="display" style={{ marginBottom: 'var(--space-s)' }}>
          {step?.title || title}
        </Title>
        <Text style={{ color: 'var(--foreground-secondary)' }}>
          {step?.description || subtitle}
        </Text>
      </div>

      <div className="actions">
        {currentStep > 0 && onBack && (
          <Button variant="secondary" onClick={onBack}>
            Back
          </Button>
        )}
        {onSkip && !isLastStep && (
          <Button variant="link" onClick={onSkip}>
            Skip
          </Button>
        )}
        <Button
          variant="cta"
          onClick={() => onNext?.(isLastStep ? 'complete' : currentStep + 1)}
        >
          {isLastStep ? completeLabel : 'Next'}
        </Button>
      </div>
    </div>
  )
}
