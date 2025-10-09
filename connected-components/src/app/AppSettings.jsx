
import { useContext } from 'react'
import { AppContext } from './App.jsx'

export const useAppSettings = () => useContext(AppContext)

export function defaultAppSettings() {
    return {
      workspaceId: undefined,
      defaultLanguage: undefined,
      supportedLanguages: [],
      theme: undefined,
      themes: undefined,
      routes: [],
      initialEntries: [],
      initialIndex: 0,
      router: 'browser',
      gaId: undefined,
      apiUrl: undefined,
      devMode: false
    }
  }