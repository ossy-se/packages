# `@ossy/app`

Server-side rendering runtime for Ossy apps.

## Port configuration

By default, the server listens on port **3000**.

- **Environment variable**: set `PORT`
- **CLI argument**: pass `--port <number>` (or `-p <number>`) when running the built server file

Examples:

```bash
# env var
PORT=4000 node build/server.js

# CLI arg
node build/server.js --port 4000
node build/server.js -p 4000
```

