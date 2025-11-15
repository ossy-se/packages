import { useCallback, useEffect } from 'react'
import { useCache } from './Cache'
import { AsyncStatus } from './asyncStatus'
import { useSdk } from './useSdk'

export const useWorkspace = (props?: { id: string }) => {
  const sdk = useSdk()
  const cachePath = ['workspace']

  const {
    data: workspace = { status: AsyncStatus.NotInitialized, data: {} },
    set: setWorkspace
  } = useCache(cachePath)

  const loadWorkspace = useCallback(() => {
    setWorkspace({ status: AsyncStatus.Loading, data: {} })
    
    const promise = props?.id
      ? sdk.workspaces.get({ id: props.id })
      : sdk.workspaces.current()

    promise
      .then((workspace: any) => setWorkspace({ data: workspace, status: AsyncStatus.Success }))
      .catch(() => setWorkspace({ status: AsyncStatus.Error, data: {} }))
  }, [sdk])

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
    if (workspace.status === AsyncStatus.NotInitialized) {
      loadWorkspace()
    }
  }, [workspace])

  return {
    status: workspace.status,
    workspace: workspace.data,
    loadWorkspace,
    createApiToken,
    inviteUser
  }
}
