import React from 'react'
import { SimpleFooter } from './SimpleFooter.jsx'

export default {
  title: 'Other/Footer/Simple',
  component: SimpleFooter,
  parameters: {
   layout: 'fullscreen',
 },
}

const Story = props => <SimpleFooter {...props}/>

export const Default = Story.bind({})
Default.args = {
  logo: <>logo</>,
  aboutUs: `
    Drivna av passion för teknik och innovation,
    är vi dedikerade till att erbjuda lösningar av högsta kvalitet.
    Med en stark tro på att rätt teknik kan förvandla affärslandskapet,
    är vi här för att bli er förlitade partner inom systemutveckling.
  `,
  legal: 'Copyright @ Oskars Sylwan AB',
  navigation: [
    {
      label: 'Start'
    },
    {
      label: 'About us'
    },
    {
      label: 'Contact'
    },
    {
      label: 'Services'
    }
  ]
}
