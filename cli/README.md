# @ossy/cli

Unified CLI for the Ossy platform: app dev/build and CMS workflows.

## Commands

| Command | Description |
|---------|-------------|
| `dev` | Start dev server with watch (uses `src/pages.jsx`, `src/config.js`) |
| `build` | Production build |
| `cms upload` | Upload resource templates to your workspace |

## App: dev & build

```bash
npx @ossy/cli dev
npx @ossy/cli build
```

Options: `--pages`, `--config`, `--destination`. See `@ossy/app` for details.

## CMS: upload

Upload resource templates to your workspace so they can be used in the UI.

```bash
npx @ossy/cli cms upload --authentication <cms-api-token> --ossy-file ossy.json
```

### Config consistency

- **App** (`dev`, `build`): `--config` → app config (`src/config.js` by default)
- **CMS** (`cms upload`): `--ossy-file` → workspace config with `workspaceId` and `resourceTemplates`

### Workflow example

```yaml
name: "[CMS] Upload resource templates"

on:
  workflow_dispatch:

jobs:
  upload-resource-templates:
    name: Upload resource templates
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "16"
      - name: Upload
        run: |
          npx --yes @ossy/cli cms upload \
            --authentication ${{ secrets.CMS_API_TOKEN }} \
            --ossy-file ossy.json
```

### Arguments

| Argument | Description | Required |
|----------|-------------|----------|
| --authentication, -a | Your CMS API token | Yes |
| --ossy-file | Path to file with `workspaceId` and `resourceTemplates` | Yes |
