import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import WhatWeDo from './pages/WhatWeDo.jsx'
import Contact from './pages/Contact.jsx'
import CoursePage from './pages/CoursePage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="what-we-do" element={<WhatWeDo />} />
        <Route path="courses/:courseId" element={<CoursePage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
