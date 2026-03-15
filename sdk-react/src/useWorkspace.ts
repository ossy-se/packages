import { useCallback, useEffect } from 'react'
import { useCache } from './Cache'
import { AsyncStatus } from './asyncStatus'
import { useSdk } from './useSdk'

export const useWorkspace = (props?: { id: string }) => {
  const sdk = useSdk()
  const cachePath = ['workspace']

  const {
    data: workspace = { status: AsyncStatus.NotInitialized, data: {}, error: null },
    set: setWorkspace
  } = useCache(cachePath)

  const loadWorkspace = useCallback(() => {
    setWorkspace({ status: AsyncStatus.Loading, data: {}, error: null })
    
    const promise = props?.id
      ? sdk.workspaces.get({ id: props.id })
      : sdk.workspaces.current()

    promise
      .then((workspace: any) => setWorkspace({ data: workspace, status: AsyncStatus.Success, error: null }))
      .catch((err: unknown) => setWorkspace({
        status: AsyncStatus.Error,
        data: {},
        error: err instanceof Error ? err : new Error(String(err))
      }))
  }, [sdk, props?.id])

  const createApiToken = useCallback(
    (description: string) => sdk.workspaces.createApiToken({ description })
      .then(({ id, token }: { id: string, token: string }) => {
        setWorkspace((prev: { status: string; data: any; error: Error | null } | undefined) => ({
          status: prev?.status ?? AsyncStatus.NotInitialized,
          data: {
            ...(prev?.data ?? {}),
            apiTokens: [...(prev?.data?.apiTokens ?? []), { id, description }]
          },
          error: prev?.error ?? null
        }))
        return token
      }),
    [sdk, setWorkspace]
  )

  const inviteUser = useCallback(
    (email: string) => sdk.workspaces.inviteUser({ email }),
    [sdk]
  )

  useEffect(() => {
    if (workspace.status === AsyncStatus.NotInitialized) {
      loadWorkspace()
    }
  }, [workspace.status, loadWorkspace])

  return {
    status: workspace.status,
    workspace: workspace.data,
    error: workspace.error ?? null,
    loadWorkspace,
    createApiToken,
    inviteUser
  }
}
