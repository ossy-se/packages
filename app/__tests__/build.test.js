import path from 'path';
import url from 'url';
import { describe, it, expect } from '@jest/globals';
import { parsePagesFromSource } from '../cli/build.js';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const fixturesDir = path.join(__dirname, 'fixtures');

describe('parsePagesFromSource', () => {
  it('parses id+path format', () => {
    const result = parsePagesFromSource(path.join(fixturesDir, 'pages-id-path.jsx'));
    expect(result).toEqual([
      { id: 'home', path: '/' },
      { id: 'about', path: '/about' },
    ]);
  });

  it('parses path+element format (derives id from path)', () => {
    const result = parsePagesFromSource(path.join(fixturesDir, 'pages-path-element.jsx'));
    expect(result).toEqual([
      { id: 'home', path: '/' },
      { id: 'contact', path: '/contact' },
    ]);
  });

  it('returns empty array for non-existent file', () => {
    const result = parsePagesFromSource(path.join(fixturesDir, 'does-not-exist.jsx'));
    expect(result).toEqual([]);
  });

  it('returns empty array for empty pages array', () => {
    const result = parsePagesFromSource(path.join(fixturesDir, 'pages-empty.jsx'));
    expect(result).toEqual([]);
  });
});
