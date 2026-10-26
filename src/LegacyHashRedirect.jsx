import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLegacyPath } from './legacyRouting.js'

// Also handle an old bookmark opened while Home is already loaded: changing
// only the fragment does not reload the document or run the bootstrap again.
function LegacyHashRedirect() {
  const navigate = useNavigate()

  useEffect(() => {
    function migrateHash() {
      const path = getLegacyPath(new URL(window.location.href))
      if (path) navigate(path, { replace: true })
    }
    window.addEventListener('hashchange', migrateHash)
    return () => window.removeEventListener('hashchange', migrateHash)
  }, [navigate])

  return null
}

export default LegacyHashRedirect
