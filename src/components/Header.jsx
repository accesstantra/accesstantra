import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import programs from '../data/programs.js'
import './Header.css'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/what-we-do', label: 'What We Do' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" aria-label="Accessible Tantra — Home">
          <img src={logo} alt="" className="site-header__logo" width="44" height="44" />
          <span className="site-header__name">Accessible&nbsp;Tantra</span>
        </Link>

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
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className="site-header__link"
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {programs.length > 0 && <ProgramsMenu onNavigate={closeMenu} />}
          </ul>
        </nav>
      </div>
    </header>
  )
}

// Collapsible "Programs" disclosure. Renders nothing meaningful if there are no
// programs (the parent guards on programs.length).
function ProgramsMenu({ onNavigate }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const buttonRef = useRef(null)
  const { pathname } = useLocation()
  const isActive = pathname.startsWith('/programs')

  // Close on outside click and on Escape.
  useEffect(() => {
    if (!open) return undefined

    function onPointerDown(event) {
      if (!containerRef.current?.contains(event.target)) setOpen(false)
    }
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  function handleSelect() {
    setOpen(false)
    onNavigate()
  }

  return (
    <li className="site-header__courses" ref={containerRef}>
      <button
        type="button"
        ref={buttonRef}
        className={`site-header__link site-header__courses-btn${isActive ? ' active' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="programs-menu"
        onClick={() => setOpen((value) => !value)}
      >
        Programs <span aria-hidden="true">{open ? '▴' : '▾'}</span>
      </button>

      <ul
        id="programs-menu"
        className={`site-header__submenu${open ? ' is-open' : ''}`}
        role="list"
      >
        {programs.map((program) => (
          <li key={program.id}>
            <NavLink
              to={`/programs/${program.id}`}
              className="site-header__sublink"
              onClick={handleSelect}
            >
              {program.navLabel}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default Header
