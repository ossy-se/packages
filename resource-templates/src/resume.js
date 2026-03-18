/** @type {import('@ossy/types').ResourceTemplate[]} */
export const ResumeTemplates = [
  {
    id: 'resume-experience',
    name: 'Resume Experience',
    description: 'Work, education, or project experience entry',
    icon: 'briefcase',
    fields: [
      { name: 'Title', type: 'text', required: true },
      { name: 'Sub Title', type: 'text' },
      { name: 'Date', type: 'text' },
      { name: 'Description', type: 'textarea' },
      {
        name: 'Type of experience',
        type: 'select',
        options: ['Work', 'Education', 'Other', 'Project'],
      },
      { name: 'Website', type: 'text' },
      { name: 'Tags', type: 'text' },
      { name: 'GitHub', type: 'text' },
    ],
  },
  {
    id: 'resume-summary',
    name: 'Resume Summary',
    description: 'Personal summary and contact info',
    icon: 'user',
    fields: [
      { name: 'Name', type: 'text', required: true },
      { name: 'Role', type: 'text' },
      { name: 'Summary', type: 'textarea' },
      { name: 'Mobile', type: 'text' },
      { name: 'Email', type: 'text' },
      { name: 'Website', type: 'text' },
      { name: 'Tags', type: 'textarea' },
    ],
  },
]
