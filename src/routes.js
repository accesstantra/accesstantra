// Shared by React and the static build so direct visits work on GitHub Pages.
export const pagePaths = {
  home: '/',
  about: '/about',
  initiatives: '/initiatives',
  courses: '/courses',
  pastEvents: '/past-events',
  research: '/research',
  contact: '/contact',
  legacyInitiatives: '/what-we-do',
}

export const programPath = (id) => `/programs/${id}`
export const coursePath = (id) => `/courses/${id}`
