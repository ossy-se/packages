import { createRequire } from 'module'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import ts from 'typescript'

const require = createRequire(import.meta.url)
const { ts2doc } = require('@ts2doc/json')

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')

function collectTsFiles(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) collectTsFiles(p, acc)
    else if (ent.isFile() && ent.name.endsWith('.ts') && !ent.name.endsWith('.d.ts')) acc.push(p)
  }
  return acc
}

/** TS 5+ uses JSDoc comment parts (nodes) instead of a plain string when tags like @link appear. */
function jsDocPartsToPlainString(parts) {
  if (typeof parts === 'string') return parts
  if (!Array.isArray(parts)) return ''
  const { SyntaxKind } = ts
  return parts
    .map((p) => {
      if (!p || typeof p !== 'object') return ''
      if (p.kind === SyntaxKind.JSDocText) return p.text ?? ''
      if (p.kind === SyntaxKind.JSDocLink) {
        const n = p.name
        if (n && n.kind === SyntaxKind.Identifier) return n.escapedText ?? ''
        return p.text || ''
      }
      if (typeof p.text === 'string') return p.text
      return ''
    })
    .join('')
}

function isTsJSDocPartArray(value) {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value[0] &&
    typeof value[0] === 'object' &&
    typeof value[0].kind === 'number' &&
    Object.prototype.hasOwnProperty.call(value[0], 'parent')
  )
}

function sanitizeTs2DocOutput(value) {
  if (value === null || typeof value !== 'object') return value
  if (Array.isArray(value)) {
    if (isTsJSDocPartArray(value)) return jsDocPartsToPlainString(value)
    return value.map(sanitizeTs2DocOutput)
  }
  const out = {}
  for (const [k, v] of Object.entries(value)) {
    out[k] = sanitizeTs2docValue(k, v)
  }
  return out
}

function sanitizeTs2docValue(key, value) {
  if (key === 'description' && isTsJSDocPartArray(value)) {
    return jsDocPartsToPlainString(value)
  }
  return sanitizeTs2DocOutput(value)
}

const typesSrc = path.join(repoRoot, 'types', 'src')
const files = collectTsFiles(typesSrc).sort()
if (files.length === 0) {
  console.warn('generate-ts2doc: no .ts files under types/src')
  process.exit(1)
}

const raw = ts2doc(files, {})
const doc = sanitizeTs2DocOutput(raw)
const outPath = path.join(repoRoot, 'types', 'docs', 'ts2doc-doc.json')
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, `${JSON.stringify(doc, null, 2)}\n`, 'utf8')
console.log(`Wrote ${path.relative(repoRoot, outPath)} (${Object.keys(doc).length} declarations)`)
