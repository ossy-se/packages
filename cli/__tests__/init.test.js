import path from 'path'
import url from 'url'
import fs from 'fs'
import { describe, it, expect, beforeEach, afterEach } from '@jest/globals'
import { init } from '../src/init/cli.js'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const testDir = path.join(__dirname, 'fixtures', 'init-output')

describe('init', () => {
  beforeEach(() => {
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true })
    }
    fs.mkdirSync(testDir, { recursive: true })
  })

  afterEach(() => {
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true })
    }
  })

  it('creates src/home.page.jsx and src/config.js', () => {
    init([testDir])

    expect(fs.existsSync(path.join(testDir, 'src', 'home.page.jsx'))).toBe(true)
    expect(fs.existsSync(path.join(testDir, 'src', 'config.js'))).toBe(true)

    const pagesContent = fs.readFileSync(path.join(testDir, 'src', 'home.page.jsx'), 'utf8')
    expect(pagesContent).toContain('Welcome')
    expect(pagesContent).toContain('*.page.jsx')

    const configContent = fs.readFileSync(path.join(testDir, 'src', 'config.js'), 'utf8')
    expect(configContent).toContain('workspaceId')
    expect(configContent).toContain('CloudLight')
  })
})
