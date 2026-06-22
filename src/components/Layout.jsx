import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef(null)

  // On every route change, scroll to the top and move focus into the main
  // content so the new page's heading is what users (and screen readers) land
  // on. `preventScroll` stops the browser from scrolling <main> up over the
  // header (which otherwise left the Home header off-screen).
  useEffect(() => {
    window.scrollTo(0, 0)
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <>
      {/* The skip link lives inside the header, right after the site title, so
          the title is the first thing keyboard/screen-reader users reach. */}
      <Header />
      <main id="main-content" tabIndex={-1} ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
