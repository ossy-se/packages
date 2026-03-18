# Starter App

Example app demonstrating the Ossy Ecosystem with `@ossy/cli`.

## Run from monorepo root

```bash
# From packages root — build all packages first
npm run build

# Run the example
cd examples/starter-app && npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Run standalone

```bash
cd examples/starter-app
npm install
npm run dev
```

## Project structure

```
src/
  pages.jsx   # Route definitions
  config.js   # workspaceId, theme, apiUrl
```

## Commands

- `npm run dev` — Start dev server with hot reload
- `npm run build` — Production build
- `npm run start` — Run built server (after `npm run build`)
