import { useRef, useState } from 'react'
import { CONTACT } from '../data/site.js'
import './ContactForm.css'

// Subject + Message form. "Send mail" opens Gmail's web compose window
// pre-addressed to our inbox (new tab) — no backend required.
function ContactForm() {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const formRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    if (!subject.trim()) {
      setError('Please enter a subject.')
      formRef.current?.querySelector('#cf-subject')?.focus()
      return
    }
    if (!message.trim()) {
      setError('Please enter a message.')
      formRef.current?.querySelector('#cf-message')?.focus()
      return
    }
    setError('')
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      CONTACT.email,
    )}&su=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(message.trim())}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__group">
        <label htmlFor="cf-subject">
          Subject <span className="contact-form__req" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="cf-subject"
          name="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          aria-invalid={error && !subject.trim() ? 'true' : undefined}
        />
      </div>

      <div className="contact-form__group">
        <label htmlFor="cf-message">
          Message <span className="contact-form__req" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={error && !message.trim() ? 'true' : undefined}
        />
      </div>

      {error && (
        <p className="contact-form__error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary">
        Send mail <span className="sr-only">(opens Gmail in a new tab)</span>
      </button>
    </form>
  )
}

export default ContactForm
