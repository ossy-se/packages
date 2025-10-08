import React from 'react'
import { Card, Button, PageSection } from "@ossy/design-system"

export const CardSidebar = ({
  surface = 'primary',
  layout = 'off-center-m',
  navigation = [],
  cardVariant,
  cardSurface,
  header,
  children,
  content,
  ...props
}) => {
  return (
    <PageSection
      layout={layout}
      surface={surface}
      {...props}
    >
      {header}
      <Card
        variant={cardVariant}
        surface={cardSurface}
        slot="content"
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '0',
        }}
      >
        <div style={{
          display: 'flex',
          gap: 'var(--space-s)',
          padding: 'var(--space-l) var(--space-s)',
          flexDirection: 'column',
          width: '180px',
          borderRight: '1px solid var(--separator-primary)',
        }}>
          { navigation.map(action => ( <Button {...action} style={{ justifyContent: 'flex-start' }}/> )) }
        </div>
        <div style={{ flexGrow: '1', padding: 'var(--space-l)', overflowY: 'auto' }}>
          { content ?? children }
        </div>
      </Card>
    </PageSection>
  )
}
