import fs from 'fs'
import path from 'path'
import { logInfo, logError } from '../log.js'

const TEMPLATE_HOME_PAGE = `import React from 'react'

export default () => (
  <main style={{ padding: '2rem' }}>
    <h1>Welcome</h1>
    <p>Add new pages by creating *.page.jsx files in src/</p>
  </main>
)
`

const TEMPLATE_CONFIG = `import { CloudLight } from '@ossy/themes'

export default {
  workspaceId: 'your-workspace-id',
  theme: CloudLight,
}
`

const TEMPLATE_PACKAGE_JSON = {
  name: 'my-ossy-app',
  version: '0.0.1',
  private: true,
  type: 'module',
  scripts: {
    dev: 'npx @ossy/cli dev',
    build: 'npx @ossy/cli build',
    start: 'node build/server.js',
  },
  dependencies: {
    '@ossy/cli': '^0.9.0',
    '@ossy/app': '^0.9.0',
    '@ossy/connected-components': '^0.9.0',
    '@ossy/design-system': '^0.9.0',
    '@ossy/themes': '^0.9.0',
    '@ossy/router-react': '^0.9.0',
    '@ossy/sdk': '^0.9.0',
    '@ossy/sdk-react': '^0.9.0',
    react: '^19.0.0',
    'react-dom': '^19.0.0',
  },
}

export const init = (options) => {
  const parsedArgs = options || []
  const targetDir = parsedArgs[0] ? path.resolve(parsedArgs[0]) : process.cwd()

  const srcDir = path.join(targetDir, 'src')
  const homePagePath = path.join(srcDir, 'home.page.jsx')
  if (fs.existsSync(homePagePath) || fs.existsSync(path.join(targetDir, 'src', 'pages.jsx'))) {
    logError({ message: '[@ossy/cli] Project already exists (src/home.page.jsx or src/pages.jsx found)' })
    process.exit(1)
  }

  logInfo({ message: `[@ossy/cli] Creating project in ${targetDir}` })

  fs.mkdirSync(srcDir, { recursive: true })

  fs.writeFileSync(homePagePath, TEMPLATE_HOME_PAGE)
  fs.writeFileSync(path.join(srcDir, 'config.js'), TEMPLATE_CONFIG)

  const pkgPath = path.join(targetDir, 'package.json')
  if (!fs.existsSync(pkgPath)) {
    fs.writeFileSync(pkgPath, JSON.stringify(TEMPLATE_PACKAGE_JSON, null, 2))
  } else {
    logInfo({ message: '[@ossy/cli] package.json exists, skipping. Add scripts manually if needed.' })
  }

  logInfo({ message: '[@ossy/cli] Done. Run: npm install && npm run dev' })
}
