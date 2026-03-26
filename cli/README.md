# @ossy/cli

Unified CLI for the Ossy platform: app dev/build and CMS workflows.

## Commands

| Command | Description |
|---------|-------------|
| `init [dir]` | Scaffold a new Ossy app (default: current directory) |
| `dev` | Start dev server with watch (uses `src/*.page.jsx` or `src/pages.jsx`, `src/config.js`) |
| `build` | Production build |
| `publish` | Queue a container deployment via `@ossy/deployment-tools` (see below) |
| `cms upload` | Upload resource templates to your workspace |
| `cms validate` | Validate ossy config and resource templates |

## App: dev & build

```bash
npx @ossy/cli dev
npx @ossy/cli build
```

Options: `--pages`, `--config`, `--destination`. See `@ossy/app` for details.

## Publish (container / website)

Publishes a site by sending a deployment request to your platform queue (same as `npx @ossy/deployment-tools deployment deploy`). Run from the **website package** directory (where `src/config.js` lives) so domain/platform can be read automatically.

```bash
cd packages/my-website
npx @ossy/cli publish \
  --username <github-username> \
  --authentication <token> \
  --platforms-path ../infrastructure/platforms.json \
  --deployments-path ../infrastructure/deployments.json
```

- **`--domain` / `--platform`** — Optional if `src/config.js` contains string literals `domain: '…'` and `platform: '…'` (or `targetDeploymentPlatform`).
- **`--config`** — Path to another `config.js` if not `./src/config.js`.
- If `platform` is omitted but `domain` is set (from flags or config), it is inferred from `deployments.json` when that domain appears under exactly one `targetDeploymentPlatform`.
- **`--all`** — Runs `deployment deploy-all` for the platform; requires `--platform` or `platform` in config.

Requires network access so `npx` can run `@ossy/deployment-tools`.

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

### cms validate

Validate an ossy config file before uploading:

```bash
npx @ossy/cli cms validate --ossy-file ossy.json
```

Defaults to `ossy.json` in the current directory when `--ossy-file` is omitted.

### Arguments

| Argument | Description | Required |
|----------|-------------|----------|
| --authentication, -a | Your CMS API token | Yes (upload only) |
| --ossy-file | Path to file with `workspaceId` and `resourceTemplates` | Yes (upload), optional (validate) |

## init

Scaffold a new Ossy app:

```bash
npx @ossy/cli init
npx @ossy/cli init my-app
```

Creates `src/pages.jsx`, `src/config.js`, and `package.json` (if missing).
