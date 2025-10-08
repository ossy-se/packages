import { useCallback, useEffect, useMemo } from 'react'
import { useCache } from './Cache.jsx'
import { AsyncStatus } from './asyncStatus.js'
import { useSdk } from './useSdk.js'

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

    sdk.workspaces.users()
      .then(users => setUsers({ data: users, status: AsyncStatus.Success }))
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
