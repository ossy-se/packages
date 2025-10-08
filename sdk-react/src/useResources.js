import { useCallback, useMemo, useEffect } from 'react'
import { useCache } from './Cache.jsx'
import { removeBy } from './removeBy.js'
import { replaceBy } from './replaceBy.js'
import { AsyncStatus } from './asyncStatus.js'
import { useSdk } from './useSdk.js'

export const useResources = (location) => {
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
    () => resources.filter(resource => resource.location === location),
    [resources, location]
  )

  const loadResource = useCallback(
    resourceId => {
      const cachedResource = resources.find(resource => resource.id === resourceId)
      return !!cachedResource
        ? Promise.resolve(cachedResource)
        : sdk.resources.byId(resourceId)
          .then(requestedResource => {
            setResources((resources = []) => replaceBy('id', requestedResource, resources))
            return requestedResource
          })
    },
    [sdk, resources, setResources]
  )

  const loadResources = useCallback(() => {
    setStatus(AsyncStatus.Loading)
    sdk.resources.byLocation(location)
      .then(requestedResources => {
        setStatus(AsyncStatus.Success)
        // TODO: Duplicated resources can occur when you move a resource into a directory
        // then navigate to that directory, causing it to load the recently moved resource from BE into the resources list
        // Should probably use another data structure that ensures uniqueness.
        // temp fix is the resourcesWithStaleResourcesRemoved
        setResources((resources = []) => {
          const requestedResourcesIds = requestedResources.map(resource => resource.id)

          const resourcesWithStaleResourcesRemoved = resources.filter(
            resource => !requestedResourcesIds.includes(resource.id)
          )

          return [...requestedResources, ...resourcesWithStaleResourcesRemoved]
        })
      })
      .catch(() => { setStatus(AsyncStatus.Error) })
  }, [sdk, location, setStatus, setResources])

  const createDocument = useCallback(
    document => sdk.resources.create({
      type: document.type,
      location: document.location,
      name: document.name,
      content: document.content
    })
      .then(newResource => {
        setResources((resources = []) => [...resources, newResource])
        return newResource
      }),
    [sdk, setResources]
  )

  const uploadFile = useCallback(
    (location, file) => sdk.resources.upload({ location, file })
      .then(newResource => {
        setResources((resources = []) => [...resources, newResource])
        return newResource
      }),
    [sdk, setResources]
  )

  const createDirectory = useCallback(
    ({ location, name }) => sdk.resources.createDirectory({ location, name })
      .then(newResource => {
        setResources((resources = []) => [...resources, newResource])
        return newResource
      }),
    [sdk, setResources]
  )

  const removeResource = useCallback(
    resourceId => sdk.resources.remove(resourceId)
      .then(() => setResources((resources = []) => removeBy('id', resourceId, resources))),
    [sdk, setResources]
  )

  const updateResourceContent = useCallback(
    (resourceId, content) => sdk.resources.updateContent(resourceId, content)
      .then(updatedResource => {
        setResources((resources = []) => replaceBy('id', updatedResource, resources))
        return updatedResource
      }),
    [sdk, workspaceId, setResources]
  )

  const moveResource = useCallback(
    // TODO: how should we add this to the new location in cache?
    // TODO: if recource is a direcotry, how should we move the nested resources from cache?
    (resourceId, newLocation) => sdk.resources.move(resourceId, newLocation)
      .then(movedResource => {
        setResources((resources = []) => replaceBy('id', movedResource, resources))
        return movedResource
      }),
    [sdk, workspaceId, setResources]
  )

  const renameResource = useCallback(
    // TODO: how should we update the cache for individual resources
    // mabye by making this an internal function and only use it through useResource?
    (resourceId, newName) => sdk.resources.rename(resourceId, newName)
      .then(updatedResource => {
        setResources((resources = []) => replaceBy('id', updatedResource, resources))
        return updatedResource
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
