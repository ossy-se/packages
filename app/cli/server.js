import path from 'path';
import url from 'url'
import React, { createElement } from 'react';
import express from 'express'
import morgan from 'morgan'
import { Router } from '@ossy/router'
import { prerenderToNodeStream } from 'react-dom/static'

import App from '%%@ossy/app/source-file%%'
import ApiRoutes from '%%@ossy/api/source-file%%'
import Middleware from '%%@ossy/middleware/source-file%%'

const app = express();

const currentDir = path.dirname(url.fileURLToPath(import.meta.url))
const ROOT_PATH = path.resolve(currentDir, 'public')


if (Middleware !== undefined) {
  console.log(`[@ossy/app][server] ${Middleware?.length || 0} custom middleware loaded`)
}

const middleware = [
  morgan('tiny'),
  express.static(ROOT_PATH),
  express.json({ strict: false }),
  ...(Middleware || [])
]

app.use(middleware)

const ApiRouter = Router.of({ pages: ApiRoutes || [] })

app.all('/*all', (req, res) => {
  const pathname = req.originalUrl

  const apiRoute = ApiRouter.getPageByUrl(pathname)

  if (apiRoute) {
    console.log(`[@ossy/app][server] Handling API route: ${pathname}`)
    apiRoute.handle(req, res)
  }

  renderToString(App, { url: req.url })
    .then(html => { res.send(html) })
    .catch(err => { res.send(err) })

});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

async function renderToSteam(App, config) {

  return prerenderToNodeStream(createElement(App, config), {
    bootstrapModules: ['/static/index.js']
  })

}

async function renderToString(App, config) {

  const { prelude } = await prerenderToNodeStream(createElement(App, config), {
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