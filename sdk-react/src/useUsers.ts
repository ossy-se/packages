import { useCallback, useEffect } from 'react'
import { useCache } from './Cache'
import { AsyncStatus } from './asyncStatus'
import { useSdk } from './useSdk'

export const useUsers = () => {
  const sdk = useSdk()
  const cachePath = ['workspace', 'users']

  const {
    data: users = { status: AsyncStatus.NotInitialized, data: [], error: null },
    set: setUsers
  } = useCache(cachePath)

  const load = useCallback(() => {
    setUsers({ status: AsyncStatus.Loading, data: [], error: null })

    sdk.users.list()
      .then((users: any[]) => setUsers({ data: users, status: AsyncStatus.Success, error: null }))
      .catch((err: unknown) => setUsers({
        status: AsyncStatus.Error,
        data: [],
        error: err instanceof Error ? err : new Error(String(err))
      }))
  }, [sdk, setUsers])

  useEffect(() => {
    if (users.status === AsyncStatus.NotInitialized) {
      load()
    }
  }, [users.status, load])

  return {
    status: users.status,
    users: users.data,
    error: users.error ?? null,
    load,
  }

}
