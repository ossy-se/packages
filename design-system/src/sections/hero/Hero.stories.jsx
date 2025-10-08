import React from 'react'
import { Hero } from './Hero.jsx'

export default {
  title: 'Other/Hero/Hero',
  component: Hero,
}

const Story = props => (
  <Hero {...props} />
)

export const Default = Story.bind({})
Default.args = {
  title: 'Angular och React expertis. Design i hjärtat.',
  text: `
    Med expertis inom React & Angular,
    har jag en passion för att skapa webbapplikationer som inte bara är tekniskt avancerade,
    utan också estetiskt tilltalande.
    När min tekniska kunskap möter min kärlek till design,
    skapar jag lösningar som verkligen lyfter ditt företags digitala närvaro.
  `,
  actions: [
    { label: 'Kontakt', href: '#contact' },
    { label: 'Online CV', variant: 'cta', href: '/sv/resume' }
  ]
}
