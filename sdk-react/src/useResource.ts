import { useCallback, useMemo, useEffect } from 'react'
import { useCache } from './Cache'
import { AsyncStatus } from './asyncStatus'
import { useResources } from './useResources'
import { useSdk } from './useSdk'

export const useResource = (id: string) => {
  const sdk = useSdk()

  const statusCachePath = useMemo(
    () => ['resource', id, 'status'],
    [id]
  )

  const dataCachePath = useMemo(
    () => ['resource', id, 'data'],
    [id]
  )

  const errorCachePath = useMemo(
    () => ['resource', id, 'error'],
    [id]
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
    data: error = null,
    set: setError
  } = useCache(errorCachePath, null)

  const {
    loadResource: _loadResource,
    removeResource: _removeResource,
    updateResourceContent: _updateResourceContent,
    renameResource: _renameResource,
    access: _access
  } = useResources()

  const loadResource = useCallback(() => {
    setStatus(AsyncStatus.Loading)
    setResource({})
    setError(null)
    _loadResource(id)
      .then((resource: any) => {
        setStatus(AsyncStatus.Success)
        setResource(resource)
        setError(null)
      })
      .catch((err: unknown) => {
        setStatus(AsyncStatus.Error)
        setResource({})
        setError(err instanceof Error ? err : new Error(String(err)))
      })
  }, [id, _loadResource, setStatus, setResource, setError])

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

  const access = useCallback(({ access }: { access: 'restricted' | 'public' }) => {
    return _access({ id, access })
      .then((resource: any) => {
        setResource(resource)
        return resource
      })
  }, [id, _access])

  useEffect(() => {
    if (!id) return
    if (status !== AsyncStatus.NotInitialized) return

    loadResource()

  }, [id, loadResource])

  return {
    status,
    resource,
    error,
    loadResource,
    removeResource,
    updateResourceContent,
    renameResource,
    access
  }
}
