import React, {
  useState,
  useRef,
  useId,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react'
import { createPortal } from 'react-dom'

function mergeRefs (...refs) {
  return (node) => {
    refs.forEach((ref) => {
      if (ref == null) return
      if (typeof ref === 'function') ref(node)
      else ref.current = node
    })
  }
}

export const Dropdown = ({
  trigger,
  children
}) => {
  const triggerRef = useRef(null)
  const [isOpen, setIsOpen] = useState()
  const [portalRoot, setPortalRoot] = useState(null)
  const anchorName = `--ossy-dropdown-${useId().replace(/:/g, '')}`

  useEffect(() => {
    setPortalRoot(document.body)
  }, [])

  useLayoutEffect(() => {
    const el = triggerRef.current
    if (!el) return
    el.style.setProperty('anchor-name', anchorName)
    return () => el.style.removeProperty('anchor-name')
  }, [anchorName])

  const setContentRef = useCallback((node) => {
    if (!node) return
    node.style.setProperty('position', 'fixed')
    node.style.setProperty('position-anchor', anchorName)
    node.style.setProperty('top', 'anchor(bottom)')
    node.style.setProperty('left', 'anchor(left)')
    node.style.setProperty('display', 'inline-block')
    node.style.setProperty('z-index', '101')
  }, [anchorName])

  if (!React.isValidElement(trigger)) {
    throw new Error(
      'Dropdown `trigger` must be a single React element (e.g. `<Button />`).'
    )
  }

  if (trigger.type === React.Fragment) {
    throw new Error(
      'Dropdown `trigger` cannot be a Fragment; pass one element such as `<Button />`.'
    )
  }

  const triggerRefFromProps = trigger.props?.ref ?? trigger.ref
  const mergedRef = mergeRefs(triggerRef, triggerRefFromProps)

  const triggerNode = React.cloneElement(trigger, {
    ref: mergedRef,
    onClick: (event) => {
      trigger.props.onClick?.(event)
      setIsOpen(true)
    },
  })

  return (
    <>
      {triggerNode}
      {isOpen && portalRoot && createPortal(
        <>
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              backgroundColor: 'hsla(0, 0%, 0%, .1)',
            }}
            onClick={() => setIsOpen(false)}
            aria-hidden
          />
          <div
            ref={setContentRef}
            onClick={() => setIsOpen(false)}
          >
            {children}
          </div>
        </>,
        portalRoot
      )}
    </>
  )
}
