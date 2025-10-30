import { useContext } from 'react'
import { Context } from './WorkspaceProvider'

export function useSdk() {
    return useContext(Context).sdk
  }
  