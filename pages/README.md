# @ossy/pages

SaaS page templates and layouts for the Ossy Ecosystem. Pre-built screens for auth, pricing, settings, dashboards, and more.

## Installation

```bash
npm install @ossy/pages @ossy/design-system @ossy/themes
```

## Available pages

| Category | Components |
|----------|------------|
| **Auth** | Login, SignUp, ForgotPassword, VerifyEmail |
| **Pricing** | Pricing tables and plans |
| **Settings** | User and app settings |
| **Dashboard** | Dashboard layouts |
| **Billing** | Billing and subscription |
| **Onboarding** | Onboarding flows |
| **Team** | Team management |
| **Integrations** | Third-party integrations |
| **Support** | Help and support |
| **Other** | Landing page, Resume, 404, Unauthorized, Maintenance, EmptyState |

## Usage

Import and use pages in your app:

```jsx
import { Login, SignUp, ForgotPassword } from '@ossy/pages'
import { Theme } from '@ossy/design-system'
import { CloudLight } from '@ossy/themes'

<Theme theme={CloudLight}>
  <Login onSubmit={handleLogin} />
</Theme>
```

## Documentation

Run Storybook from the monorepo root to browse all page templates:

```bash
npm start
```

## Peer dependencies

- `react` >=19.0.0
- `react-dom` >=19.0.0
- `@ossy/design-system` >=0.0.1
- `@ossy/themes` for theme support

## License

MIT
