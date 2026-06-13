import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ContentPage from './components/ContentPage.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import InitiativesOverview from './pages/InitiativesOverview.jsx'
import CoursesLanding from './pages/CoursesLanding.jsx'
import Contact from './pages/Contact.jsx'
import { getInitiative } from './data/initiatives.js'
import { getCourse } from './data/courses.js'
import { getInfoPage } from './data/infoPages.js'

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
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="initiatives" element={<InitiativesOverview />} />
        <Route path="programs/:programId" element={<InitiativeRoute />} />

        <Route path="courses" element={<CoursesLanding />} />
        <Route path="courses/:courseId" element={<CourseRoute />} />

        <Route path="announcements" element={<ContentPage page={getInfoPage('announcements')} />} />
        <Route path="did-you-know" element={<ContentPage page={getInfoPage('did-you-know')} />} />
        <Route path="media-gallery" element={<ContentPage page={getInfoPage('media-gallery')} />} />
        <Route path="our-impact" element={<ContentPage page={getInfoPage('our-impact')} />} />

        <Route path="contact" element={<Contact />} />

        {/* Legacy redirect */}
        <Route path="what-we-do" element={<Navigate to="/initiatives" replace />} />

        {/* Fallback */}
        <Route path="*" element={<ContentPage page={undefined} />} />
      </Route>
    </Routes>
  )
}

export default App
