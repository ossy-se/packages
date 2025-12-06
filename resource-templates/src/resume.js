export const ResumeTemplates = [
  {
    name: 'Resume Experience',
    id: 'resume-experience',
    fields: [
      {
        name: 'Title',
        type: 'text',
      },
      {
        name: 'Sub Title',
        type: 'text'
      },
      {
        name: 'Date',
        type: 'text'
      },
      {
        name: 'Description',
        type: 'textarea'
      },
      {
        name: 'Type of experience',
        type: 'select',
        options: [
          'Work',
          'Education',
          'Other',
          'Project'
        ]
      },
      {
        name: 'Website',
        type: 'text'
      },
      {
        name: 'Tags',
        type: 'text'
      },
      {
        name: 'GitHub',
        type: 'text'
      }
    ]
  },
  {
    name: 'Resume Summary',
    id: 'resume-summary',
    fields: [
      {
        name: 'Name',
        type: 'text'
      },
      {
        name: 'Role',
        type: 'text'
      },
      {
        name: 'Summary',
        type: 'textarea'
      },
      {
        name: 'Mobile',
        type: 'text'
      },
      {
        name: 'Email',
        type: 'text'
      },
      {
        name: 'Website',
        type: 'text'
      },
      {
        name: 'Tags',
        type: 'textarea'
      }
    ]
  }
]
