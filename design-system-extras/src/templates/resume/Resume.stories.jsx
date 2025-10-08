import React from 'react'
import { Resume } from './Resume.jsx'

export default {
  title: 'Design System Extras/Templates/Resume',
  component: Resume,
  parameters: {
   layout: 'fullscreen',
 },
}

const Story = props => {

  return (
    <Resume {...props}/>
  )
}

export const Default = Story.bind({})
Default.args = {
  status: 'Success',
  actions: [
    {
      variant: 'neutral',
      label: 'Theme: light',
      contextMenu: [
        { label: 'EN', onClick: () => console.log('EN') },
        { label: 'SV', onClick: () => console.log('SV') },
      ]
    },
    {
      variant: 'neutral',
      label: 'EN',
      contextMenu: [
        { label: 'EN', onClick: () => console.log('EN') },
        { label: 'SV', onClick: () => console.log('SV') },
      ]
    },
    {
      variant: 'cta',
      label: 'View in Google Drive',
      href: '',
      target: '_blank'
    }
  ],
  translations: {
    tags: 'Experience with',
    work: 'Work',
    projects: 'Projects',
    education: 'Education',
    other: 'Other',
    download: 'Download',
    all: 'All',
  },
  profile: {
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
        label: '+46 072 11 11'
      },
      {
        icon: 'Email',
        label: 'john.doe@example.com'
      },
      {
        icon: 'Website',
        label: 'https://github.com'
      },
    ]
  },
  experiences: [
    {
      title: 'Small undertaking',
      'Sub Title': 'Software Engineer',
      date: 'Jan 2017',
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
      typeOfExperience: 'Work',
      tags: ['JavaScript', 'Angular']
    },
    {
      title: 'Foo Company',
      'Sub Title': 'Software Engineer',
      date: '2022 - 2023',
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
      typeOfExperience: 'Work',
      tags: ['JavaScript', 'Angular']
    },
    {
      title: 'Bar Company',
      'Sub Title': 'Software Engineer',
      date: '2018 - 2019',
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
      typeOfExperience: 'Work',
      tags: ['JavaScript', 'React']
    },
    {
      title: 'Baz Company',
      'Sub Title': 'Software Engineer',
      date: '2019 - 2021',
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
      typeOfExperience: 'Work',
      tags: ['TypeScript', 'Angular']
    },
    {
      title: 'Project Baz',
      'Sub Title': 'Fun little side project',
      date: 'Apr 2019',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed id arcu arcu. Suspendisse orci sapien, accumsan eu turpis a,
        tristique pretium est. Cras tempor sagittis iaculis.
      `,
      typeOfExperience: 'Project',
      tags: ['TypeScript', 'Angular'],
      gitHub: "https://github.com",
      website: "https://ossy.se"
    },
    {
      title: 'Project with a longer name',
      'Sub Title': 'Way too big of an undertaking',
      date: 'Jan 2020',
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
      typeOfExperience: 'Project',
      tags: ['TypeScript', 'Angular'],
      gitHub: "https://github.com",
      website: "https://ossy.se"
    },
    {
      title: 'Upper secondary school',
      'Sub Title': 'It program',
      date: '2016 - 2018',
      description: `
        Nunc id quam at lectus condimentum laoreet ac nec nibh. Aenean a tortor hendrerit,
        congue lectus sit amet, condimentum sem.
      `,
      typeOfExperience: 'Education',
      tags: ['TypeScript', 'JavaScript', 'React']
    },
    {
      title: 'A good course',
      'Sub Title': 'I learned a lot',
      date: 'Feb 2021',
      description: `
        Nunc id quam at lectus condimentum laoreet ac nec nibh. Aenean a tortor hendrerit,
        congue lectus sit amet, condimentum sem.
      `,
      typeOfExperience: 'Education',
      tags: ['TypeScript', 'JavaScript', 'React']
    },
    {
      title: 'School',
      'Sub Title': 'It was boring',
      date: '2000 - 2008',
      description: `
        Nunc id quam at lectus condimentum laoreet ac nec nibh. Aenean a tortor hendrerit,
        congue lectus sit amet, condimentum sem.
      `,
      typeOfExperience: 'Education'
    },
    {
      title: 'I like rocks',
      'Sub Title': 'Wanna see my rock collection?',
      date: '2024',
      description: `
        Nunc id quam at lectus condimentum laoreet ac nec nibh. Aenean a tortor hendrerit,
        congue lectus sit amet, condimentum sem.
      `,
      typeOfExperience: 'Other'
    }
  ]
}
