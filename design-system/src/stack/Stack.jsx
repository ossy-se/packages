import React from 'react'
import { View } from '..'

export const Stack = ({
  horizontal = false,
  bordered,
  className = '',
  layout,
  ...props
}) => (
  <>
    <style href="@ossy/design-system/stack" precedence='high' >
    {`
      [data-stack] .ossy-stack__item {
        flex-shrink: 0;
      }
      
      [data-stack] .ossy-stack__item[data-fill="true"] {
        flex: 1 1 auto;
      }
      
      [data-horizontal="false"][data-bordered="true"] > .ossy-stack__item {
        border-top: 1px solid var(--separator-primary);
      }
      
      [data-horizontal="false"][data-bordered="true"] > .ossy-stack__item:first-child {
        border-top: none;
      }
      
      [data-horizontal="true"][data-bordered="true"] > .ossy-stack__item {
        border-left: 1px solid var(--separator-primary);
      }
      
      [data-horizontal="true"][data-bordered="true"] > .ossy-stack__item:first-child {
        border-left: none;
      }
    `}
    </style>
    <View
      layout={layout || horizontal ? 'row' : 'column' } 
      data-horizontal={horizontal}
      data-bordered={bordered}
      data-stack
      {...props}
    />
  </>
)

export const StackItem = ({
  fill,
  className = '',
  ...props
}) => (
  <View
    layout='none'
    data-fill={fill}
    className={`ossy-stack__item ${className}`}
    {...props}
  />
)

Stack.Item = StackItem
