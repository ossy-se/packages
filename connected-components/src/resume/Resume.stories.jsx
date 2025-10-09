import React from 'react'
import { WorkspaceProvider } from '@ossy/sdk-react'
import { Resume } from './Resume.jsx'

export default {
  title: 'Resume',
  component: Resume,
  args: { workspaceId: '36zDqF0TKZZ5KkJdyg7NH' },
  parameters: {
   layout: 'fullscreen',
 },
}

const Story = props => (
  <WorkspaceProvider workspaceId={props?.workspaceId}>
    <Resume {...props}/>
  </WorkspaceProvider>
)

export const Default = Story.bind({})
Default.args = {
  resumeId: ''
}
