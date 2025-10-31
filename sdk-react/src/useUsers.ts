import { useCallback, useEffect, useMemo } from 'react'
import { useCache } from './Cache'
import { AsyncStatus } from './asyncStatus'
import { useSdk } from './useSdk'

export const useUsers = () => {
  const sdk = useSdk()
  const workspaceId = sdk.workspaceId
  const cachePath = useMemo(() => ['workspace', workspaceId, 'users'], [workspaceId])

  const {
    data: users = { status: AsyncStatus.NotInitialized, data: [] },
    set: setUsers
  } = useCache(cachePath)

  const load = useCallback(() => {
    setUsers({ status: AsyncStatus.Loading, data: [] })

    sdk.users.list()
      .then((users: any[]) => setUsers({ data: users, status: AsyncStatus.Success }))
      .catch(() => setUsers({ status: AsyncStatus.Error, data: [] }))

  }, [sdk])

  useEffect(() => {
    if (!workspaceId) return
    if (users.status === AsyncStatus.NotInitialized) {
      load()
    }
  }, [workspaceId, users])

  return {
    status: users.status,
    users: users.data,
    load,
  }

}
