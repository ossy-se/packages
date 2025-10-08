import React from 'react'
import {
  Tabs,
  Header,
  Text,
  Page
} from "@ossy/design-system"
import { Footer } from './Footer.jsx'

export const StandardLayout = ({
  logo,
  headerActions,
  headerAccentBorder = true,
  navigation,
  maxWidth = 'medium',
  copyright,
  footer,
  children,
  ...props
}) => {

  const sections = [

    headerAccentBorder && {
      id: "accent-border",
      style: {
        height: '4px',
        position: 'sticky',
        zIndex: '10',
        top: '0',
        background: 'var(--separator-accent)'
      }
    },

    (logo || headerActions) && {
          id: "header",
          surface: "primary",
          style: {
            padding: 'var(--space-s) var(--space-l)',
            // borderBottom: '1px solid var(--separator-primary)',
            width: '100%',
          },
        render: () => <Header logo={logo} actions={headerActions} />
    },

    navigation && {
      id: "navigation",
      surface: "primary",
      style: {
        // borderBottom: '1px solid var(--separator-primary)',
        height: '55px',
        position: 'sticky',
        top: '4px',
        width: '100%',
        // boxShadow: '2px 2px 4px hsla(0, 0%, 0%, .1)',
        zIndex: '10'
      },
      render: () => <Tabs tabs={navigation} style={{ height: '100%'}}/>
    },

    {
      id: "outlet",
      as: "main",
      maxWidth: 'full',
      style: { gridArea: 'content' },
      render: () => children
    },

    footer && {
      id: "footer",
      surface: footer.surface,
      as: "footer",
      style: {
        padding: 'var(--space-xl) var(--space-m)'
      },
      render: () => <Footer columns={footer.columns} />
    },

    copyright && {
      id: "footer-section-copyright",
      surface: "alt-secondary",
      style: {
        padding: 'var(--space-m)',
        textAlign: 'center',
      },
      render: () => (
        <Text variant="small">
          {copyright}
        </Text>
      )
    }
  ].filter(x => !!x)

  return <Page maxWidth={maxWidth} sections={sections} {...props}/>
}
