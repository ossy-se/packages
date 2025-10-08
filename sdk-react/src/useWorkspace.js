import { useCallback, useEffect, useMemo } from 'react'
import { useCache } from './Cache.jsx'
import { AsyncStatus } from './asyncStatus.js'
import { useSdk } from './useSdk.js'

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
    sdk.workspaces.byId(workspaceId)
      .then(workspace => setWorkspace({ data: workspace, status: AsyncStatus.Success }))
      .catch(() => setWorkspace({ status: AsyncStatus.Error, data: {} }))
  }, [sdk, workspaceId])

  const createApiToken = useCallback(
    description => sdk.workspaces.createApiToken(workspaceId, description)
      .then(({ id, token }) => {

        setWorkspace({
          status: workspaces.status,
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
    email => sdk.workspaces.inviteUser(workspaceId, email),
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
