import React from 'react'
import { Title, Button, Text, View } from "@ossy/design-system"

export const Footer = ({
  columns = [],
}) => {
  return (
    <View layout="row" placeContent="normal space-between" gap="xl" className="footer">

      <style href="@ossy/design-system-extras/footer" precedence="high" >
        {`
          .footer {
            padding: var(--space-s);
          }

          .footer .title {
            margin-bottom: var(--space-m);
          }

          .footer .list {
            padding: 0;
          }

          .footer .list-item {
            list-style: none;
          }
        `}
      </style>

      {
        columns.map(column => (
          <div style={{ maxWidth: `var(--max-width-${column.maxWidth}, 100%)` }}>
            <Title as="h3" variant="tertiary" className="title" style={{ color: 'var(--color-primary)'}}>
              {column.title}
            </Title>
            {
              !!column.text && <Text style={{ color: 'var(--color-primary)'}}>{column.text}</Text>
            }
            {
              !!column.list && (
                <ul className="list" key={column.title}>
                  {
                    column.list.map(({ label, ...anchorProps }) => (
                      <li className="list-item" key={label}>
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
