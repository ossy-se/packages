import React from 'react'

import { AccountCircle } from './icons/AccountCircle.jsx'
import { AddChart } from './icons/AddChart.jsx'
import { AddCircle } from './icons/AddCircle.jsx'
import { AddToQueue } from './icons/AddToQueue.jsx'
import { Call } from './icons/Call.jsx'
import { Dashboard } from './icons/Dashboard.jsx'
import { ArrowBack } from './icons/ArrowBack.jsx'
import { Cached } from './icons/Cached.jsx'
import { Delete } from './icons/Delete.jsx'
import { Directory } from './icons/Directory.jsx'
import { Document } from './icons/Document.jsx'
import { Email } from './icons/Email.jsx'
import { Equalizer } from './icons/Equalizer.jsx'
import { FilterList } from './icons/FilterList.jsx'
import { GitHub } from './icons/GitHub.jsx'
import { Grading } from './icons/Grading.jsx'
import { Home } from './icons/Home.jsx'
import { InsertPhoto } from './icons/InsertPhoto.jsx'
import { Instagram } from './icons/Instagram.jsx'
import { KeyboardBackspace } from './icons/KeyboardBackspace.jsx'
import { LinkedIn } from './icons/LinkedIn.jsx'
import { Next } from './icons/Next.jsx'
import { OpenInNew } from './icons/OpenInNew.jsx'
import { PresentToAll } from './icons/PresentToAll.jsx'
import { Previous } from './icons/Previous.jsx'
import { RestorePage } from './icons/RestorePage.jsx'
import { Store } from './icons/Store.jsx'
import { TextSnippet } from './icons/TextSnippet.jsx'
import { Twitter } from './icons/Twitter.jsx'
import { ViewAgenda } from './icons/ViewAgenda.jsx'
import { ViewColumn } from './icons/ViewColumn.jsx'
import { ViewWeek } from './icons/ViewWeek.jsx'
import { Website } from './icons/Website.jsx'

export const icons = {
  AccountCircle,
  AddChart,
  AddCircle,
  AddToQueue,
  ArrowBack,
  Cached,
  Call,
  Dashboard,
  Delete,
  Directory,
  Document,
  Email,
  Equalizer,
  FilterList,
  GitHub,
  Grading,
  Home,
  InsertPhoto,
  Instagram,
  KeyboardBackspace,
  LinkedIn,
  Next,
  OpenInNew,
  PresentToAll,
  Previous,
  RestorePage,
  Store,
  TextSnippet,
  Twitter,
  ViewAgenda,
  ViewColumn,
  ViewWeek,
  Website,
}

export const Icon = ({ name, variant = 'default', size = 'm', ...props }) => {

  const Element = icons[name] || (() => <></>)
  return (
    <>
      <style href="@ossy/design-system/icon" precedence='high'>
      {`

        [data-icon][data-size="s"] {
          width: var(--icon-size-s, 18px);
          height: var(--icon-size-s, 18px);
        }

        [data-icon][data-size="m"] {
          width: var(--icon-size-m, 24px);
          height: var(--icon-size-m, 24px);
        }

        [data-icon][data-size="l"] {
          width: var(--icon-size-l, 48px);
          height: var(--icon-size-l, 48px);
        }

        [data-icon][data-size="xl"] {
          width: var(--icon-size-l, 64px);
          height: var(--icon-size-l, 64px);
        }

      `}
      </style>
      <style href={`@ossy/design-system/icon/${variant}`} precedence='high'>
      {`
        [data-icon-variant="${variant}"] {
          color: var(--on-icon-${variant}, var(--on-icon-default));
          fill: var(--on-icon-${variant}, var(--on-icon-default));
          height: var(--icon-${variant}--size, var(--icon-default--size));
          width: var(--icon-${variant}--size, var(--icon-default--size));
          fontSize: var(--icon-${variant}--size, var(--icon-default--size));
        }
        
        [data-icon-variant="${variant}"]:hover {
          color: var(--on-icon-${variant}--hover, var(--on-icon-default--hover));
          fill: var(--on-icon-${variant}--hover, var(--on-icon-default--hover));
          cursor: var(--icon-${variant}--cursor, var(--on-icon-default--cursor));
        }

        [data-icon-variant="${variant}"]:focus {
          color: var(--on-icon-${variant}--hover, var(--on-icon-default--hover));
          fill: var(--on-icon-${variant}--hover, var(--on-icon-default--hover));
        }

        [data-icon-variant="${variant}"]:disabled {
          color: var(--on-icon-${variant}--disabled, var(--on-icon-default--disabled));
          fill: var(--on-icon-${variant}--disabled, var(--on-icon-default--disabled));
          cursor: not-allowed
        }
      `}
      </style>
      <Element data-icon data-icon-variant data-icon-size={size} {...props} />
    </>
  )
}
