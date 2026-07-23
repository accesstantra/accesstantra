import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import initiatives from '../data/initiatives.js'
import NavDropdown from './NavDropdown.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import './Header.css'

const programItems = [
  { to: '/initiatives', label: 'All Initiatives' },
  ...initiatives.map((item) => ({ to: `/programs/${item.id}`, label: item.navLabel })),
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const { pathname } = useLocation()

  // The site title is the page <h1> on Home (whose hero is removed); elsewhere
  // it's plain branding and each page supplies its own <h1>.
  const TitleTag = pathname === '/' ? 'h1' : 'div'

  // Move focus into the main region. Avoid href="#main-content" because
  // HashRouter would treat that hash as a (non-existent) route.
  function handleSkip(event) {
    event.preventDefault()
    const main = document.getElementById('main-content')
    if (main) {
      main.focus()
      main.scrollIntoView()
    }
  }

  return (
    <header className="site-header">
      <div className="container site-header__brandbar">
        <TitleTag className="site-header__title">
          <Link to="/">Accessible Tantra</Link>
        </TitleTag>

        <div className="site-header__tagrow">
          <p className="site-header__tagline">
            Making every system and every space accessible across disabilities
          </p>
          <img
            src={logo}
            alt="Accessible Tantra logo"
            className="site-header__logo"
            width="96"
            height="96"
          />
        </div>

        <a href="#main-content" className="skip-nav" onClick={handleSkip}>
          Skip to main content
        </a>

        <div className="site-header__tools">
          <ThemeToggle />
        </div>
      </div>

      <div className="site-header__navbar">
        <div className="container site-header__navinner">
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span> Menu
          </button>

          <nav
            id="primary-nav"
            aria-label="Main navigation"
            className={`site-header__nav${menuOpen ? ' is-open' : ''}`}
          >
            <ul className="site-header__list" role="list">
              <li>
                <NavLink to="/" end className="site-header__link" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>

              <NavDropdown
                label="Programs"
                items={programItems}
                activePrefixes={['/programs', '/initiatives']}
                onNavigate={closeMenu}
              />

              <li>
                <NavLink to="/courses" className="site-header__link" onClick={closeMenu}>
                  Courses
                </NavLink>
              </li>

              <li>
                <NavLink to="/past-events" className="site-header__link" onClick={closeMenu}>
                  Past Events
                </NavLink>
              </li>

              <li>
                <NavLink to="/research" className="site-header__link" onClick={closeMenu}>
                  Research &amp; Survey
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className="site-header__link" onClick={closeMenu}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="site-header__link" onClick={closeMenu}>
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
