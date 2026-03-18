import path from 'path';
import url from 'url';
import fs from 'fs';
import { describe, it, expect } from '@jest/globals';
import { parsePagesFromSource, discoverPageFiles, filePathToRoute } from '../cli/build.js';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const fixturesDir = path.join(__dirname, 'fixtures');

describe('discoverPageFiles', () => {
  it('finds *.page.jsx files in directory', () => {
    const pagesDir = path.join(fixturesDir, 'pages-dir')
    if (!fs.existsSync(pagesDir)) {
      fs.mkdirSync(pagesDir, { recursive: true })
      fs.writeFileSync(path.join(pagesDir, 'home.page.jsx'), 'export default () => null')
      fs.writeFileSync(path.join(pagesDir, 'about.page.jsx'), 'export default () => null')
    }
    const result = discoverPageFiles(pagesDir)
    expect(result.length).toBeGreaterThanOrEqual(2)
    expect(result.some((f) => f.includes('home.page.jsx'))).toBe(true)
    expect(result.some((f) => f.includes('about.page.jsx'))).toBe(true)
  })

  it('returns empty array for non-directory', () => {
    expect(discoverPageFiles(path.join(fixturesDir, 'pages-id-path.jsx'))).toEqual([])
  })
})

describe('filePathToRoute', () => {
  const srcDir = '/project/src'
  it('derives home from home.page.jsx', () => {
    expect(filePathToRoute(path.join(srcDir, 'home.page.jsx'), srcDir)).toEqual({ id: 'home', path: '/' })
  })
  it('derives about from about.page.jsx', () => {
    expect(filePathToRoute(path.join(srcDir, 'about.page.jsx'), srcDir)).toEqual({ id: 'about', path: '/about' })
  })
  it('derives home from index.page.jsx', () => {
    expect(filePathToRoute(path.join(srcDir, 'index.page.jsx'), srcDir)).toEqual({ id: 'home', path: '/' })
  })
  it('derives nested path from blog/post.page.jsx', () => {
    expect(filePathToRoute(path.join(srcDir, 'blog', 'post.page.jsx'), srcDir)).toEqual({ id: 'blog-post', path: '/blog/post' })
  })
})

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
