import React from 'react'
import { ProfileCard } from './ProfileCard.jsx'

export default {
  title: 'Display/ProfileCard',
  component: ProfileCard,
  parameters: {
   layout: 'fullscreen',
 },
}

const Story = props => {

  return (
    <ProfileCard {...props}/>
  )
}

export const Default = Story.bind({})
Default.args = {
  name: 'John Doe',
  role: 'Software Engineer',
  image: 'https://d1yuixo7x29bj4.cloudfront.net/36zDqF0TKZZ5KkJdyg7NH/rJ2RHNDMS1tSw6-Akz1D8.jpeg',
  summary: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed id arcu arcu. Suspendisse orci sapien, accumsan eu turpis a,
    tristique pretium est. Cras tempor sagittis iaculis.
    Vestibulum congue ullamcorper odio vel varius.
    Etiam ornare volutpat leo quis pretium.
    Vestibulum eu tincidunt est.
    Nunc id quam at lectus condimentum laoreet ac nec nibh. Aenean a tortor hendrerit,
    congue lectus sit amet, condimentum sem.

    Mauris vitae dui massa. In sed dignissim elit. Nunc viverra tempus ante,
    facilisis aliquet augue sagittis vel.
    Morbi convallis dolor nec urna mollis, et auctor nisl bibendum.
    Vivamus eget ornare justo. Morbi ut malesuada augue,
    vitae luctus felis. Pellentesque egestas quam ut ante mattis,
    ut viverra dolor sodales.
  `,
  tags: ['JavaScript', 'TypeScript', 'React', 'Angular'],
  links: [
    {
      icon: 'Call',
      label: '+46 072 11 11',
    },
    {
      icon: 'Email',
      label: 'john.doe@example.com',
    },
    {
      icon: 'Website',
      label: 'GitHub',
      href: 'https://github.com'
    }
  ],
  translations: {
    tags: 'Experience with',
  },
}
