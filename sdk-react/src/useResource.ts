import { useCallback, useMemo, useEffect } from 'react'
import { useCache } from './Cache'
import { AsyncStatus } from './asyncStatus'
import { useResources } from './useResources'
import { useSdk } from './useSdk'

export const useResource = (id: string) => {
  const sdk = useSdk()
  const workspaceId = sdk.workspaceId

  const statusCachePath = useMemo(
    () => ['resource', workspaceId, id, 'status'],
    [id, workspaceId]
  )

  const dataCachePath = useMemo(
    () => ['resource', workspaceId, id, 'data'],
    [id, workspaceId]
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
    _loadResource(id)
      .then((resource: any) => {
        setStatus(AsyncStatus.Success)
        setResource(resource)
      })
      .catch(() => {
        setStatus(AsyncStatus.Error)
        setResource({})
      })
  }, [id, _loadResource])

  const removeResource = useCallback(
    () => _removeResource(id)
      .then(() => {
        setStatus(AsyncStatus.NotInitialized)
        setResource({})
      }),
    [id, _removeResource]
  )

  const updateResourceContent = useCallback(
    (content: any) => _updateResourceContent(id, content)
      .then((resource: any) => setResource(resource)),
    [id, _updateResourceContent]
  )

  const renameResource = useCallback(
    (name: string) => _renameResource(id, name)
      .then((resource: any) => setResource(resource)),
    [id, _renameResource]
  )

  useEffect(() => {
    if (!id) return
    if (status !== AsyncStatus.NotInitialized) return

    loadResource()

  }, [workspaceId, id, loadResource])

  return {
    status,
    resource,
    loadResource,
    removeResource,
    updateResourceContent,
    renameResource
  }
}
