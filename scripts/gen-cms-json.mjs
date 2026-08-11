// Normalise the CMS JSON data files so every "paragraph" field is an array of
// strings (one entry per paragraph) and every `meta` is an ordered
// [{ key, value }] list. This gives the CMS a single, consistent widget per
// field. Render is unchanged: ContentPage treats a string and a one-item array
// of strings identically. Idempotent — safe to re-run.
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const dataDir = resolve(here, '../src/data')

const metaToList = (meta) =>
  meta && !Array.isArray(meta)
    ? Object.entries(meta).map(([key, value]) => ({ key, value }))
    : meta

const toArray = (v) => (v == null ? v : Array.isArray(v) ? v : [v])

const normaliseSections = (sections) =>
  Array.isArray(sections)
    ? sections.map((s) => (s.body != null ? { ...s, body: toArray(s.body) } : s))
    : sections

const normaliseBody = (obj) => {
  const out = { ...obj }
  if (out.intro != null) out.intro = toArray(out.intro)
  if (out.formIntro != null) out.formIntro = toArray(out.formIntro)
  if (out.sections != null) out.sections = normaliseSections(out.sections)
  return out
}

const forCms = (item) => {
  let out = normaliseBody(item)
  if (out.meta) out = { ...out, meta: metaToList(out.meta) }
  if (out.hi) out = { ...out, hi: normaliseBody(out.hi) }
  return out
}

const readJson = (name) => JSON.parse(readFileSync(resolve(dataDir, name), 'utf8'))
const writeJson = (name, value) =>
  writeFileSync(resolve(dataDir, name), JSON.stringify(value, null, 2) + '\n', 'utf8')

const coursesData = readJson('courses.json')
writeJson('courses.json', { courses: coursesData.courses.map(forCms) })

const initiativesData = readJson('initiatives.json')
writeJson('initiatives.json', {
  initiativesIntro: initiativesData.initiativesIntro,
  initiatives: initiativesData.initiatives.map(forCms),
})

console.log('Normalised src/data/courses.json and src/data/initiatives.json')
