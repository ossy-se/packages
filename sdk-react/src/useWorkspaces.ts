import { useCallback, useEffect } from 'react'
import { useCache } from './Cache'
import { AsyncStatus } from './asyncStatus'
import { useSdk } from './useSdk'

const cachePath = ['workspaces']

export const useWorkspaces = () => {
  const sdk = useSdk()

  const {
    set: setWorkspaces,
    data: workspaces = { status: AsyncStatus.NotInitialized, data: [], error: null }
  } = useCache(cachePath)

  const loadWorkspaces = useCallback(() => {
    setWorkspaces({ status: AsyncStatus.Loading, data: [], error: null })
    sdk.workspaces.list()
      .then((workspaces: any[]) => setWorkspaces({ status: AsyncStatus.Success, data: workspaces, error: null }))
      .catch((err: unknown) => setWorkspaces({
        status: AsyncStatus.Error,
        data: [],
        error: err instanceof Error ? err : new Error(String(err))
      }))
  }, [sdk, setWorkspaces])

  const createWorkspace = useCallback(
    (name: string) => sdk.workspaces.create({ name })
      .then((workspace: any) => {
        setWorkspaces((prev: { status: string; data: any[]; error: Error | null } | undefined) => ({
          status: prev?.status ?? AsyncStatus.NotInitialized,
          data: [...(prev?.data ?? []), workspace],
          error: prev?.error ?? null
        }))
        return workspace
      }),
    [sdk, setWorkspaces]
  )

  useEffect(() => {
    if (workspaces.status === AsyncStatus.NotInitialized) {
      loadWorkspaces()
    }
  }, [workspaces, loadWorkspaces])

  return {
    status: workspaces.status,
    workspaces: workspaces.data,
    error: workspaces.error ?? null,
    loadWorkspaces,
    createWorkspace
  }
}
