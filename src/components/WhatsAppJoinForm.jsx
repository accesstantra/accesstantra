import { useRef, useState } from 'react'
import { WHATSAPP_SUPPORT_NUMBER } from '../data/site.js'
import './WhatsAppJoinForm.css'

// Collects a name, WhatsApp number, and optional message, then opens WhatsApp
// (via a wa.me deep link) with a pre-filled message addressed to the support
// number. A site can't silently send WhatsApp messages, so the visitor taps
// Send in their own WhatsApp. No backend required.
function WhatsAppJoinForm() {
  const [values, setValues] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [opened, setOpened] = useState(false)
  const formRef = useRef(null)

  function update(field) {
    return (event) => setValues((prev) => ({ ...prev, [field]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const found = {}
    if (!values.name.trim()) found.name = 'Please enter your name.'
    if (!values.phone.trim()) found.phone = 'Please enter your WhatsApp number.'
    setErrors(found)

    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0]
      formRef.current?.querySelector(`[name="${firstKey}"]`)?.focus()
      return
    }

    const lines = [
      'Hello Accessible Tantra, I would like to join the Computer Support WhatsApp group.',
      `Name: ${values.name}`,
      `WhatsApp: ${values.phone}`,
    ]
    if (values.message.trim()) lines.push(`Message: ${values.message}`)

    const url = `https://wa.me/${WHATSAPP_SUPPORT_NUMBER}?text=${encodeURIComponent(
      lines.join('\n'),
    )}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setOpened(true)
  }

  return (
    <form ref={formRef} className="wa-form" onSubmit={handleSubmit} noValidate>
      <div className="wa-form__group">
        <label htmlFor="wa-name">
          Name <span className="wa-form__req" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="wa-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={update('name')}
          aria-invalid={errors.name ? 'true' : undefined}
          aria-describedby={errors.name ? 'wa-name-error' : undefined}
        />
        {errors.name && (
          <p id="wa-name-error" className="wa-form__error" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className="wa-form__group">
        <label htmlFor="wa-phone">
          WhatsApp number <span className="wa-form__req" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="wa-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={update('phone')}
          aria-invalid={errors.phone ? 'true' : undefined}
          aria-describedby={errors.phone ? 'wa-phone-error' : undefined}
        />
        {errors.phone && (
          <p id="wa-phone-error" className="wa-form__error" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="wa-form__group">
        <label htmlFor="wa-message">Message (optional)</label>
        <textarea
          id="wa-message"
          name="message"
          rows={3}
          value={values.message}
          onChange={update('message')}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Request to join on WhatsApp
      </button>

      <p className="wa-form__status" role="status" aria-live="polite">
        {opened
          ? 'WhatsApp should have opened with your message ready to send. If it didn’t, please make sure WhatsApp is installed or try again.'
          : ''}
      </p>
    </form>
  )
}

export default WhatsAppJoinForm
