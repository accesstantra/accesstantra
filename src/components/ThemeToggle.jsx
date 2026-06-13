import { useEffect, useState } from 'react'
import './ThemeToggle.css'

function getInitialDark() {
  return document.documentElement.getAttribute('data-theme') === 'dark'
}

// Toggles light/dark by setting data-theme on <html> and persisting to
// localStorage. The initial theme is applied pre-paint by a script in
// index.html; this keeps React in sync and lets the user switch.
function ThemeToggle() {
  const [dark, setDark] = useState(getInitialDark)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch (e) {
      /* ignore storage errors */
    }
  }, [dark])

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-pressed={dark}
      onClick={() => setDark((value) => !value)}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {dark ? '☀' : '☾'}
      </span>
      Dark mode
    </button>
  )
}

export default ThemeToggle
