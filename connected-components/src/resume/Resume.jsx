import React from 'react'
import { Resume as _Resume } from '@ossy/design-system-extras'
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
