import { useCallback, useMemo, useEffect } from 'react'
import { useCache } from './Cache.jsx'
import { AsyncStatus } from './asyncStatus.js'
import { useSdk } from './useSdk.js'

export const useQuery = incomingQuery => {
  const sdk = useSdk()
  const workspaceId = sdk.workspaceId
  const queryString = new URLSearchParams(incomingQuery).toString()
  console.log('useQuery', incomingQuery, queryString)

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

  const loadResources = useCallback(query => {
    setStatus(AsyncStatus.Loading)
    sdk.resources.get(query)
      .then(matchedResources => {
        setStatus(AsyncStatus.Success)
        setResources(matchedResources)
      })
      .catch(() => { setStatus(AsyncStatus.Error) })
  }, [sdk])

  useEffect(() => {
    console.log('useQuery effect', workspaceId, incomingQuery, status)
    if (!workspaceId) return
    if (!incomingQuery) return
    if (status !== AsyncStatus.NotInitialized) return
    loadResources(incomingQuery)
  }, [workspaceId, incomingQuery, status])

  return { status, resources }
}
