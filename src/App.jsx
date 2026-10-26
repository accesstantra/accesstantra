import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ContentPage from './components/ContentPage.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import InitiativesOverview from './pages/InitiativesOverview.jsx'
import CoursesLanding from './pages/CoursesLanding.jsx'
import Contact from './pages/Contact.jsx'
import PastEvents from './pages/PastEvents.jsx'
import { getInitiative } from './data/initiatives.js'
import { getCourse } from './data/courses.js'
import research from './data/research.js'
import { pagePaths, programPath, coursePath } from './routes.js'

function InitiativeRoute() {
  const { programId } = useParams()
  return <ContentPage page={getInitiative(programId)} />
}

function CourseRoute() {
  const { courseId } = useParams()
  return <ContentPage page={getCourse(courseId)} />
}

function App() {
  return (
    <Routes>
      <Route path={pagePaths.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={pagePaths.about} element={<About />} />

        <Route path={pagePaths.initiatives} element={<InitiativesOverview />} />
        <Route path={programPath(':programId')} element={<InitiativeRoute />} />

        <Route path={pagePaths.courses} element={<CoursesLanding />} />
        <Route path={coursePath(':courseId')} element={<CourseRoute />} />

        <Route path={pagePaths.pastEvents} element={<PastEvents />} />

        <Route path={pagePaths.research} element={<ContentPage page={research} />} />

        <Route path={pagePaths.contact} element={<Contact />} />

        {/* Legacy redirect */}
        <Route path={pagePaths.legacyInitiatives} element={<Navigate to={pagePaths.initiatives} replace />} />

        {/* Fallback */}
        <Route path="*" element={<ContentPage page={undefined} />} />
      </Route>
    </Routes>
  )
}

export default App
