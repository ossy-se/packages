import React from 'react'
import { PageSection } from '../page-section'
import { View } from '../view'

export const Page = ({
  layout,
  sections = [],
  maxWidth: defaultMaxWidth,
  surface,
  style = {},
  children,
  ...props
}) => {
  return (
    <View layout={layout} surface={surface} style={style} {...props}>
      { sections.map(({
        render = () => {},
        maxWidth,
        slot,
        ...section
      }) => (
        <PageSection
          slot={slot}
          maxWidth={maxWidth || defaultMaxWidth}
          key={section.id}
          {...section}
        >
          {render(props)}
        </PageSection>
      )) }
      {children && children}
    </View>
  )
}
