import React from 'react'
import { Resume as _Resume } from '@ossy/pages'
import { useResume } from './useResume.js'

export const Resume = ({
  resumeId,
  ...props
}) => {
  const resumeProps = useResume(resumeId)
  return resumeProps.status === 'Success'
    ? <_Resume {...resumeProps} profileCardVariant="resume" {...props}/>
    : <></>
}
