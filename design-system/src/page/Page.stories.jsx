import React from 'react'
import { Page } from './Page.jsx'

export default {
  title: 'App/Page',
  component: Page,
}

const Story = props => <Page {...props} />

export const Default = Story.bind({})
Default.args = {
  sections: [
    {
      id: 'accent-border',
      surface: 'accent',
      style: {
        height: '4px',
        position: 'sticky',
        zIndex: '10',
        top: '0',
      },
      render: () => <></>,
    }
  ]
}
