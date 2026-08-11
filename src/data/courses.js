import data from './courses.json'
import { YOUTUBE_URL } from './site.js'

// Courses live under /courses (a separate section from Programs). Each course
// renders via ContentPage at /courses/<id>. `upcoming: true` lists it on the
// Courses landing page; the landing always shows the standing links below.
//
// Content is edited in the CMS and stored in courses.json. `meta` is stored
// there as an ordered [{ key, value }] list for editing; convert it back to a
// plain object (preserving order) for ContentPage.

const metaToObject = (meta) => {
  if (!Array.isArray(meta)) return meta
  const obj = {}
  for (const pair of meta) {
    if (pair && pair.key) obj[pair.key] = pair.value
  }
  return obj
}

const courses = data.courses.map((course) =>
  course.meta ? { ...course, meta: metaToObject(course.meta) } : course,
)

// Configuration for the /courses landing page.
export const coursesLanding = {
  title: 'Courses',
  intro:
    'Skill-building courses from Accessible Tantra. Browse our upcoming courses below, request training tailored to your needs, or explore our YouTube channel for free tutorials.',
  noCoursesMessage: 'There are no upcoming courses at the moment. Please check back soon.',
  standingLinks: [
    {
      label: 'Request customized digital training',
      to: '/programs/digital-training-request',
      variant: 'primary',
    },
    { label: 'Visit our YouTube channel', href: YOUTUBE_URL, variant: 'outline' },
  ],
}

export function getCourse(id) {
  return courses.find((course) => course.id === id)
}

export default courses
