import React from 'react'
import { View } from '../view'

export const PageSection = ({
  surface,
  maxWidth,
  surfaceAs = 'section',
  layout,
  placeItems,
  placeContent,
  gap,
  children,
  style = {},
  ...props
}) => {

  return (
    <>
      <style href='@ossy/design-system/page-section' precedence='high'>
        {`
          [data-page-section-alignment] {
            margin-left: auto;
            margin-right: auto;
            width: 100%;  
            height: 100%;
          }
        `}
      </style>
      <View
        surface={surface}
        as={surfaceAs}
        style={{ width: '100%', ...style }}
        {...props}
      >
        <View
          layout={layout}
          placeItems={placeItems}
          placeContent={placeContent}
          gap={gap}
          style={{ maxWidth: `var(--max-width-${maxWidth}, 100%)` }}
          data-page-section-alignment
        >
          {children}
        </View>
      </View>
    </>
  )
}
