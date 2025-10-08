import path from 'path';
import url from 'url'
import React, { createElement } from 'react';
import express from 'express';
import { prerenderToNodeStream } from 'react-dom/static'
import App from '%%@ossy/app/source-file%%'
import ApiRouter from '%%@ossy/api/source-file%%'

const app = express();

const currentDir = path.dirname(url.fileURLToPath(import.meta.url))
const ROOT_PATH = path.resolve(currentDir, 'public')

console.log('[@ossy/cli][app][server] ROOT_PATH: ', ROOT_PATH)

app.use(express.static(ROOT_PATH));

ApiRouter && app.use('/api', ApiRouter)

app.get('*', (req, res) => {

  console.log('[@ossy/cli][app][server] req.url: ', req.url)

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