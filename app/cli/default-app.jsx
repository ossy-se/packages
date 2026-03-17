import React from 'react'
import { App } from '@ossy/connected-components'
import pages from '%%@ossy/pages/source-file%%'

/**
 * App entry. Uses App from @ossy/connected-components with pages from src/pages.jsx.
 */
export default function DefaultApp(config) {
  return React.createElement(App, { ...config, pages })
}
