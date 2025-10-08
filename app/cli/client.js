import React, { createElement } from 'react'
import 'react-dom'
import { hydrateRoot } from 'react-dom/client';
import App from '%%@ossy/app/source-file%%'

hydrateRoot(document, createElement(App))