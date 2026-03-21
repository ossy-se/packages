# Ossy Packages

Monorepo for the **Ossy Ecosystem** — a collection of packages for building content-driven applications with our CMS and design system.

**Documentation:** [Published Docs](https://ossy-se.github.io/packages/) — updated on each push to `main` ([deploy workflow](.github/workflows/deploy-storybook.yml)). Run `npm start` at the repo root for local Storybook.

## Overview

The Ossy Ecosystem provides:

- **App runtime** — SSR build tooling, dev server, and routing
- **Design system** — Themed React components and page templates
- **CMS integration** — SDK, React hooks, and workspace context
- **CLI tools** — Resource template imports and API workflows

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│  Application layer                                               │
│  @ossy/cli  │  @ossy/app (SSR)  │  @ossy/connected-components (App)  │
│  @ossy/pages (layouts)                                           │
├─────────────────────────────────────────────────────────────────┤
│  UI & design                                                     │
│  @ossy/design-system  │  @ossy/themes                           │
├─────────────────────────────────────────────────────────────────┤
│  Data & API                                                      │
│  @ossy/sdk  │  @ossy/sdk-react (hooks)                           │
├─────────────────────────────────────────────────────────────────┤
│  Routing                                                         │
│  @ossy/router  │  @ossy/router-react                             │
├─────────────────────────────────────────────────────────────────┤
│  Foundation                                                      │
│  @ossy/types  │  @ossy/resource-templates                       │
└─────────────────────────────────────────────────────────────────┘
```

## Example app

See [examples/starter-app](./examples/starter-app) for a minimal working app. From the repo root:

```bash
npm run build && cd examples/starter-app && npm run dev
```

## Create your first app

### 1. Create a new project

```bash
mkdir my-ossy-app && cd my-ossy-app
npm init -y
```

### 2. Install dependencies

```bash
npm install @ossy/cli @ossy/app @ossy/connected-components @ossy/design-system @ossy/themes @ossy/router-react @ossy/sdk @ossy/sdk-react react react-dom
```

### 3. Add pages

Create `*.page.jsx` files in `src/`:

```jsx
// src/home.page.jsx
import React from 'react'
export default () => <h1>Welcome</h1>
```

```jsx
// src/about.page.jsx
import React from 'react'
export default () => <h1>About</h1>
```

Each file becomes a route: `home.page.jsx` → `/`, `about.page.jsx` → `/about`. Optionally export `metadata` for custom id/path or multi-language: `export const metadata = { path: { en: '/about', sv: '/om' } }`

### 4. Add config

Create `src/config.js`:

```js
export default {
  workspaceId: 'your-workspace-id',
  theme: 'light', // or import CloudLight from '@ossy/themes'
}
```

### 5. Run

```bash
npx @ossy/cli dev
```

Open [http://localhost:3000](http://localhost:3000).

## When to use what

| Use case | Package |
|----------|---------|
| **Quick start, convention-based** | `@ossy/cli` — Run `npx @ossy/cli dev` with `src/pages.jsx` and `src/config.js` |
| **Custom setup** (Next.js, Vite, etc.) | `@ossy/connected-components` — Use the `App` component directly with your own bundler and server |
| **Design components only** | `@ossy/design-system` + `@ossy/themes` |
| **CMS data fetching only** | `@ossy/sdk` + `@ossy/sdk-react` |

See [connected-components Getting Started](./connected-components/docs/GettingStarted.mdx) for using `App` without `@ossy/cli`.

## Scripts

```bash
npm run build        # Build all packages
npm run test         # Run tests in all packages
npm start            # Start Storybook (docs)
```

## Packages

| Package | Description |
|---------|-------------|
| `@ossy/app` | SSR runtime and build tooling (used by `@ossy/cli`) |
| `@ossy/connected-components` | `App` component: routing, theming, SDK, workspace |
| `@ossy/design-system` | React UI components |
| `@ossy/themes` | Theme definitions (CloudLight, CloudDark, etc.) |
| `@ossy/pages` | Page templates and layouts |
| `@ossy/sdk` | API client for Ossy services |
| `@ossy/sdk-react` | `useResource`, `useResources` hooks |
| `@ossy/router` | Base router (multi-language, localized paths) |
| `@ossy/router-react` | React router bindings |
| `@ossy/cli` | Unified CLI: `dev`, `build`, and CMS workflows (`cms upload`) |
| `@ossy/types` | Shared TypeScript types |
| `@ossy/resource-templates` | Resource template definitions |

## License

MIT
