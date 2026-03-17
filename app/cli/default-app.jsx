import React from 'react'
import { App } from '@ossy/connected-components'
import pages from '%%@ossy/pages/source-file%%'

/**
 * Default page-centric app entry. Uses App from @ossy/connected-components
 * with pages from your src/pages.jsx. No App.jsx required.
 *
 * Export pages from src/pages.jsx:
 *   export default [
 *     { id: 'home', path: '/', element: <HomePage /> },
 *     { id: 'about', path: '/about', element: <AboutPage /> },
 *   ]
 */
export default function DefaultApp(config) {
  return React.createElement(App, { ...config, pages })
}
