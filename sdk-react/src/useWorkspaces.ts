import { useCallback, useEffect } from 'react'
import { useCache } from './Cache'
import { AsyncStatus } from './asyncStatus'
import { useSdk } from './useSdk'

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
      .then((workspaces: any[]) => setWorkspaces({ status: AsyncStatus.Success, data: workspaces }))
      .catch(() => setWorkspaces({ status: AsyncStatus.Error, data: [] }))
  }, [sdk])

  const createWorkspace = useCallback(
    (name: string) => sdk.workspaces.create(name)
      .then((workspace: any) => {

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
