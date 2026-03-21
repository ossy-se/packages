import React from 'react'
import { Alert } from './Alert.jsx'

export default {
  title: 'Design System/Feedback/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'info', 'success', 'warning', 'danger'],
    },
  },
}

const Story = (args) => <Alert {...args} />

export const Neutral = Story.bind({})
Neutral.args = {
  variant: 'neutral',
  children: 'This is a neutral note for general context.',
}

export const Info = Story.bind({})
Info.args = {
  variant: 'info',
  title: 'Heads up',
  children: 'Your changes will apply after you save the workspace.',
}

export const Success = Story.bind({})
Success.args = {
  variant: 'success',
  title: 'Done',
  children: 'Profile updated successfully.',
}

export const Warning = Story.bind({})
Warning.args = {
  variant: 'warning',
  title: 'Attention',
  children: 'This action cannot be undone after 24 hours.',
}

export const Danger = Story.bind({})
Danger.args = {
  variant: 'danger',
  title: 'Error',
  children: 'We could not complete the request. Try again or contact support.',
}

const infoIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
)

export const WithIcon = Story.bind({})
WithIcon.args = {
  variant: 'info',
  icon: infoIcon,
  title: 'With icon',
  children: 'Pass any React node as icon — here an inline SVG.',
}
