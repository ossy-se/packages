import React from 'react'

export const asDragable = Component => ({
  dropEffect = 'move',
  format = 'text/plain',
  dragData,
  ...restProps
}) => {

  const onDragStart = event => {
    // eslint-disable-next-line no-param-reassign
    event.dataTransfer.dropEffect = dropEffect
    event.dataTransfer.setData(format, dragData)
  }

  return <Component
    draggable="true"
    onDragStart={onDragStart}
    {...restProps}
  />
}
