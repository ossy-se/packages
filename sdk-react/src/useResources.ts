import { useCallback, useMemo, useEffect } from 'react'
import { useCache } from './Cache'
import { removeBy } from './removeBy'
import { replaceBy } from './replaceBy'
import { AsyncStatus } from './asyncStatus'
import { useSdk } from './useSdk'

/** Normalize location to match API: single leading and trailing slash */
function normalizeLocation(loc: string | undefined): string {
  if (loc == null || loc === '') return '/'
  const trimmed = loc.replace(/^\/+|\/+$/g, '')
  return trimmed ? `/${trimmed}/` : '/'
}

export const useResources = (location?: string) => {
  const sdk = useSdk()
  const normalizedLocation = useMemo(() => normalizeLocation(location), [location])

  const statusCachePath = useMemo(
    () => ['resources', 'status', normalizedLocation],
    [normalizedLocation]
  )

  const dataCachePath = useMemo(
    () => ['resources', 'data', normalizedLocation],
    [normalizedLocation]
  )

  const {
    data: status,
    set: setStatus
  } = useCache(statusCachePath, AsyncStatus.NotInitialized)

  const {
    data: resources,
    set: setResources
  } = useCache(dataCachePath, [])

  const loadResource = useCallback(
    (id: string) => {
      const cachedResource = resources?.find((resource: { id: string }) => resource.id === id)
      return !!cachedResource
        ? Promise.resolve(cachedResource)
        : sdk.resources.get({ id }).then((resource: any) => {
            setResources((prev: any[] = []) =>
              normalizeLocation(resource.location) === normalizedLocation ? replaceBy('id', resource, prev) : prev
            )
            return resource
          })
    },
    [sdk, resources, setResources, normalizedLocation]
  )

  const loadResources = useCallback(() => {
    setStatus(AsyncStatus.Loading)
    sdk.resources.list({ location: normalizedLocation })
      .then((requestedResources: any) => {
        setStatus(AsyncStatus.Success)
        setResources(requestedResources)
      })
      .catch(() => { setStatus(AsyncStatus.Error) })
  }, [sdk, normalizedLocation, setStatus, setResources])

  const createDocument = useCallback(
   (document: any) => sdk.resources.create({
      type: document.type,
      location: normalizeLocation(document.location),
      name: document.name,
      content: document.content
    })
      .then((resource: any) => {
        setResources((prev: any[] = []) =>
          normalizeLocation(resource.location) === normalizedLocation ? [...prev, resource] : prev
        )
        return resource
      }),
    [sdk, setResources, normalizedLocation]
  )

  const uploadFile = useCallback(
    (location: string, file: File) => sdk.resources.upload({ location: normalizeLocation(location), file })
      .then((resource: any) => {
        setResources((prev: any[] = []) =>
          normalizeLocation(resource.location) === normalizedLocation ? [...prev, resource] : prev
        )
        return resource
      }),
    [sdk, setResources, normalizedLocation]
  )

  const createDirectory = useCallback(
    ({ location, name }: { location: string, name: string }) => sdk.resources.createDirectory({ type: 'directory', location: normalizeLocation(location), name })
      .then((resource: any) => {
        setResources((prev: any[] = []) =>
          normalizeLocation(resource.location) === normalizedLocation ? [...prev, resource] : prev
        )
        return resource
      }),
    [sdk, setResources, normalizedLocation]
  )

  const removeResource = useCallback(
    (id: string) => sdk.resources.remove({ id }).then(() => {
      setResources((prev: any[] = []) => removeBy('id', id, prev))
    }),
    [sdk, setResources]
  )

  const updateResourceContent = useCallback(
    (id: string, content: any) => sdk.resources.updateContent({ id, content }).then((resource: any) => {
      setResources((prev: any[] = []) => replaceBy('id', resource, prev))
      return resource
    }),
    [sdk, setResources]
  )

  const moveResource = useCallback(
    (id: string, target: string) => sdk.resources.move({ id, target }).then((resource: any) => {
      setResources((prev: any[] = []) =>
        normalizeLocation(resource.location) === normalizedLocation ? replaceBy('id', resource, prev) : removeBy('id', id, prev)
      )
      return resource
    }),
    [sdk, setResources, normalizedLocation]
  )

  const renameResource = useCallback(
    (id: string, name: string) => sdk.resources.rename({ id, name })
      .then((resource: any) => {
        setResources((prev: any[] = []) => replaceBy('id', resource, prev))
        return resource
      }),
    [sdk, setResources]
  )

  const access = useCallback((params: { id: string; access: 'restricted' | 'public' }) => {
    return sdk.resources.access(params).then((resource: any) => {
      setResources((prev: any[] = []) => replaceBy('id', resource, prev))
      return resource
    })
  }, [setResources])

  useEffect(() => {
    if (status !== AsyncStatus.NotInitialized) return

    loadResources()
  }, [normalizedLocation, status])

  return {
    status,
    resources,
    removeResource,
    createDocument,
    createDirectory,
    loadResource,
    updateResourceContent,
    moveResource,
    renameResource,
    uploadFile,
    access
  }
}
