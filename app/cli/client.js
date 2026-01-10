import React, { createElement } from 'react'
import 'react-dom'
import { hydrateRoot } from 'react-dom/client';
import App from '%%@ossy/app/source-file%%'

const initialConfig = window.__INITIAL_APP_CONFIG__ || {}

hydrateRoot(document, createElement(App, initialConfig))