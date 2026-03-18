# @ossy/resource-templates

Resource template definitions for the Ossy CMS. Defines the structure of content types (fields, validation, and metadata) used across the Ossy ecosystem.

## Installation

```bash
npm install @ossy/resource-templates
```

## Usage

This package is typically used internally by `@ossy/sdk` and `@ossy/cli` when working with workspaces and resource templates. Import shared template definitions:

```js
import { resume } from '@ossy/resource-templates'
```

## Integration

- **@ossy/cli** — Use `cms upload` to upload resource templates to your workspace
- **@ossy/sdk** — `workspaces.importResourceTemplates()` and `workspaces.getResourceTemplates()` work with these definitions

## Development

Build the package:

```bash
npm run build
```

## License

MIT
