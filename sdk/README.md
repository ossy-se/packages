# @ossy/sdk

API client for Ossy services. Use with `@ossy/sdk-react` for React hooks.

## Installation

```bash
npm install @ossy/sdk @ossy/sdk-react
```

## Quick start

```js
import { SDK } from '@ossy/sdk'

const sdk = SDK.of({
  workspaceId: 'your-workspace-id',
  apiUrl: 'https://api.ossy.se/api/v0', // optional, this is the default
})

// List resources in a folder
const resources = await sdk.resources.list({ location: '/docs' })

// Get a single resource
const resource = await sdk.resources.get({ id: 'resource-id' })
```

## Configuration

| Option | Description |
|--------|-------------|
| `workspaceId` | Your workspace identifier (required for most operations) |
| `apiUrl` | API base URL (default: `https://api.ossy.se/api/v0`) |
| `authorization` | Bearer token for authenticated requests |

## API overview

### Workspaces

- `sdk.workspaces.current()` — Get current workspace
- `sdk.workspaces.list()` — List workspaces
- `sdk.workspaces.get({ workspaceId })` — Get workspace by ID
- `sdk.workspaces.create(payload)` — Create workspace
- `sdk.workspaces.importResourceTemplates(...)` — Import resource templates
- `sdk.workspaces.getResourceTemplates(...)` — Get resource templates

### Resources

- `sdk.resources.list({ location })` — List resources in folder
- `sdk.resources.get({ id })` — Get resource by ID
- `sdk.resources.create(payload)` — Create resource
- `sdk.resources.search(query)` — Search resources
- `sdk.resources.remove({ id })` — Delete resource
- `sdk.resources.updateContent(...)` — Update resource content
- `sdk.resources.move(...)` — Move resource
- `sdk.resources.rename(...)` — Rename resource
- `sdk.resources.upload({ location, file })` — Upload file

### Auth

- `sdk.auth.signIn(payload)` — Sign in
- `sdk.auth.signOff()` — Sign off
- `sdk.auth.getAuthenticatedUser()` — Get current user

### Current user

- `sdk.currentUser.get()` — Get current user
- `sdk.currentUser.update(payload)` — Update user
- `sdk.currentUser.history()` — Get user history

## With React

Use `@ossy/sdk-react` for React hooks (`useResource`, `useResources`) and wrap your app in `WorkspaceProvider`:

```jsx
import { SDK } from '@ossy/sdk'
import { WorkspaceProvider } from '@ossy/sdk-react'

const sdk = SDK.of({ workspaceId: 'your-workspace-id' })

export const App = () => (
  <WorkspaceProvider sdk={sdk}>
    <YourApp />
  </WorkspaceProvider>
)
```

See [@ossy/sdk-react README](../sdk-react/README.md) for hook usage.
