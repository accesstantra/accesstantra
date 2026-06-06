import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)

  // On every route change, scroll to the top and move focus into the main
  // content so the new page's heading is what users (and screen readers) land
  // on — not the previous scroll position. Because outlines use :focus-visible,
  // mouse clicks won't show an outline here, but keyboard users still get one.
  useEffect(() => {
    window.scrollTo(0, 0)
    mainRef.current?.focus()
  }, [pathname])

  return (
    <>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
