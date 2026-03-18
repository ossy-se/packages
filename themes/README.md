# @ossy/themes

Theme definitions for the Ossy design system. Provides color palettes, spacing scales, and surface variants used by `@ossy/design-system`.

## Installation

```bash
npm install @ossy/themes
```

## Available themes

| Theme | Description |
|-------|-------------|
| `CloudLight` | Light theme with cloud-inspired palette |
| `CloudDark` | Dark theme variant |

## Usage

Use themes with `@ossy/design-system`:

```jsx
import { Theme } from '@ossy/design-system'
import { CloudLight, CloudDark } from '@ossy/themes'

// Single theme
<Theme theme={CloudLight}>
  <App />
</Theme>

// Multiple themes with switching
<Theme
  theme={CloudLight}
  themes={{ light: CloudLight, dark: CloudDark }}
  defaultTheme="light"
>
  <App />
</Theme>
```

## Custom themes

Create custom themes by following the `Theme` interface from `@ossy/types`. Use `normalizeTheme` to ensure your theme has all required fields:

```js
import { normalizeTheme } from '@ossy/themes'

const myTheme = normalizeTheme({
  // Your theme overrides
})
```

## Related packages

- `@ossy/design-system` — React components that consume themes
- `@ossy/types` — TypeScript `Theme` interface

## License

MIT
