import { useState } from 'react'
import { WHATSAPP_SUPPORT_NUMBER } from '../data/site.js'
import './WhatsAppJoinForm.css'

// Collapsible "request to join" control. When expanded it shows a short
// fill-in-the-blank sentence (name + state); "Request join" opens WhatsApp via
// a wa.me deep link with the composed message addressed to the support number.
// The visitor sends it from their own WhatsApp, so their number is included
// automatically — no need to ask for it.
function WhatsAppJoinForm() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [state, setState] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!name.trim() || !state.trim()) {
      setError('Please fill in your name and your state.')
      return
    }
    setError('')
    const message = `Hi. My name is ${name.trim()} and I am from ${state.trim()}, and I want to request to join the computer-specific support WhatsApp group.`
    const url = `https://wa.me/${WHATSAPP_SUPPORT_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="wa-join">
      <button
        type="button"
        className="btn btn-primary"
        aria-expanded={open}
        aria-controls="wa-join-panel"
        onClick={() => setOpen((value) => !value)}
      >
        Request to join <span aria-hidden="true">{open ? '▴' : '▾'}</span>
      </button>

      {open && (
        <form id="wa-join-panel" className="wa-join__panel" onSubmit={handleSubmit}>
          <p className="wa-join__sentence">
            Hi. My name is{' '}
            <input
              type="text"
              className="wa-join__field"
              aria-label="Your name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{' '}
            and I am from{' '}
            <input
              type="text"
              className="wa-join__field"
              aria-label="Your state"
              autoComplete="address-level1"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            , and I want to request to join the computer-specific support WhatsApp group.
          </p>

          {error && (
            <p className="wa-form__error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="btn btn-primary">
            Request join
          </button>
        </form>
      )}
    </div>
  )
}

export default WhatsAppJoinForm
