import React, { createContext } from 'react'
import { SDK } from '@ossy/sdk'
import { WorkspaceProvider } from '@ossy/sdk-react'
import { Theme } from '@ossy/design-system'
import { ThemeEditor } from '../theme-editor/ThemeEditor.jsx'
import { defaultAppSettings } from './AppSettings.jsx'
import { Router } from '@ossy/router-react'

export const AppContext = createContext(defaultAppSettings())

export const useApp = () => React.useContext(AppContext)

export const App = (_appSettings) => {
  const appSettings = { ...defaultAppSettings(), ..._appSettings }

  const sdk = SDK.of({
    apiUrl: appSettings.apiUrl,
    workspaceId: appSettings.workspaceId
  })

  return (
    <AppContext.Provider value={appSettings}>
      <Theme theme={appSettings.theme} themes={appSettings.themes}>
        <WorkspaceProvider sdk={sdk}>
          <Router {...appSettings} />
          { appSettings.devMode && <ThemeEditor />}
        </WorkspaceProvider>
      </Theme>
    </AppContext.Provider>
  )
}
