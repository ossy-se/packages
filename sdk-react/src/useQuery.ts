import { useCallback, useMemo, useEffect } from 'react'
import { useCache } from './Cache'
import { AsyncStatus } from './asyncStatus'
import { useSdk } from './useSdk'

export const useQuery = (incomingQuery: any) => {
  const sdk = useSdk()
  const queryString = new URLSearchParams(incomingQuery).toString()

  const statusCacheKey = useMemo(
    () => `queries:${queryString}:status`,
    [queryString]
  )

  const dataCacheKey = useMemo(
    () => `queries:${queryString}:data`,
    [queryString]
  )

  const errorCacheKey = useMemo(
    () => `queries:${queryString}:error`,
    [queryString]
  )

  const {
    data: status,
    set: setStatus
  } = useCache(statusCacheKey, AsyncStatus.NotInitialized)

  const {
    data: resources,
    set: setResources
  } = useCache(dataCacheKey, [])

  const {
    data: error,
    set: setError
  } = useCache(errorCacheKey, null)

  const loadResources = useCallback((query: any) => {
    setStatus(AsyncStatus.Loading)
    setError(null)
    sdk.resources.get(query)
      .then((resources: any) => {
        setStatus(AsyncStatus.Success)
        setResources(resources)
        setError(null)
      })
      .catch((err: unknown) => {
        setStatus(AsyncStatus.Error)
        setError(err instanceof Error ? err : new Error(String(err)))
      })
  }, [sdk, setStatus, setResources, setError])

  useEffect(() => {
    if (!incomingQuery) return
    if (status !== AsyncStatus.NotInitialized) return
    loadResources(incomingQuery)
  }, [incomingQuery, status, loadResources])

  return { status, resources, error, loadResources }
}
