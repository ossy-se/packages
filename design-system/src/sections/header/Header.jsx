import React from 'react'
import { Tabs } from '../../tabs/index.js'
import { Button } from '../../button'
import { Title } from '../../title'

export const Header = ({
  logo,
  actions = [],
  navigation = [],
  navigationVariant = 'link'
}) => {

  return (
    <div data-header>

      <style href="@ossy/design-system/header" precedence='high'>
      {`
        [data-header] {
          height: 100%;
          margin: 0,
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
          gap: 16px;
        }

        [data-header] [data-slot="logo"] {
          order: 1;
          display: flex;
          justify-content: center;
        }

        [data-header] [data-slot="navigation"] {
          order: 2;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        [data-header] [data-slot="actions"] {
          order: 3;
          display: flex;
          flex-shrink: 0;
          flex-grow: 1;
          justify-content: flex-end;
          gap: 8px;
        }

        @media (min-width: 450px) {

          [data-header] [data-slot="logo"] {
            justify-content: flex-start;
          }

          [data-header] [data-slot="actions"] {
          }
        }

      `}
      </style>

      <div data-slot="logo">
        { typeof logo !== 'string'
          ? logo
          : (
            <Title variant="logo">
              {logo}
            </Title>
        )}
      </div>

      <Tabs
        data-slot="navigation"
        variant={navigationVariant}
        tabs={navigation}
      />

      <div data-slot="actions">
        {actions.map(x => <Button {...x} /> )}
      </div>

    </div>
  )
}
