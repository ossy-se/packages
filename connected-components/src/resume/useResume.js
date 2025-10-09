import React, { useState, useEffect } from 'react'
import { useResources, useResource } from '@ossy/sdk-react'

const translations = {
  sv: {
    tags: 'Erfarenhet med',
    work: 'Arbete',
    projects: 'Projekt',
    education: 'Utbildning',
    other: 'Övrigt',
    download: 'Ladda ner',
    all: 'Alla'
  },
  en: {
    tags: 'Experience with',
    work: 'Work',
    projects: 'Projects',
    education: 'Education',
    other: 'Other',
    download: 'Download',
    all: 'All'
  }
}

const getProfile = resources => {
  const image = resources?.find(x => x.type.startsWith('image/'))
  const { id, content } = resources?.find(x => x.type === 'resume-summary') || { content: {} }

  const profile = {
    id: id,
    name: content.Name || content['Consultant Name'],
    role: content.Role,
    image: image?.content?.src,
    summary: content.Summary,
    tags: content?.Tags?.split(','),
    links: [],
  }

  content.Mobile && profile.links.push({
    icon: 'phone',
    label: content.Mobile,
    href: `tel:${content.Mobile}`,
    target: '_blank'
  })

  content.Email && profile.links.push({
    icon: 'mail',
    label: content.Email,
    href: `mailto:${content.Email}`
  })

  content.Website && profile.links.push({
    icon: 'globe-alt',
    label: content.Website.replace('https://', '').replace('http://', ''),
    href: content.Website,
    target: '_blank'
  })

  return profile

}

const getExperiences = resources => resources
  .filter(x => x.type === 'resume-experience')
  .map(resource => ({
    id: resource.id,
    title: resource.content.Title,
    subTitle: resource.content['Sub Title'],
    date: resource.content.Date,
    description: resource.content.Description,
    website: resource.content.Website,
    github: resource.content.GitHub,
    tags: resource.content?.Tags?.split(',')?.map(x => x.trim()).filter(x => !!x),
    typeOfExperience: resource.content['Type of experience']
  }))

  export const useMergeAsyncStatus = (...statuses) => {
    return statuses.reduce((acc, status) => {
  
  
      if (acc === 'Loading' || status === 'Loading' || status === 'NotInitialized') {
        return 'Loading'
      }
  
      if (acc === 'Error' || status === 'Error') {
        return 'Error'
      }
  
      if (acc === 'AuthenticationError' || status === 'AuthenticationError') {
        return 'AuthenticationError'
      }
  
      return 'Success'
  
    }, 'NotInitialized')
  }

export const location = '/@ossy/resumes/'

export const useResume = resumeId => {
  const resumeDirectory = useResource(resumeId)
  const resumeResources = useResources(resumeDirectory?.resource?.name ? (location + resumeDirectory?.resource?.name + '/') : undefined)

  const status = useMergeAsyncStatus(resumeDirectory.status, resumeResources.status)

  return {
    status,
    translations: translations.en,
    profile: getProfile(resumeResources.resources),
    experiences: getExperiences(resumeResources.resources),
  }
}
