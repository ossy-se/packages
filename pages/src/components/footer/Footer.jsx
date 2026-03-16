import React from 'react'
import { Title, Button, Text, View } from "@ossy/design-system"

export const Footer = ({
  columns = [],
}) => {
  return (
    <View layout="row" placeContent="normal space-between" gap="xl">
      {
        columns.map(column => (
          <div style={{ maxWidth: `var(--max-width-${column.maxWidth}, 100%)` }}>
            <Title as="h3" variant="tertiary" style={{ marginBottom: 'var(--space-m)' }}>
              {column.title}
            </Title>
            {
              !!column.text && <Text>{column.text}</Text>
            }
            {
              !!column.list && (
                <ul key={column.title} style={{ padding: '0' }}>
                  {
                    column.list.map(({ label, ...anchorProps }) => (
                      <li key={label} style={{ listStyle: 'none' }}>
                        <Button variant="link" {...anchorProps} style={{ marginBottom: 'var(--space-m)' }}>
                          {label}
                        </Button>
                      </li>
                    ))
                  }
                </ul>
              )
            }
          </div>
        ))
      }
    </View>
  )
}
