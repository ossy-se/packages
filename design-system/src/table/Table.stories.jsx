import React from 'react'
import { Table } from './Table.jsx'

export default {
  title: 'Display/Table',
  component: Table,
  args: {
    activeTabId: 'English',
    header: [
      {
        label: 'Id',
        key: 'id'
      },
      {
        label: 'name',
        key: 'name'
      },
      {
        label: 'email',
        key: 'email'
      },
      {
        label: 'Preferred language',
        key: 'language'
      }
    ],
    data: [
      { id: '123122', email: 'user@example.com', name: 'John Doe', language: 'Português' },
      { id: '321333', email: 'user@example.com', name: 'John Doe', language: 'English' },
      { id: '312412', email: 'user@example.com', name: 'John Doe', language: 'Svenska' },
      { id: '123141', email: 'user@example.com', name: 'John Doe', language: 'Français' },
      { id: '123122', email: 'user@example.com', name: 'John Doe', language: 'Español' },
    ]
  },
}

const Story = props => <Table {...props} />

export const Default = Story.bind({})
Default.args = {}
