import React from 'react'
import { Guide } from './Guide.jsx'

export default {
  title: 'Feedback/Guide',
  component: Guide,
}

const Story = args => <Guide {...args} />

export const Default = Story.bind({})
Default.args = {
  title: 'Not Found',
  text: 'We could not find what you were looking for'
}

export const WithActions = Story.bind({})
WithActions.args = {
  title: 'Not Found',
  text: 'We could not find what you were looking for',
  actions: [
    {
      label: 'Click me!'
    },
    {
      label: 'Click me!',
      variant: 'cta'
    }
  ]
}

export const WithTitleVariantion = Story.bind({})
WithTitleVariantion.args = {
  title: 'Not Found',
  titleVariant: 'hero',
  text: 'We could not find what you were looking for',
  actions: [
    {
      label: 'Click me!'
    },
    {
      label: 'Click me!',
      variant: 'cta'
    }
  ]
}
