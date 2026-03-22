import React from 'react'
import { SDK } from '@ossy/sdk'
import { WorkspaceProvider } from '@ossy/sdk-react'
import { Theme } from '@ossy/design-system'
import { ThemeEditor } from '../theme-editor/ThemeEditor.jsx'
import { defaultAppSettings } from './AppSettings.jsx'
import { Router } from '@ossy/router-react'
import { AppContext } from './AppContext.js'
import { AppDocumentShell } from './AppDocumentShell.jsx'
import { mergeWithDefaultSystemPages } from './mergeWithDefaultSystemPages.js'

function routesToPages(routes) {
  if (!routes?.length) return []
  return routes.map((route, i) => {
    const path = typeof route.path === 'string' ? route.path : route.path?.en ?? '/'
    const id = route.id ?? (path === '/' ? 'home' : path.replace(/^\//, '').replace(/\/$/, '').replace(/\//g, '-') || `page-${i}`)
    return {
      id,
      path: route.path,
      element: route.element,
      render: route.render ?? (() => route.element),
    }
  })
}

export const App = (_appSettings) => {
  const appSettings = { ...defaultAppSettings(), ..._appSettings }
  let pages = appSettings.pages?.length
    ? appSettings.pages
    : routesToPages(appSettings.routes)
  pages = mergeWithDefaultSystemPages(pages, appSettings)

  const sdk = SDK.of({
    apiUrl: appSettings.apiUrl,
    workspaceId: appSettings.workspaceId
  })

  const tree = (
    <AppContext.Provider value={appSettings}>
      <Theme theme={appSettings.theme} themes={appSettings.themes}>
        <WorkspaceProvider sdk={sdk}>
          <Router {...appSettings} pages={pages} />
          {appSettings.devMode && <ThemeEditor />}
        </WorkspaceProvider>
      </Theme>
    </AppContext.Provider>
  )

  if (appSettings.includeDocumentShell === false) {
    return tree
  }

  return <AppDocumentShell appSettings={appSettings}>{tree}</AppDocumentShell>
}
