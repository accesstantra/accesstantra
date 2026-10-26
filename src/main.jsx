import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import LegacyHashRedirect from './LegacyHashRedirect.jsx'
import { getLegacyPath } from './legacyRouting.js'
import './index.css'

const legacyPath = getLegacyPath(new URL(window.location.href))
if (legacyPath) window.history.replaceState(null, '', legacyPath)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LegacyHashRedirect />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
