import React from 'react'
import { Button } from '../button'
import { View } from '../view'

/**
 * Tab interface
 * @typedef {Object} Tab
 * @property {string} id - Used to identify active tab
 * @property {string} label - Text that will show up in the tab
 */

export const Tabs = ({
  as = 'nav',
  tabs = [],
  activeTabId,
  variant = 'tab',
  onTabClick = () => {},
  gap,
  ...props
}) => (
  <View as={as} {...props} data-tabs>

    <style>
    {`
      [data-tabs] {
        margin: 0;
        padding: 0;
        boxSizing: border-box;
        height: 100%;
        whiteSpace: nowrap;
        background: transparent;
      }

      [data-tabs] ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        flex-wrap: no-wrap;
      }

      [data-tabs] li {
        list-style: none
      }

    `}
    </style>

    <View as="ul" gap={gap} layout="row">
      {
        tabs.map(tab => (
          <li key={tab.id}>
            <Button
              variant={tab.id === activeTabId ? `${variant}-active` : variant}
              onClick={e => onTabClick(e, tab)}
              {...tab}
            >
              {tab.label}
            </Button>
          </li>
        ))
      }
    </View>
  </View>
)
