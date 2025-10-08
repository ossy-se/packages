import React, { Children, cloneElement } from 'react'

const renderChildren = children =>
  typeof children === 'function' ? children() : children

export const Switch = ({ on, children, ...rest }) =>
  Children.map(
    children,
    child => cloneElement(child, { on, ...rest })
  )

Switch.Case = ({ on, match = [], children }) =>
  match.includes(on) ? renderChildren(children) : <></>
