# @ossy/cli

Command line tool that makes it easier to interact with our APIs

## Cms

### import-resource-templates
Imports resource templates to your workspace so that they can be used in the UI.

```bash
npx @ossy/cli cms import-resource-templates --authentication <cms-api-token> --ossy-file ossy.json
```

#### Workflow example

```bash
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
          npx --yes @ossy/cli cms import-resource-templates \
            --authentication ${{ secrets.CMS_API_TOKEN }} \
            --ossy-file ossy.json \
```

#### Arguments
| Argument | Description | Required |
|-|-|-|
| --authentication | Your personal CMS API token | required |
| --ossy-file | Path to the file containing the workspaceId and resource templates | required |
