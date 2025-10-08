import React from 'react'
import { Card, View, PageSection } from "@ossy/design-system"

export const CardLayout = ({
  surface = 'primary',
  maxWidth = 'full',
  layout = 'off-center',
  cardVariant,
  cardSurface,
  header,
  children,
  content,
}) => (
  <PageSection surface={surface} maxWidth={maxWidth}>
    <View
      layout={layout}
      style={{ height: '100vh' }}
    >
      {header}
      <Card slot="content" variant={cardVariant} style={{ overflowY: 'auto' }} surface={cardSurface}>
        { content ?? children }
      </Card>
    </View>
  </PageSection>
)
