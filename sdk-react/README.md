# React bindings

To make it as easy as possible to use our cms we have created a library
with react hooks you can use to fetch data.

## Getting started

To use these hooks install the package **@ossy/sdk-react** along with **@ossy/sdk**:

```
npm install @ossy/sdk-react @ossy/sdk
```

Create an SDK instance and wrap your app in `<WorkspaceProvider />` to handle
data storage and configuration:

```jsx
// App.jsx
import { WorkspaceProvider } from '@ossy/sdk-react'
import { SDK } from '@ossy/sdk'
import { MyComponent } from './MyComponent.jsx'

const sdk = new SDK({ baseUrl: 'https://your-api.example.com' })

export const App = () => (
  <WorkspaceProvider sdk={sdk}>
    <MyComponent />
  </WorkspaceProvider>
)
```
```jsx
// MyComponent.jsx
import { useResources } from '@ossy/sdk-react'

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
const { status, resources, loadResources } = useResources('/')
```

**Parameters**

- **path** - (optional) Folder path in the cms UI. Defaults to `/` when omitted.

**Returns**

Returns an object containing

- **status** - String value that indicates loading status.
  Can be used to show loading indicators or error screens.
  Possible values are: NotInitialized, Loading, Success, Error
- **resources** - Array of resources, defaults to an empty array when
  loading is not Success
- **loadResources** - Function to manually refetch the resource list

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
