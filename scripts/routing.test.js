import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { getLegacyPath } from '../src/legacyRouting.js'
import { pagePaths, programPath, coursePath } from '../src/routes.js'

test('old bookmarks retain their route, query parameters and section', () => {
  const cases = [
    ['/#/about', '/about'],
    ['/#/courses/excel?source=message#details', '/courses/excel?source=message#details'],
    ['/?source=message#/programs/mentorship', '/programs/mentorship?source=message'],
    ['/index.html#/contact', '/contact'],
    ['/#/', '/'],
    ['/#/missing-page', '/missing-page'],
  ]
  for (const [input, expected] of cases) {
    assert.equal(getLegacyPath(new URL(input, 'https://accesstantra.com')), expected)
  }
})

test('clean URLs, in-page fragments and external targets are not migrated', () => {
  for (const input of ['/about', '/#main-content', '/courses/excel#details',
    '/admin/#/collections', '/#//example.com', '/#/\\example.com', '/#/\\[']) {
    assert.equal(getLegacyPath(new URL(input, 'https://accesstantra.com')), null)
  }
})

test('every known route has a production entry, including unlisted courses', async () => {
  const readData = async (name) => JSON.parse(
    await readFile(new URL(`../src/data/${name}.json`, import.meta.url), 'utf8'),
  )
  const { courses } = await readData('courses')
  const { initiatives } = await readData('initiatives')
  const paths = [
    ...Object.values(pagePaths),
    ...courses.map(({ id }) => coursePath(id)),
    ...initiatives.map(({ id }) => programPath(id)),
  ]
  const dist = new URL('../dist/', import.meta.url)
  const html = await readFile(new URL('index.html', dist), 'utf8')
  assert.match(html, /src="\/assets\//)
  for (const path of paths) {
    const entry = new URL(`${path === '/' ? '' : path.slice(1) + '/'}index.html`, dist)
    assert.equal(await readFile(entry, 'utf8'), html, path)
  }
  assert.equal(await readFile(new URL('404.html', dist), 'utf8'), html)
  assert.equal((await readFile(new URL('CNAME', dist), 'utf8')).trim(), 'accesstantra.com')
  assert.match(await readFile(new URL('admin/index.html', dist), 'utf8'), /sveltia/i)
})
