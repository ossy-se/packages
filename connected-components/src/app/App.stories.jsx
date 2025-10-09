import React from 'react'
import { App } from './App.jsx'
import { Ossy } from '@ossy/themes'

export default {
  title: 'App',
  component: App,
  
}

const Story = props => <></>

export const Default = Story.bind({})
Default.args = {
  workspaceId: '',
  theme: Ossy,
  routes: [
    {
    path: '/',
    element: (
      <>
        <a href="/test">Click me</a>
        <a href="test">me me me</a>
        <a href="localhost">No click me</a>
        <a href="https://www.google.com" target="_blank">External with target</a>
        <a href="http://www.google.com">External http link!</a>
        <a href="https://www.google.com">External https link!</a>
      </>
    )
  },
  {
    path: '/test',
    element: <>test </>
  }
  ]
}
