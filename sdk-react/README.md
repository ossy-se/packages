# React bindings

To make it as easy as possible to use our cms we have created a library
with react hooks you can use to fetch data.

## Getting started

To use these hooks install the package **@ossy/cms-client-react**

```
npm install @ossy/cms-client-react
```

Then we simply need to wrap our app in a <WorkspaceProvider /> that will
handle data storage and configuration for us.
You will need the workspaceId for the workspace you want to fetch data from.
The workspaceId can be found in the list of workspaces you have access to or
in the url when you view the resources in the UI.

```
// App.jsx
import { WorkspaceProvider } from '@ossy/cms-client-react'
import { MyComponent } from './MyComponent.jsx'

export const App = () => (
  <WorkspaceProvider workspaceId="your-workspace-id">
    <MyComponent />
  </WorkspaceProvider>
)
```
```
// MyComponent.jsx
import { useResources } from '@ossy/cms-client-react'

export const MyComponent = () => {
  const { status, resources } = useResources('/folder/path/in/cms')

  return (
    <>
      { status === 'Error' && (
        <>Something went wrong</>
      )}

      { status === 'Loading' && (
        <>Loading...</>
      )}

      { status === 'Success' && (
        resources.map(resource => (
          <div key={resource.id}>
            {resource.name}
          </div>
        ))
      )}
    </>  
  )
}
```

## Reference

### useResources

```
const { status, resources } = useResources('/')
```

**Parameters**

- **path** - Folder path in the cms UI

**Returns**

Returns an object containing

- **status** - String value that indicates loading status.
  Can be used to show loading indicators or error screens.
  Possible values are: NotInitialized, Loading, Success, Error
- **resources** - Array of resources, defaults to an empty array when
  loading is not Success

### useResource

```
const { status, resource } = useResource('resourceId')
```

**Parameters**

- **resourceId** - Id of the resource you want to fetch

**Returns**

Returns an object containing

- **status** - String value that indicates loading status.
  Can be used to show loading indicators or error screens.
  Possible values are: NotInitialized, Loading, Success, Error
- **resource** - The fetched resource, defaults to an empty object
  when status is not Success
