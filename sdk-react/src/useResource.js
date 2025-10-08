import { useCallback, useMemo, useEffect } from 'react'
import { useCache } from './Cache.jsx'
import { AsyncStatus } from './asyncStatus.js'
import { useResources } from './useResources.js'
import { useSdk } from './useSdk.js'

export const useResource = (resourceId) => {
  const sdk = useSdk()
  const workspaceId = sdk.workspaceId

  const statusCachePath = useMemo(
    () => ['resource', workspaceId, resourceId, 'status'],
    [resourceId, workspaceId]
  )

  const dataCachePath = useMemo(
    () => ['resource', workspaceId, resourceId, 'data'],
    [resourceId, workspaceId]
  )

  const {
    data: status = AsyncStatus.NotInitialized,
    set: setStatus
  } = useCache(statusCachePath)

  const {
    data: resource = {},
    set: setResource
  } = useCache(dataCachePath)

  const {
    loadResource: _loadResource,
    removeResource: _removeResource,
    updateResourceContent: _updateResourceContent,
    renameResource: _renameResource
  } = useResources()

  const loadResource = useCallback(() => {
    setStatus(AsyncStatus.Loading)
    setResource({})
    _loadResource(resourceId)
      .then(resource => {
        setStatus(AsyncStatus.Success)
        setResource(resource)
      })
      .catch(() => {
        setStatus(AsyncStatus.Error)
        setResource({})
      })
  }, [resourceId, _loadResource])

  const removeResource = useCallback(
    () => _removeResource(resourceId)
      .then(() => {
        setStatus(AsyncStatus.NotInitialized)
        setResource({})
      }),
    [resourceId, _removeResource]
  )

  const updateResourceContent = useCallback(
    resourceContent => _updateResourceContent(resourceId, resourceContent)
      .then(updatedResource => setResource(updatedResource)),
    [resourceId, _updateResourceContent]
  )

  const renameResource = useCallback(
    newName => _renameResource(resourceId, newName)
      .then(updatedResource => setResource(updatedResource)),
    [resourceId, _renameResource]
  )

  useEffect(() => {

    if (!workspaceId) return
    if (!resourceId) return
    if (status !== AsyncStatus.NotInitialized) return

    loadResource()

  }, [workspaceId, resourceId, loadResource])

  return {
    status,
    resource,
    loadResource,
    removeResource,
    updateResourceContent,
    renameResource
  }
}
