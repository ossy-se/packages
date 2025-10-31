import { useCallback, useEffect, useMemo } from 'react'
import { useCache } from './Cache'
import { AsyncStatus } from './asyncStatus'
import { useSdk } from './useSdk'

export const useWorkspace = () => {
  const sdk = useSdk()
  const workspaceId = sdk.workspaceId
  const cachePath = useMemo(() => ['workspace', workspaceId], [workspaceId])

  const {
    data: workspace = { status: AsyncStatus.NotInitialized, data: {} },
    set: setWorkspace
  } = useCache(cachePath)

  const loadWorkspace = useCallback(() => {
    setWorkspace({ status: AsyncStatus.Loading, data: {} })
    sdk.workspaces.current()
      .then((workspace: any) => setWorkspace({ data: workspace, status: AsyncStatus.Success }))
      .catch(() => setWorkspace({ status: AsyncStatus.Error, data: {} }))
  }, [sdk, workspaceId])

  const createApiToken = useCallback(
    (description: string) => sdk.workspaces.createApiToken({ description })
      .then(({ id, token }: { id: string, token: string }) => {

        setWorkspace({
          status: workspace.status,
          data: {
            ...workspace,
            apiTokens: [...workspace.apiTokens, { id, description }]
          }
        })

        return token
      }),
    [sdk]
  )

  const inviteUser = useCallback(
    (email: string) => sdk.workspaces.inviteUser({ email }),
    [sdk]
  )

  const enableService = () => {

  }

  const disabledService = () => {
    
  }

  useEffect(() => {
    if (!workspaceId) return
    if (workspace.status === AsyncStatus.NotInitialized) {
      loadWorkspace()
    }
  }, [workspaceId, workspace])

  return {
    status: workspace.status,
    workspace: workspace.data,
    loadWorkspace,
    createApiToken,
    inviteUser
  }
}
