import React, { cloneElement } from 'react'
import { asDragable } from './asDragable.jsx'
import { asDropZone } from './asDropZone.jsx'

export const DropZone = ({
  children,
  ...props
}) => {
  const Component = asDropZone(props => cloneElement(children, props))
  return <Component {...props}/>
}

const Dragable = ({
  children,
  ...props
}) => {
  const Component = asDragable(props => cloneElement(children, props))
  return <Component {...props}/>
}

DropZone.Dragable = Dragable
