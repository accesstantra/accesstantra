import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import initiatives from '../data/initiatives.js'
import NavDropdown from './NavDropdown.jsx'
import './Header.css'

const programItems = [
  { to: '/initiatives', label: 'All Initiatives' },
  ...initiatives.map((item) => ({ to: `/programs/${item.id}`, label: item.navLabel })),
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  // Move focus into the main region. We avoid href="#main-content" because
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
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" aria-label="Accessible Tantra — Home">
          <img src={logo} alt="" className="site-header__logo" width="44" height="44" />
          <span className="site-header__name">Accessible&nbsp;Tantra</span>
        </Link>

        <a href="#main-content" className="skip-nav" onClick={handleSkip}>
          Skip to main content
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
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
    </header>
  )
}

export default Header
