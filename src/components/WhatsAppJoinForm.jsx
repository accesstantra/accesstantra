import { useRef, useState } from 'react'
import { WHATSAPP_SUPPORT_NUMBER } from '../data/site.js'
import './WhatsAppJoinForm.css'

// Collapsible "request to join" control. Asks only for name + state; the full
// WhatsApp message is composed behind the scenes. "Request join" opens WhatsApp
// (wa.me) with that message addressed to the support number — the visitor sends
// it from their own WhatsApp, so their number is included automatically.
function WhatsAppJoinForm() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [state, setState] = useState('')
  const [error, setError] = useState('')
  const formRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    if (!name.trim()) {
      setError('Please enter your name.')
      formRef.current?.querySelector('#wa-name')?.focus()
      return
    }
    if (!state.trim()) {
      setError('Please enter your state.')
      formRef.current?.querySelector('#wa-state')?.focus()
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
        <form id="wa-join-panel" className="wa-join__panel" ref={formRef} onSubmit={handleSubmit} noValidate>
          <div className="wa-join__group">
            <label htmlFor="wa-name">Name</label>
            <input
              id="wa-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={error && !name.trim() ? 'true' : undefined}
            />
          </div>

          <div className="wa-join__group">
            <label htmlFor="wa-state">State</label>
            <input
              id="wa-state"
              name="state"
              type="text"
              autoComplete="address-level1"
              value={state}
              onChange={(e) => setState(e.target.value)}
              aria-invalid={error && !state.trim() ? 'true' : undefined}
            />
          </div>

          {error && (
            <p className="wa-join__error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="btn btn-primary">
            Request to join
          </button>
        </form>
      )}
    </div>
  )
}

export default WhatsAppJoinForm
