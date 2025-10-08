import { useCallback, useEffect } from 'react'
import { useCache } from './Cache.jsx'
import { AsyncStatus } from './asyncStatus.js'
import { useSdk } from './useSdk.js'

const cachePath = ['workspaces']

export const useWorkspaces = () => {
  const sdk = useSdk()

  const {
    set: setWorkspaces,
    data: workspaces = { status: AsyncStatus.NotInitialized, data: [] }
  } = useCache(cachePath)

  const loadWorkspaces = useCallback(() => {
    setWorkspaces({ status: AsyncStatus.Loading, data: [] })
    sdk.workspaces.getAll()
      .then(workspaces => setWorkspaces({ status: AsyncStatus.Success, data: workspaces }))
      .catch(() => setWorkspaces({ status: AsyncStatus.Error, data: [] }))
  }, [sdk])

  const createWorkspace = useCallback(
    workspaceName => sdk.workspaces.create(workspaceName)
      .then(workspace => {

        setWorkspaces({
          status: workspaces.status,
          data: [...workspaces.data, workspace]
        })

        return workspace
      }),
    [sdk]
  )

  useEffect(() => {
    if (workspaces.status === AsyncStatus.NotInitialized) {
      loadWorkspaces()
    }
  }, [workspaces, loadWorkspaces])

  return {
    status: workspaces.status,
    workspaces: workspaces.data,
    loadWorkspaces,
    createWorkspace
  }
}
