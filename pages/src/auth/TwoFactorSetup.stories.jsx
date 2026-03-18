import React from 'react'
import { TwoFactorSetup } from './TwoFactorSetup.jsx'

export default {
  title: 'Pages/SaaS/Two-Factor Setup',
  component: TwoFactorSetup,
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
}

const Story = (props) => <TwoFactorSetup {...props} />

export const Setup = Story.bind({})
Setup.args = {
  enabled: false,
  onEnable: () => console.log('Enable 2FA'),
  onVerify: (code) => console.log('Verify', code),
}

export const Enabled = Story.bind({})
Enabled.args = {
  enabled: true,
  onDisable: () => console.log('Disable 2FA'),
}
