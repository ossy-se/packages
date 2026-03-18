# @ossy/types

Shared TypeScript types for the Ossy ecosystem. Defines interfaces for themes, SDK configuration, resources, workspaces, and more.

## Installation

```bash
npm install @ossy/types
```

## Usage

```typescript
import type { Theme, Resource, SDKConfig, Workspace } from '@ossy/types'
```

## Key types

| Category | Types |
|----------|-------|
| **Theme & Design** | `Theme`, `SurfaceVariant`, `SpaceScale`, `MaxWidthScale`, `ColorPalette`, `SurfaceDefinitions`, `SurfacesMap` |
| **SDK** | `SDKConfig`, `Action` |
| **Resources** | `Resource`, `ResourceTemplate`, `Field`, `Workspace` |
| **Jobs** | `Job` |

## Documentation

Full type documentation is available in Storybook. Run from the monorepo root:

```bash
npm start
```

Browse **Types** in the sidebar for generated interface tables.

## Development

Build the package:

```bash
npm run build
```

## License

MIT
