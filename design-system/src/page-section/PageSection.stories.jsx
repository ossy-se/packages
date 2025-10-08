import React from 'react'
import { PageSection } from './PageSection.jsx'

export default {
  title: 'App/PageSection',
  component: PageSection,
};

const Story = props => (
  <PageSection {...props}>
    Hello I'm content, hi content I'm dad
  </PageSection>
);

export const Default = Story.bind({});
Default.args = {
  surface: 'primary',
  maxWidth: 'medium',
  as: 'section',
};
