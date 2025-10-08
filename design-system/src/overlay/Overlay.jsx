import React, { useState, useEffect, forwardRef } from 'react'
import { createPortal } from 'react-dom'

const overlayRootId = 'ossy-overlay-root'

export const Overlay = forwardRef(({
  children,
  isVisible = false,
  onClose = () => {},
  ...props
}, ref) => {
  const [overlayRoot, setOverlayRoot] = useState()

  const onContentClick = event => {
    event.stopPropagation()
  }

  useEffect(() => {
    let overlayRoot = document.getElementById(overlayRootId)
    if (!!overlayRoot) return setOverlayRoot(overlayRoot)
    overlayRoot = document.createElement('div')
    overlayRoot.id = overlayRootId
    const body = document.querySelector('body')
    body.appendChild(overlayRoot)
    setOverlayRoot(overlayRoot)
  }, [])

  return (
    <>
      <style href="@ossy/design-system/overlay" precedence="high">
      {`
        [data-overlay] {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          background: hsla(0, 0%, 0%, .8);
          z-index: 100;
        }

        [data-overlay-content] {
          display: contents
        }

        @keyframes fade-in {
          0% { opacity: 0 }
          100% { opacity: 1 }
        }

        [data-animation="fade-in"] {
          animation-name: fade-in;
          animation-duration: .3s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          animation-timing-function: ease-out;
        }
      `}
      </style>
      {
        isVisible
        && !!overlayRoot
        && createPortal(
          <div ref={ref} onClick={onClose} data-overlay data-animation="fade-in" {...props}>
            <div onClick={onContentClick} data-overlay-content >
              {children}
            </div>
          </div>,
          overlayRoot
        )
      }
    </>
  )
})
