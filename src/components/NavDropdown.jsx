import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

// Reusable collapsible nav disclosure (used for "Programs" and "Explore").
// Closes on Escape (restoring focus to the button) and on outside click.
// `items` is [{ to, label }]; `activePrefixes` marks the button active when the
// current path starts with any of them.
function NavDropdown({ label, items, activePrefixes = [], onNavigate }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const buttonRef = useRef(null)
  const { pathname } = useLocation()

  const menuId = `${label.toLowerCase().replace(/\s+/g, '-')}-menu`
  const isActive = activePrefixes.some((prefix) => pathname.startsWith(prefix))

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
    onNavigate?.()
  }

  return (
    <li className="site-header__courses" ref={containerRef}>
      <button
        type="button"
        ref={buttonRef}
        className={`site-header__link site-header__courses-btn${isActive ? ' active' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {label} <span aria-hidden="true">{open ? '▴' : '▾'}</span>
      </button>

      <ul id={menuId} className={`site-header__submenu${open ? ' is-open' : ''}`} role="list">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} className="site-header__sublink" onClick={handleSelect}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default NavDropdown
