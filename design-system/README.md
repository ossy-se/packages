# @ossy/design-system

React component library for the **Ossy Ecosystem** — themable UI components with support for multiple themes, server-side rendering, and React 19.

## Features

- **Themable** — Switch themes at runtime with the `useTheme` hook
- **Multiple themes** — CloudLight, CloudDark, and custom themes from `@ossy/themes`
- **Server-side rendering** — Works with SSR build tooling
- **React 19** — Built for React 19+

## Installation

```bash
npm install @ossy/design-system @ossy/themes
```

## Quick start

Wrap your app in the `Theme` provider and pass a theme from `@ossy/themes`:

```jsx
import React from 'react'
import { Theme } from '@ossy/design-system'
import { CloudLight } from '@ossy/themes'

export default () => (
  <Theme theme={CloudLight}>
    <YourApp />
  </Theme>
)
```

For multiple themes with runtime switching:

```jsx
import { Theme } from '@ossy/design-system'
import { CloudLight, CloudDark } from '@ossy/themes'

<Theme
  theme={CloudLight}
  themes={{ light: CloudLight, dark: CloudDark }}
  defaultTheme="light"
>
  <YourApp />
</Theme>
```

## Documentation

Run Storybook from the monorepo root for full component documentation:

```bash
npm start
```

In Storybook, open **Design System → Getting Started** for install and `Theme` setup, then **Principles**, **Theme Concepts**, **Patterns**, and **Variants**. Browse Layout, Feedback, Navigation, Actions, Display, Inputs, Base, and more in the same section.

## Peer dependencies

- `react` >=19.0.0
- `react-dom` >=19.0.0
- `@ossy/themes` for theme definitions

## License

MIT
