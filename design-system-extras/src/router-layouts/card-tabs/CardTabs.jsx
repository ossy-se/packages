import React from 'react'
import { Card, Tabs, PageSection, View } from "@ossy/design-system"

export const CardTabs = ({
  surface = 'primary',
  layout = 'off-center',
  cardVariant = 'decorated',
  tabs = [],
  content,
  children,
  ...props
}) => {
  return (
    <PageSection
      layout={layout}
      surface={surface}
      {...props}
    >
      <View  style={{ height: '100%', background: 'var(--surface-linear-gradient)' }}>
        <Card variant={cardVariant} slot="content" style={{ width: '100vw', padding: '0' }}>
          <Tabs
            tabs={tabs}
            style={{
              height: 'auto',
              borderBottom: '1px solid var(--separator-primary)'
            }}
          />
          <div style={{ padding: 'var(--space-m)' }}>
            { content || children }
          </div>
        </Card>
      </View>
    </PageSection >
  )
}
