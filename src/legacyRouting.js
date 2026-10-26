// Preserve bookmarks shared before the switch from HashRouter to BrowserRouter.
export function getLegacyPath(url) {
  if (url.pathname !== '/' && url.pathname !== '/index.html') return null
  if (!url.hash.startsWith('#/') || url.hash.startsWith('#//')) return null

  try {
    const target = new URL(url.hash.slice(1), url.origin)
    if (target.origin !== url.origin) return null
    return target.pathname + (target.search || url.search) + target.hash
  } catch {
    return null
  }
}
