import { useCallback, useMemo, useEffect } from 'react'
import { useCache } from './Cache'
import { AsyncStatus } from './asyncStatus'
import { useSdk } from './useSdk'

export const useQuery = (incomingQuery: any) => {
  const sdk = useSdk()
  const queryString = new URLSearchParams(incomingQuery).toString()

  const statusCachePath = useMemo(
    () => ['queries', queryString, 'status'],
    [queryString]
  )

  const dataCachePath = useMemo(
    () => ['queries', queryString, 'data'],
    [queryString]
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
    if (!incomingQuery) return
    if (status !== AsyncStatus.NotInitialized) return
    loadResources(incomingQuery)
  }, [incomingQuery, status])

  return { status, resources }
}
