import { useEffect, useRef, useState } from 'react'
import './RegistrationForm.css'

// Renders an accessible, native registration form from a program's `form`
// definition and submits it straight to the linked Google Form. We POST a real
// <form> into a hidden iframe so the page never navigates away and there's no
// cross-origin fetch involved.
function RegistrationForm({ form, programTitle }) {
  const formRef = useRef(null)
  const successRef = useRef(null)
  const submittingRef = useRef(false)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (submitted) successRef.current?.focus()
  }, [submitted])

  function validate() {
    const found = {}
    for (const field of form.fields) {
      if (!field.required) continue
      const root = formRef.current
      if (field.type === 'checkbox') {
        const box = root.querySelector(`input[name="${CSS.escape(field.entry)}"]`)
        if (!box.checked) found[field.entry] = 'Please confirm to continue.'
      } else if (field.type === 'radio') {
        const picked = root.querySelector(`input[name="${CSS.escape(field.entry)}"]:checked`)
        if (!picked) found[field.entry] = 'Please choose an option.'
      } else {
        const node = root.querySelector(`[name="${CSS.escape(field.entry)}"]`)
        if (!node.value.trim()) found[field.entry] = 'This field is required.'
      }
    }
    return found
  }

  function handleSubmit(event) {
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) {
      event.preventDefault() // block the native POST while there are errors
      const firstField = form.fields.find((f) => found[f.entry])
      formRef.current
        .querySelector(`[name="${CSS.escape(firstField.entry)}"]`)
        ?.focus()
      return
    }
    // Valid — let the browser POST into the hidden iframe. The iframe's onLoad
    // confirms success; a fallback timer covers browsers that don't fire it
    // when Google's cross-origin response can't be framed.
    submittingRef.current = true
    window.setTimeout(() => {
      if (submittingRef.current) {
        submittingRef.current = false
        setSubmitted(true)
      }
    }, 1500)
  }

  // The iframe fires `load` once on mount (ignored) and again after the POST.
  function handleIframeLoad() {
    if (submittingRef.current) {
      submittingRef.current = false
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="course-form__success" role="status" aria-live="polite">
        <h3 tabIndex={-1} ref={successRef}>
          Thank you — your registration has been submitted.
        </h3>
        <p>
          We&rsquo;ve received your details for {programTitle}. Our team will reach out with
          the next steps.
        </p>
      </div>
    )
  }

  return (
    <>
      {/* Hidden submission target — keeps the user on this page after submit. */}
      <iframe
        name="gform-target"
        title="Form submission"
        className="course-form__sink"
        aria-hidden="true"
        tabIndex={-1}
        onLoad={handleIframeLoad}
      />

      <form
        ref={formRef}
        action={form.action}
        method="POST"
        target="gform-target"
        onSubmit={handleSubmit}
        className="course-form"
        noValidate
      >
        {form.fields.map((field) => (
          <Field key={field.entry} field={field} error={errors[field.entry]} />
        ))}

        <button type="submit" className="btn btn-primary">
          Submit registration
        </button>
      </form>
    </>
  )
}

function Field({ field, error }) {
  const errorId = error ? `${field.entry}-error` : undefined
  const required = Boolean(field.required)

  // Radio group → fieldset/legend
  if (field.type === 'radio') {
    return (
      <fieldset className="course-form__group" aria-describedby={errorId}>
        <legend className="course-form__label">
          {field.label} {required && <RequiredMark />}
        </legend>
        {field.options.map((opt, i) => {
          const id = `${field.entry}-${i}`
          return (
            <div key={opt} className="course-form__option">
              <input
                type="radio"
                id={id}
                name={field.entry}
                value={opt}
                aria-invalid={error ? 'true' : undefined}
              />
              <label htmlFor={id}>{opt}</label>
            </div>
          )
        })}
        {error && <ErrorText id={errorId} message={error} />}
      </fieldset>
    )
  }

  if (field.type === 'checkbox') {
    const id = field.entry
    return (
      <div className="course-form__group course-form__group--check">
        <div className="course-form__option">
          <input
            type="checkbox"
            id={id}
            name={field.entry}
            value={field.value}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={errorId}
          />
          <label htmlFor={id}>
            {field.checkboxLabel} {required && <RequiredMark />}
          </label>
        </div>
        {error && <ErrorText id={errorId} message={error} />}
      </div>
    )
  }

  const id = field.entry
  const sharedProps = {
    id,
    name: field.entry,
    required,
    autoComplete: field.autoComplete,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': errorId,
  }

  return (
    <div className="course-form__group">
      <label htmlFor={id} className="course-form__label">
        {field.label} {required && <RequiredMark />}
      </label>
      {field.type === 'textarea' ? (
        <textarea {...sharedProps} rows={4} />
      ) : (
        <input type={field.type} {...sharedProps} />
      )}
      {error && <ErrorText id={errorId} message={error} />}
    </div>
  )
}

function RequiredMark() {
  return (
    <span className="course-form__required">
      <span aria-hidden="true">*</span>
      <span className="sr-only">(required)</span>
    </span>
  )
}

function ErrorText({ id, message }) {
  return (
    <p id={id} className="course-form__error" role="alert">
      {message}
    </p>
  )
}

export default RegistrationForm
