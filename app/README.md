# `@ossy/app`

Server-side rendering runtime and build tooling for Ossy apps. Use with `@ossy/cli` for the convention-based setup (`npx @ossy/cli dev`).

For custom setups (Next.js, Vite, etc.), use `@ossy/connected-components` directly — see the [root README](../README.md#when-to-use-what).

## Setup

Create `src/pages.jsx`:

```jsx
import React from 'react'

export default [
  { id: 'home', path: '/', element: <HomePage /> },
  { id: 'about', path: '/about', element: <AboutPage /> },
]
```

Add `src/config.js` for workspace and theme:

```js
export default {
  workspaceId: 'your-workspace-id',
  theme: 'light', // or import CloudLight from '@ossy/themes'
}
```

Run `npx @ossy/cli dev` or `npx @ossy/cli build`.

## API routes

Create `src/api.js` to define custom API endpoints. Each route must have `id`, `path`, and a `handle(req, res)` function:

```js
export default [
  {
    id: 'health',
    path: '/api/health',
    handle(req, res) {
      res.json({ status: 'ok' })
    },
  },
  {
    id: 'users',
    path: '/api/users',
    handle(req, res) {
      res.json({ users: [] })
    },
  },
]
```

API routes are matched before the app is rendered. The router supports dynamic segments (e.g. `path: '/api/users/:id'`); extract params from `req.originalUrl` if needed. Use paths that don't conflict with `/@ossy/*` (reserved for the internal proxy).

## Port configuration

By default, the server listens on port **3000**.

- **Environment variable**: set `PORT`
- **CLI argument**: pass `--port <number>` (or `-p <number>`) when running the built server file

Examples:

```bash
# env var
PORT=4000 node build/server.js

# CLI arg
node build/server.js --port 4000
node build/server.js -p 4000
```

