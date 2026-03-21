import React from 'react'
import {
  ComponentsProvider,
  useSlot,
  ComponentSlotsProvider,
  useComponentSlot,
} from './ComponentSlots.jsx'

export default {
  title: 'Design System/Base/Component slots',
  component: ComponentsProvider,
}

const DemoBanner = () => (
  <div
    style={{
      padding: '12px 16px',
      borderRadius: 8,
      background: 'var(--surface-secondary, #e8eef5)',
      font: '14px/1.4 system-ui, sans-serif',
    }}
  >
    Slot content: <strong>DemoBanner</strong>
  </div>
)

const SlotPanel = ({ slotKey = 'demo.banner' }) => {
  const SlotComponent = useSlot(slotKey)
  if (SlotComponent === null) {
    return (
      <p style={{ margin: 0, color: 'var(--text-muted, #666)', font: '14px system-ui' }}>
        Slot <code>{slotKey}</code> is explicitly empty (<code>null</code>).
      </p>
    )
  }
  if (SlotComponent === undefined) {
    return (
      <p style={{ margin: 0, font: '14px system-ui' }}>
        No component for <code>{slotKey}</code> — using fallback.
      </p>
    )
  }
  return <SlotComponent />
}

/** Registered slot renders the component from the provider map. */
export const WithRegisteredSlot = () => (
  <ComponentsProvider slots={{ 'demo.banner': DemoBanner }}>
    <SlotPanel />
  </ComponentsProvider>
)

/** `useSlot` returns `undefined` when the key is missing; app code can branch to defaults. */
export const MissingSlotFallback = () => (
  <ComponentsProvider slots={{}}>
    <SlotPanel />
  </ComponentsProvider>
)

/** `null` in the map means “intentionally no UI” for that slot. */
export const ExplicitNullSlot = () => (
  <ComponentsProvider slots={{ 'demo.banner': null }}>
    <SlotPanel />
  </ComponentsProvider>
)

const OuterBanner = () => (
  <div
    style={{
      padding: '12px 16px',
      borderRadius: 8,
      background: '#dbeafe',
      font: '14px system-ui',
    }}
  >
    Outer provider
  </div>
)

const InnerBanner = () => (
  <div
    style={{
      padding: '12px 16px',
      borderRadius: 8,
      background: '#fef3c7',
      font: '14px system-ui',
    }}
  >
    Inner provider (overrides outer)
  </div>
)

/** Nested providers shallow-merge; inner `slots` win on key collision. */
export const NestedProvidersOverride = () => (
  <ComponentsProvider slots={{ 'demo.banner': OuterBanner, 'demo.footer': DemoBanner }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <p style={{ margin: 0, font: '14px system-ui' }}>
        Outside inner provider — banner from outer:
      </p>
      <SlotPanel />
      <ComponentsProvider slots={{ 'demo.banner': InnerBanner }}>
        <p style={{ margin: 0, font: '14px system-ui' }}>
          Inside inner provider — same key overridden:
        </p>
        <SlotPanel />
        <p style={{ margin: 0, font: '14px system-ui' }}>
          Footer still from outer (not touched by inner):
        </p>
        <SlotPanel slotKey="demo.footer" />
      </ComponentsProvider>
    </div>
  </ComponentsProvider>
)

const LegacyPanel = () => {
  const C = useComponentSlot('demo.banner')
  if (!C) {
    return <p style={{ margin: 0, font: '14px system-ui' }}>Legacy hook: no slot</p>
  }
  return <C />
}

/** `ComponentSlotsProvider` and `useComponentSlot` behave the same as the aliases. */
export const LegacyApiMatches = () => (
  <ComponentSlotsProvider slots={{ 'demo.banner': DemoBanner }}>
    <LegacyPanel />
  </ComponentSlotsProvider>
)
