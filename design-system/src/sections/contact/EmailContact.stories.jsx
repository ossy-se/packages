import React from 'react'
import { EmailContact } from './EmailContact.jsx'

export default {
  title: 'App/Contact/Email Contact',
  component: EmailContact,
}

const Story = props => <EmailContact {...props}/>

export const Default = Story.bind({})
Default.args = {
  email: 'yourfriends@ossy.se'
}
