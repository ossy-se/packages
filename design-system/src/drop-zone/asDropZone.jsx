import React from 'react'

// TODO: remove the need for className prop
// it causses ennying issues
export const asDropZone = Component => ({
  dropEffect = 'move',
  onDragOver = () => {},
  onDragEnter = () => {},
  onDragLeave = () => {},
  onDrop = () => {},
  format = 'text/plain',
  ...props
}) => {

  const _onDragOver = event => {
    event.preventDefault()
    // eslint-disable-next-line no-param-reassign
    event.dataTransfer.dropEffect = dropEffect
    onDragOver(event)
  }

  const _onDragEnter = event => {
    event.preventDefault()
    event.target.classList.add('dropzone--dragover')
    onDragEnter(event)
  }

  const _onDragLeave = event => {
    event.preventDefault()
    event.target.classList.remove('dropzone--dragover')
    onDragLeave(event)
  }

  const _onDrop = event => {
    event.preventDefault()
    event.target.classList.remove('dropzone--dragover')
    onDrop(event.dataTransfer.getData(format))
  }

  return (
    <>
      <style href="@ossy/design-system/dropzone" precedence="high">
      {`
        [data-dropzone].dropzone--dragover {
          outline: 1px solid hsl(199, 98%, 43%);
          position: relative;
        }

        [data-dropzone].dropzone--dragover:after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: hsla(199, 98%, 43%, .2);
        }
      `}
      </style>
      <Component
        onDragOver={_onDragOver}
        onDragEnter={_onDragEnter}
        onDragLeave={_onDragLeave}
        onDrop={_onDrop}
        data-dropzone
        {...props}
      />
    </>
  )
}
