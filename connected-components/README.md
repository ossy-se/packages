# @ossy/connected-components

CMS-connected React components for the Ossy Ecosystem. The `App` component provides routing, theming, workspace context, and SDK integration in a single wrapper.

## Installation

```bash
npm install @ossy/connected-components @ossy/design-system @ossy/themes @ossy/router-react @ossy/sdk @ossy/sdk-react
```

## When to use

- **@ossy/cli** — Fastest path: run `npx @ossy/cli dev` with `src/*.page.jsx` and `src/config.js`
- **@ossy/connected-components** — Custom setups (Next.js, Vite, Remix): use the `App` component with your own bundler and server

## Quick start

```jsx
import { App } from '@ossy/connected-components'
import { CloudLight } from '@ossy/themes'

export default () => (
  <App
    workspaceId="your-workspace-id"
    theme={CloudLight}
    pages={[
      { id: 'home', path: '/', element: <HomePage /> },
      { id: 'about', path: '/about', element: <AboutPage /> },
    ]}
  />
)
```

## Configuration

| Prop | Description |
|------|-------------|
| `workspaceId` | Your workspace identifier |
| `theme` | Theme object (e.g. `CloudLight`, `CloudDark`) |
| `themes` | Multiple themes for switching via `useTheme` |
| `pages` | Array of `{ id, path, element }` page configs |
| `apiUrl` | Optional API base URL |
| `devMode` | Enables theme editor when `true` |

## Documentation

See **App — Getting Started** in Storybook for detailed setup with `@ossy/cli` and custom bundlers:

```bash
npm start
```

## Peer dependencies

- `react` >=19.0.0
- `@ossy/design-system` >=0.5.0
- `@ossy/pages` >=0.5.0
- `@ossy/router` >=0.5.0
- `@ossy/router-react` >=0.5.0
- `@ossy/sdk` >=0.5.0
- `@ossy/sdk-react` >=0.5.0
- `@ossy/themes` >=0.5.0

## License

MIT
