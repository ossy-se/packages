import path from 'path'
import url from 'url'
import fs from 'fs'
import { describe, it, expect } from '@jest/globals'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const serverPath = path.join(__dirname, '..', 'cli', 'server.js')

describe('config flow', () => {
  it('server template imports and merges buildTimeConfig into appConfig', () => {
    const serverContent = fs.readFileSync(serverPath, 'utf8')
    expect(serverContent).toContain('configModule')
    expect(serverContent).toContain('buildTimeConfig')
    expect(serverContent).toContain('workspaceId')
    expect(serverContent).toContain('userAppSettings.workspaceId || buildTimeConfig.workspaceId')
    expect(serverContent).toContain('@ossy/config/source-file')
  })
})
