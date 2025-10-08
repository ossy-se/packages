import React, { useState, useRef, useEffect } from 'react'
import { Overlay } from '../overlay/index.js'

export const Dropdown = ({
  trigger,
  children
}) => {
  const triggerRef = useRef(null)
  const contentRef = useRef(null)
  const overlayRef = useRef(null)
  const [position, setPosition] = useState({})
  const [isOpen, setIsOpen] = useState()

  const updateMenuPosition = () => {
    const triggerBoundingRect = triggerRef.current.getBoundingClientRect()
    const contentBoundingRect = contentRef.current.getBoundingClientRect()
    const overlayBoundingRect = overlayRef.current.getBoundingClientRect()

    const contentWidth = triggerBoundingRect.left + contentBoundingRect.width
    const clientWidth = overlayBoundingRect.width

    const horizontalPosition = contentWidth > clientWidth
      ? { right: clientWidth - triggerBoundingRect.right }
      : { left: triggerBoundingRect.left }

    setPosition({
      top: triggerBoundingRect.bottom,
      ...horizontalPosition
    })
  }

  useEffect(() => {
    isOpen && updateMenuPosition()
  }, [isOpen])

  return (
    <>
      <div onClick={() => setIsOpen(true)} ref={triggerRef}>
        {trigger}
      </div>
      <Overlay
        ref={overlayRef}
        isVisible={isOpen}
        onClose={() => setIsOpen(false)}
        style={{ backgroundColor: 'hsla(0, 0%, 0%, .1)'}}
      >
        <div
          ref={contentRef}
          onClick={() => setIsOpen(false)}
          style={{ display: 'inline-block', position: 'absolute', ...position }}
        >
          {children}
        </div>
      </Overlay>
    </>
  )
}
