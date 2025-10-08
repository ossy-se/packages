import React from 'react'
import { Title } from '../../title'
import { Button } from '../../button'
import { Text } from '../../text'

export const Footer = ({
  columns = [],
  gap = 'm',
}) => {
  return (
    <div data-footer>

      <style>
      {`
        [data-footer] {
          display: flex;
          flex-wrap: wrap;
          align-ems: flex-start;
          justify-content: space-between;
          gap: var(--space-${gap});
          padding: var(--space-s);
        }

        [data-footer] .title {
          marginBottom: var(--space-m)'
        }

        [data-footer] .list {
          padding: 0;
        }

        [data-footer] .list-item {
          list-style: none;
        }
      `}
      </style>

      {
        columns.map(column => (
          <div style={{
            flexBasis: `calc(calc(100% / ${columns.length}) - var(--space-${gap}))`,
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div>
              <Title variant="secondary" className="title">{column.title}</Title>
              {
                !!column.body && <Text>{column.body}</Text>
              }
              {
                !!column.list && (
                  <ul className="list" key={column.title}>
                    {
                      column.list.map(actionProps => (
                        <li className="list-item" key={actionProps.key || actionProps.label}>
                          <Button variant="link" {...actionProps} style={{ marginBottom: 'var(--space-m)'}} />
                        </li>
                      ))
                    }
                  </ul>
                )
              }
            </div>
          </div>

        ))
      }
    </div>
  )
}
