import { useCallback, useMemo, useEffect } from 'react'
import { useCache } from './Cache'
import { AsyncStatus } from './asyncStatus'
import { useSdk } from './useSdk'

export const useQuery = (incomingQuery: any) => {
  const sdk = useSdk()
  const workspaceId = sdk.workspaceId
  const queryString = new URLSearchParams(incomingQuery).toString()

  const statusCachePath = useMemo(
    () => [workspaceId, 'queries', queryString, 'status'],
    [workspaceId, queryString]
  )

  const dataCachePath = useMemo(
    () => [workspaceId, 'queries', queryString, 'data'],
    [workspaceId, queryString]
  )

  const {
    data: status,
    set: setStatus
  } = useCache(statusCachePath, AsyncStatus.NotInitialized)

  const {
    data: resources,
    set: setResources
  } = useCache(dataCachePath, [])

  const loadResources = useCallback((query: any) => {
    setStatus(AsyncStatus.Loading)
    sdk.resources.get(query)
      .then((resources: any) => {
        setStatus(AsyncStatus.Success)
        setResources(resources)
      })
      .catch(() => { setStatus(AsyncStatus.Error) })
  }, [sdk])

  useEffect(() => {
    if (!workspaceId) return
    if (!incomingQuery) return
    if (status !== AsyncStatus.NotInitialized) return
    loadResources(incomingQuery)
  }, [workspaceId, incomingQuery, status])

  return { status, resources }
}
