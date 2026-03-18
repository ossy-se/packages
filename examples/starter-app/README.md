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
  home.page.jsx    # → /
  about.page.jsx   # → /about
  config.js        # workspaceId, theme, apiUrl
```

Add a new page by creating `contact.page.jsx` — it becomes `/contact` automatically. Optionally export `metadata` for custom id/path or multi-language:

```js
export const metadata = { path: { en: '/about', sv: '/om' } }
export default () => <h1>About</h1>
```

## Commands

- `npm run dev` — Start dev server with hot reload
- `npm run build` — Production build
- `npm run start` — Run built server (after `npm run build`)
