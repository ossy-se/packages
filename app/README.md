# `@ossy/app`

Server-side rendering runtime for Ossy apps.

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

Run `npx @ossy/app dev` or `npx @ossy/app build`.

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

