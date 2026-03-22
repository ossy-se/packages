import path from 'path';
import url from 'url'
import React, { createElement } from 'react';
import express from 'express'
import morgan from 'morgan'
import { Router } from '@ossy/router'
import { prerenderToNodeStream } from 'react-dom/static'
import { ProxyInternal } from './proxy-internal.js'
import cookieParser from 'cookie-parser'

import App from '%%@ossy/app/source-file%%'
import ApiRoutes from '%%@ossy/api/source-file%%'
import Middleware from '%%@ossy/middleware/source-file%%'
import configModule from '%%@ossy/config/source-file%%'

const buildTimeConfig = configModule?.default ?? configModule ?? {}

const app = express();

const currentDir = path.dirname(url.fileURLToPath(import.meta.url))
const ROOT_PATH = path.resolve(currentDir, 'public')

const isDevReloadEnabled = process.env.OSSY_DEV_RELOAD === '1'
const reloadClients = new Set()

function parsePortFromArgv(argv) {
  // Supports: --port 4000, --port=4000, -p 4000
  const idx = argv.findIndex(a => a === '--port' || a === '-p')
  if (idx !== -1 && argv[idx + 1]) return argv[idx + 1]

  const eq = argv.find(a => a.startsWith('--port='))
  if (eq) return eq.split('=')[1]

  return undefined
}

function normalizePort(value, fallback) {
  if (value === undefined || value === null || value === '') return fallback
  const n = Number.parseInt(String(value), 10)
  if (!Number.isFinite(n) || n <= 0) return fallback
  return n
}

const DEFAULT_PORT = 3000
const port = normalizePort(parsePortFromArgv(process.argv) ?? process.env.PORT, DEFAULT_PORT)

if (Middleware !== undefined) {
  console.log(`[@ossy/app][server] ${Middleware?.length || 0} custom middleware loaded`)
}

if (isDevReloadEnabled) {
  app.get('/__ossy_reload', (req, res) => {
    res.status(200)
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')
    res.flushHeaders?.()

    res.write('event: connected\ndata: ok\n\n')
    reloadClients.add(res)

    req.on('close', () => {
      reloadClients.delete(res)
    })
  })

  app.post('/__ossy_reload', (req, res) => {
    for (const client of reloadClients) {
      try {
        client.write('event: reload\ndata: now\n\n')
      } catch {
        // ignore broken connections
      }
    }
    res.status(204).end()
  })
}

const middleware = [
  morgan('tiny'),
  express.json({ strict: false }),
  cookieParser(process.env.OSSY_COOKIE_SECRET || 'default_secret'),
  (req, res, next) => {
    const userSettings = JSON.parse(req.signedCookies?.['x-ossy-user-settings'] || '{}')
    req.userAppSettings = userSettings

    if (userSettings.workspaceId && !req.headers.workspaceId) {
      req.headers.workspaceId = userSettings.workspaceId
    }

    // Check for auth cookie
    const cookieHeader = req.headers.cookie
    req.isAuthenticated = cookieHeader ? cookieHeader.includes('auth=') : false

    next()
  },
  ...(Middleware || []),
  express.static(ROOT_PATH),
  ProxyInternal(),
]

app.use(middleware)

const ApiRouter = Router.of({ pages: ApiRoutes || [] })

app.all('*all', (req, res) => {
  const pathname = req.originalUrl

  const apiRoute = ApiRouter.getPageByUrl(pathname)

  if (apiRoute) {
    console.log(`[@ossy/app][server] Handling API route: ${pathname}`)
    apiRoute.handle(req, res)
    return
  }

  const userAppSettings = req.userAppSettings || {}

  const appConfig = {
    ...buildTimeConfig,
    url: req.url,
    theme: userAppSettings.theme || buildTimeConfig.theme || 'light',
    isAuthenticated: req.isAuthenticated || false,
    workspaceId: userAppSettings.workspaceId || buildTimeConfig.workspaceId,
    apiUrl: buildTimeConfig.apiUrl,
    /** Primary app shell sidebar: icon rail when true (persisted in `x-ossy-user-settings`). */
    sidebarPrimaryCollapsed: userAppSettings.sidebarPrimaryCollapsed === true,
  }

  renderToString(App, appConfig)
    .then(html => { res.send(html) })
    .catch(err => { res.send(err) })

});

app.listen(port, () => {
  console.log(`[@ossy/app][server] Running on http://localhost:${port}`);
});

async function renderToString(App, config) {

  const devReloadScript = isDevReloadEnabled
    ? `(function(){try{var es=new EventSource('/__ossy_reload');es.addEventListener('reload',function(){location.reload();});}catch(e){}})();`
    : ``

  const { prelude } = await prerenderToNodeStream(createElement(App, config), {
    bootstrapScriptContent: `window.__INITIAL_APP_CONFIG__ = ${JSON.stringify(config)};${devReloadScript}`,
    bootstrapModules: ['/static/main.js']
  });

  return new Promise((resolve, reject) => {
    let data = '';
    prelude.on('data', chunk => {
      data += chunk;
    });
    prelude.on('end', () => resolve(data));
    prelude.on('error', reject);
  });

}