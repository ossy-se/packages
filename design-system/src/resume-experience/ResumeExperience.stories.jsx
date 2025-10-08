import React from 'react'
import { ResumeExperience } from './ResumeExperience.jsx'

export default {
  title: 'Display/ResumeExperience',
  component: ResumeExperience,
}

const Story = props => {
  return (
    <ResumeExperience {...props} />
  )
}

export const Default = Story.bind({})

Default.args = {
  title: 'Oskars Sylwan AB',
  subTitle: 'Software developer',
  date: '2020 - present',
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed id arcu arcu. Suspendisse orci sapien, accumsan eu turpis a,
    tristique pretium est. Cras tempor sagittis iaculis.
    Vestibulum congue ullamcorper odio vel varius.
    Etiam ornare volutpat leo quis pretium.
    Vestibulum eu tincidunt est.
    Nunc id quam at lectus condimentum laoreet ac nec nibh. Aenean a tortor hendrerit,
    congue lectus sit amet, condimentum sem.
  `,
  website: 'https://ossy.se',
  github: 'https://github.com/ossy-se',
  tags: ['Angular', 'React', 'JavaScript', 'TypeScript'],
}
