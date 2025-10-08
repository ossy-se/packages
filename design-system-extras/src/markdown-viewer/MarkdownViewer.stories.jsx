import React from 'react'
import { MarkdownViewer } from './MarkdownViewer.jsx'

export default {
  title: 'Design System Extras/MarkdownViewer',
  component: MarkdownViewer,
}

const Story = props => <MarkdownViewer {...props} />

export const Default = Story.bind({})
Default.args = {
  children: `
    # Hello, this is an md doc

    Let's get started with some documentation

    ## Getting started

    \`\`\`javascript
    npm install @ossy/cms-client-react
    \`\`\`

    \`\`\`javascript
    import { WorkspaceProvider } from '@ossy/cms-client-react'

    export const App = () => (
      <WorkspaceProvider workspaceId={<yourWorkspaceId>}>
        {//...}
      </WorkspaceProvider>
    )
    \`\`\`
  `
}
