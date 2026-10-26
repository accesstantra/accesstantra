import { copyFile, mkdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { pagePaths, programPath, coursePath } from '../src/routes.js'

const dist = new URL('../dist/', import.meta.url)
const index = new URL('index.html', dist)
const readData = async (name) => JSON.parse(
  await readFile(new URL(`../src/data/${name}.json`, import.meta.url), 'utf8'),
)
const { initiatives } = await readData('initiatives')
const { courses } = await readData('courses')

// IDs become filesystem paths. Reject unsafe IDs rather than writing outside dist.
function contentPaths(items, makePath) {
  return items.map(({ id }) => {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
      throw new Error(`Invalid route ID: ${id}`)
    }
    return makePath(id)
  })
}

const paths = new Set([
  ...Object.values(pagePaths),
  ...contentPaths(initiatives, programPath),
  ...contentPaths(courses, coursePath),
])

// Pages serves directory indexes on direct visits. All entries load the same
// root-relative assets; BrowserRouter renders the requested page in the browser.
for (const path of paths) {
  if (path === '/') continue
  const directory = new URL(`${path.slice(1)}/`, dist)
  await mkdir(directory, { recursive: true })
  await copyFile(index, new URL('index.html', directory))
}

// Unknown/removed URLs keep their URL and render React's accessible fallback.
await copyFile(index, new URL('404.html', dist))
console.log(`Generated ${paths.size} route entries and 404.html in ${fileURLToPath(dist)}`)
