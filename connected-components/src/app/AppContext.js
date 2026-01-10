import React, { createContext } from 'react'
export const AppContext = createContext(defaultAppSettings())
export const useApp = () => React.useContext(AppContext)
export const useAppSettings = () => React.useContext(AppContext)