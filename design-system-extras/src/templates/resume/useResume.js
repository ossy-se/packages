import React, { useState, useEffect } from 'react'

const categorizeExperiences = experiences => experiences.reduce((categories, exp) => {
  categories[exp.typeOfExperience || 'Other'].push(exp)
  return categories
}, { Work: [], Education: [], Project: [], Other: [] })

const experienceByDate = (a, b) => {
  const getDate = x => x?.date?.split(' - ')?.[0] || '1900'
  const dateA = new Date(getDate(a))
  const dateB = new Date(getDate(b))
  return dateB - dateA
}

export const useResume = (experiences = []) => {
  // Haram to do it in place I know,
  // but feels unneccecary to do it each time we filter them
  experiences.sort(experienceByDate)

  const [work, setWork] = useState([])
  const [education, setEducation] = useState([])
  const [project, setProject] = useState([])
  const [other, setOther] = useState([])
  const [activeTags, setActiveTags] = useState([])
  const [activeExperienceType, setActiveExperienceType] = useState()

  const tags = Object.keys(
    experiences
      .flatMap(x => x.tags)
      .filter(x => !!x)
      .reduce((acc, x) => ({ [x]: '', ...acc }), {})
  )

  const categories = Object.keys(
    experiences // get uniquie typeOfExperience
      .reduce((acc, x) => ({ [x.typeOfExperience]: '', ...acc }), {})
  )

  useEffect(() => {
    let filteredExperiences = experiences

    if (!!activeTags.length) {
      filteredExperiences = experiences.filter(experience => experience?.tags
        ?.map(x => x.toLowerCase())
        ?.some(tag => activeTags.map(x => x.toLowerCase()).includes(tag)))
    }

    if (!!activeExperienceType) {
      filteredExperiences = filteredExperiences
        .filter(x => x.typeOfExperience === activeExperienceType)
    }

    const categorizedExperiences = categorizeExperiences(filteredExperiences)
    setWork(categorizedExperiences.Work)
    setEducation(categorizedExperiences.Education)
    setProject(categorizedExperiences.Project)
    setOther(categorizedExperiences.Other)

  }, [activeTags, experiences, activeExperienceType])

  const toggleActiveExperienceType = type => {
    if (type === activeExperienceType) return
    setActiveExperienceType(type === 'All' ? undefined : type)
  }

  const toggleActiveTag = tag => {
    setActiveTags(tags => tags.includes(tag)
      ? tags.filter(x => x !== tag)
      : [...tags, tag]
    )
  }

  return {
    work,
    education,
    project,
    other,
    tags: [],
    categories,
    activeTags,
    toggleActiveTag,
    activeExperienceType,
    toggleActiveExperienceType
  }
}
