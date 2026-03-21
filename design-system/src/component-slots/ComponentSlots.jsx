import React, { createContext, useContext, useMemo } from 'react'

const ComponentSlotsContext = createContext(null)

/**
 * Nested providers shallow-merge: inner `slots` override keys from the parent map.
 *
 * @param {{ slots?: Record<string, import('react').ComponentType<any> | null | undefined>, children: import('react').ReactNode }} props
 */
export function ComponentSlotsProvider({ slots, children }) {
  const parent = useContext(ComponentSlotsContext)
  const value = useMemo(() => {
    const local = slots ?? {}
    if (!parent) {
      return { slots: local }
    }
    return { slots: { ...parent.slots, ...local } }
  }, [parent, slots])
  return (
    <ComponentSlotsContext.Provider value={value}>
      {children}
    </ComponentSlotsContext.Provider>
  )
}

/**
 * Returns the component for `name` from the nearest provider map, or `undefined` if
 * there is no provider, the key is missing, or the value is explicitly `undefined`.
 * A value of `null` is returned as-is (slot intentionally empty).
 *
 * @param {string} name
 * @returns {import('react').ComponentType<any> | null | undefined}
 */
export function useComponentSlot(name) {
  const ctx = useContext(ComponentSlotsContext)
  if (!ctx) {
    return undefined
  }
  if (!Object.prototype.hasOwnProperty.call(ctx.slots, name)) {
    return undefined
  }
  return ctx.slots[name]
}

/** @type {typeof ComponentSlotsProvider} */
export const ComponentsProvider = ComponentSlotsProvider

/**
 * @param {string} slotKey
 * @returns {import('react').ComponentType<any> | null | undefined}
 */
export function useSlot(slotKey) {
  return useComponentSlot(slotKey)
}
