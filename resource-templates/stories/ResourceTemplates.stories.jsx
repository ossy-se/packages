import React, { useState } from 'react'
import {
  Fields,
  Form,
  Text,
  View,
  applyFieldChange,
} from '@ossy/design-system'
import { ResumeTemplates } from '@ossy/resource-templates'

function ResourceTemplateForm({ template }) {
  const [data, setData] = useState({})

  return (
    <View inset="m" style={{ maxWidth: 560 }}>
      <Text as="h2" style={{ marginBottom: 'var(--space-m, 1rem)' }}>
        {template.name}
      </Text>
      {template.description ? (
        <Text style={{ marginBottom: 'var(--space-s, 0.75rem)', opacity: 0.85 }}>
          {template.description}
        </Text>
      ) : null}
      <Form gap="m">
        <Fields
          data={data}
          onChange={e => setData(prev => applyFieldChange(prev, e))}
          fields={template.fields}
        />
      </Form>
    </View>
  )
}

/** @type { import('@storybook/react').Meta } */
const meta = {
  title: 'resource-templates/Forms',
  tags: ['autodocs'],
}

export default meta

/** Renders the same {@link Fields} + {@link Form} stack used for document create/edit in the Ossy apps. */
export const ResumeExperience = {
  name: 'Resume Experience',
  render: () => (
    <ResourceTemplateForm
      template={ResumeTemplates.find(t => t.id === 'resume-experience')}
    />
  ),
}

export const ResumeSummary = {
  name: 'Resume Summary',
  render: () => (
    <ResourceTemplateForm
      template={ResumeTemplates.find(t => t.id === 'resume-summary')}
    />
  ),
}
