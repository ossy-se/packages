import React, { useState } from 'react'
import { Fields, applyFieldChange, FIELD_TYPES } from './index.js'

export default {
  title: 'Design System/Forms/Fields',
  component: Fields,
}

const shell = (story, initial = {}) => {
  const Shell = () => {
    const [data, setData] = useState(initial)
    return (
      <div style={{ maxWidth: 480, fontFamily: 'system-ui, sans-serif' }}>
        {story(data, e => setData(prev => applyFieldChange(prev, e)))}
        <pre
          style={{
            marginTop: 20,
            padding: 12,
            background: '#f4f4f5',
            borderRadius: 8,
            fontSize: 12,
            overflow: 'auto',
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    )
  }
  return <Shell />
}

export const AllAllowedTypes = () =>
  shell((data, onChange) => (
    <>
      <p style={{ fontSize: 14, color: '#555', marginBottom: 16 }}>
        Allowed API types: {FIELD_TYPES.join(', ')}
      </p>
      <Fields
        data={data}
        onChange={onChange}
        fields={[
          { name: 'Title', type: 'text', required: true },
          { name: 'Summary', type: 'textarea' },
          { name: 'Body', type: 'richtext' },
          { name: 'Count', type: 'number' },
          { name: 'Kind', type: 'select', options: ['A', 'B', 'C'] },
          { name: 'Tags', type: 'multiselect', options: ['x', 'y', 'z'] },
          { name: 'Hero', type: 'image' },
          { name: 'Published', type: 'boolean' },
          { name: 'Start date', type: 'date' },
        ]}
      />
    </>
  ), {
    Title: 'Example',
    Kind: 'B',
    Tags: ['x'],
    Published: false,
    'Start date': '2025-01-15',
  })

export const Text = () =>
  shell(
    (data, onChange) => (
      <Fields data={data} onChange={onChange} fields={[{ name: 'Label', type: 'text' }]} />
    ),
    { Label: 'Hello' },
  )

export const Textarea = () =>
  shell(
    (data, onChange) => (
      <Fields
        data={data}
        onChange={onChange}
        fields={[{ name: 'Notes', type: 'textarea' }]}
      />
    ),
    { Notes: 'Multi\nline' },
  )

export const Richtext = () =>
  shell(
    (data, onChange) => (
      <Fields data={data} onChange={onChange} fields={[{ name: 'Article', type: 'richtext' }]} />
    ),
    { Article: '# Heading\n\nParagraph.' },
  )

export const Number = () =>
  shell(
    (data, onChange) => (
      <Fields data={data} onChange={onChange} fields={[{ name: 'Amount', type: 'number' }]} />
    ),
    { Amount: 42 },
  )

export const Select = () =>
  shell(
    (data, onChange) => (
      <Fields
        data={data}
        onChange={onChange}
        fields={[{ name: 'Choice', type: 'select', options: ['One', 'Two', 'Three'] }]}
      />
    ),
    { Choice: 'Two' },
  )

export const MultiselectTags = () =>
  shell(
    (data, onChange) => (
      <Fields
        data={data}
        onChange={onChange}
        fields={[
          {
            name: 'Skills',
            type: 'multiselect',
            options: ['React', 'Design', 'Writing'],
          },
        ]}
      />
    ),
    { Skills: ['React', 'Custom skill'] },
  )

export const Image = () =>
  shell(
    (data, onChange) => (
      <Fields data={data} onChange={onChange} fields={[{ name: 'Cover', type: 'image' }]} />
    ),
    {},
  )

export const Boolean = () =>
  shell(
    (data, onChange) => (
      <Fields data={data} onChange={onChange} fields={[{ name: 'Agree', type: 'boolean' }]} />
    ),
    { Agree: true },
  )

export const Date = () =>
  shell(
    (data, onChange) => (
      <Fields data={data} onChange={onChange} fields={[{ name: 'Due', type: 'date' }]} />
    ),
    { Due: '2026-06-01' },
  )
