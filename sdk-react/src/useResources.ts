import { useCallback, useMemo, useEffect } from 'react'
import { useCache } from './Cache'
import { removeBy } from './removeBy'
import { replaceBy } from './replaceBy'
import { AsyncStatus } from './asyncStatus'
import { useSdk } from './useSdk'

export const useResources = (location?: string) => {
  const sdk = useSdk()
  const workspaceId = sdk.workspaceId

  const statusCachePath = useMemo(
    () => ['resources', workspaceId, 'status', location],
    [workspaceId, location]
  )

  const dataCachePath = useMemo(
    () => ['resources', workspaceId, 'data'],
    [workspaceId]
  )

  const {
    data: status,
    set: setStatus
  } = useCache(statusCachePath, AsyncStatus.NotInitialized)

  const {
    data: resources,
    set: setResources
  } = useCache(dataCachePath, [])

  const locationSpecificResources = useMemo(
    () => resources.filter((resource: { location: string }) => resource.location === location),
    [resources, location]
  )

  const loadResource = useCallback(
    (id: string) => {
      const cachedResource = resources.find((resource: { id: string }) => resource.id === id)
      return !!cachedResource
        ? Promise.resolve(cachedResource)
        : sdk.resources.byId(id)
          .then((resource: any) => {
            setResources((resources = []) => replaceBy('id', resource, resources))
            return resource
          })
    },
    [sdk, resources, setResources]
  )

  const loadResources = useCallback(() => {
    setStatus(AsyncStatus.Loading)
    sdk.resources.byLocation(location)
      .then((requestedResources: any) => {
        setStatus(AsyncStatus.Success)
        // TODO: Duplicated resources can occur when you move a resource into a directory
        // then navigate to that directory, causing it to load the recently moved resource from BE into the resources list
        // Should probably use another data structure that ensures uniqueness.
        // temp fix is the resourcesWithStaleResourcesRemoved
        setResources((resources: any[] = []) => {
          const requestedResourcesIds = requestedResources.map((resource: { id: string }) => resource.id)

          const resourcesWithStaleResourcesRemoved = resources.filter(
            resource => !requestedResourcesIds.includes(resource.id)
          )

          return [...requestedResources, ...resourcesWithStaleResourcesRemoved]
        })
      })
      .catch(() => { setStatus(AsyncStatus.Error) })
  }, [sdk, location, setStatus, setResources])

  const createDocument = useCallback(
   (document: any) => sdk.resources.create({
      type: document.type,
      location: document.location,
      name: document.name,
      content: document.content
    })
      .then((resource: any) => {
        setResources((resources = []) => [...resources, resource])
        return resource
      }),
    [sdk, setResources]
  )

  const uploadFile = useCallback(
    (location: string, file: File) => sdk.resources.upload({ location, file })
      .then((resource: any) => {
        setResources((resources = []) => [...resources, resource])
        return resource
      }),
    [sdk, setResources]
  )

  const createDirectory = useCallback(
    ({ location, name }: { location: string, name: string }) => sdk.resources.createDirectory({ location, name })
      .then((resource: any) => {
        setResources((resources = []) => [...resources, resource])
        return resource
      }),
    [sdk, setResources]
  )

  const removeResource = useCallback(
    (id: string) => sdk.resources.remove(id)
      .then(() => setResources((resources = []) => removeBy('id', id, resources))),
    [sdk, setResources]
  )

  const updateResourceContent = useCallback(
    (id: string, content: any) => sdk.resources.updateContent(id, content)
      .then((resource: any) => {
        setResources((resources = []) => replaceBy('id', resource, resources))
        return resource
      }),
    [sdk, workspaceId, setResources]
  )

  const moveResource = useCallback(
    // TODO: how should we add this to the new location in cache?
    // TODO: if recource is a direcotry, how should we move the nested resources from cache?
    (id: string, target: string) => sdk.resources.move(id, target)
      .then((resource: string) => {
        setResources((resources = []) => replaceBy('id', resource, resources))
        return resource
      }),
    [sdk, workspaceId, setResources]
  )

  const renameResource = useCallback(
    // TODO: how should we update the cache for individual resources
    // mabye by making this an internal function and only use it through useResource?
    (id: string, name: string) => sdk.resources.rename(id, name)
      .then((resource: any) => {
        setResources((resources = []) => replaceBy('id', resource, resources))
        return resource
      }),
    [sdk, workspaceId, setResources]
  )

  useEffect(() => {
    if (!workspaceId) return
    if (!location) return
    if (status !== AsyncStatus.NotInitialized) return

    loadResources()

  }, [workspaceId, location, status])

  return {
    status,
    resources: locationSpecificResources,
    removeResource,
    createDocument,
    createDirectory,
    loadResource,
    updateResourceContent,
    moveResource,
    renameResource,
    uploadFile
  }
}
