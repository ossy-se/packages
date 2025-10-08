import { useContext } from 'react'
import { Context } from './WorkspaceProvider.jsx'

export function useSdk() {
    return useContext(Context).sdk
  }
  