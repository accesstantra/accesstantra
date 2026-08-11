import data from './initiatives.json'

// Our Initiatives — each becomes an item in the "Programs" dropdown and a page
// at /programs/<id>, rendered by ContentPage. Content is edited in the CMS and
// stored in initiatives.json. Removing an item there drops its nav item + page;
// the dropdown hides entirely when none remain.
//
// `meta` (if used) is stored as an ordered [{ key, value }] list for editing;
// convert it back to a plain object (preserving order) for ContentPage.

const metaToObject = (meta) => {
  if (!Array.isArray(meta)) return meta
  const obj = {}
  for (const pair of meta) {
    if (pair && pair.key) obj[pair.key] = pair.value
  }
  return obj
}

export const initiativesIntro = data.initiativesIntro

const initiatives = data.initiatives.map((item) =>
  item.meta ? { ...item, meta: metaToObject(item.meta) } : item,
)

export function getInitiative(id) {
  return initiatives.find((item) => item.id === id)
}

export default initiatives
