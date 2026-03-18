# @ossy/eslint-config-ossy

Shared ESLint configuration for Ossy projects.

## Installation

```bash
npm install --save-dev @ossy/eslint-config-ossy eslint
```

## Usage

In your `.eslintrc.js` or `eslint.config.js`:

```js
// .eslintrc.js
module.exports = {
  extends: ['@ossy/eslint-config-ossy'],
}
```

Or with flat config (ESLint 9+):

```js
// eslint.config.js
import ossy from '@ossy/eslint-config-ossy'

export default [...ossy]
```

## License

MIT
