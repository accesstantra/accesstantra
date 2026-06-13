import { useRef } from 'react'
import { Link } from 'react-router-dom'
import RegistrationForm from './RegistrationForm.jsx'
import TranslateToggle from './TranslateToggle.jsx'
import './ContentPage.css'

function Paragraphs({ text }) {
  const items = Array.isArray(text) ? text : [text]
  return items.map((paragraph, i) => <p key={i}>{paragraph}</p>)
}

function Ctas({ ctas }) {
  if (!ctas || ctas.length === 0) return null
  return (
    <div className="btn-row">
      {ctas.map((cta) => {
        const className = `btn btn-${cta.variant || 'primary'}`
        return cta.href ? (
          <a
            key={cta.label}
            className={className}
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cta.label} <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : (
          <Link key={cta.label} className={className} to={cta.to}>
            {cta.label}
          </Link>
        )
      })}
    </div>
  )
}

// Generic, data-driven page used for initiatives, courses, and info pages.
// Renders: hero → (skip-to-form) → intro + sections → optional form → optional
// CTAs / return-home. The page definition shape is documented in the data files.
function ContentPage({ page }) {
  const formHeadingRef = useRef(null)

  if (!page) {
    return (
      <section className="page-hero" aria-labelledby="page-missing">
        <div className="container">
          <h1 id="page-missing">Not available</h1>
          <p className="lead">
            This page isn&rsquo;t available right now. Please return to the{' '}
            <Link to="/">home page</Link> or <Link to="/contact">contact us</Link>.
          </p>
        </div>
      </section>
    )
  }

  const hasFormSection = Boolean(page.formHeading || page.form)
  const hasEmbeddedForm = Boolean(page.form)

  function skipToForm() {
    formHeadingRef.current?.focus()
    formHeadingRef.current?.scrollIntoView()
  }

  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title">{page.title}</h1>
          {page.subtitle && <p className="lead">{page.subtitle}</p>}
          {page.meta && (
            <p className="content-meta">
              {Object.entries(page.meta).map(([key, value], i) => (
                <span key={key}>
                  {i > 0 && <span aria-hidden="true"> · </span>}
                  <strong>{key}:</strong> {value}
                </span>
              ))}
            </p>
          )}
          {hasEmbeddedForm && (
            <p>
              <button type="button" className="btn btn-outline" onClick={skipToForm}>
                Skip to form
              </button>
            </p>
          )}
        </div>
      </section>

      {(page.intro || page.sections) && (
        <section className="section">
          <div className="container">
            {page.intro && (
              <div className="lead">
                <Paragraphs text={page.intro} />
              </div>
            )}
            {page.sections?.map((section, i) => (
              <div className="content-block" key={section.heading || i}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.body && <Paragraphs text={section.body} />}
                {section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {!hasFormSection && <Ctas ctas={page.ctas} />}
          </div>
        </section>
      )}

      {hasFormSection && (
        <section className="section section--alt" aria-labelledby="form-heading">
          <div className="container">
            <h2 id="form-heading" tabIndex={-1} ref={formHeadingRef}>
              {page.formHeading || 'Form'}
            </h2>
            {page.formIntro &&
              (page.formIntroHi ? (
                <TranslateToggle en={page.formIntro} hi={page.formIntroHi} />
              ) : (
                <Paragraphs text={page.formIntro} />
              ))}
            {page.form?.type === 'embed' && (
              <iframe
                className="program-embed"
                src={page.form.src}
                title={`${page.title} form`}
                loading="lazy"
              >
                Loading…
              </iframe>
            )}
            {page.form?.type === 'native' && (
              <RegistrationForm form={page.form} programTitle={page.title} />
            )}
            <Ctas ctas={page.ctas} />
          </div>
        </section>
      )}

      {page.returnHome && (
        <section className="section">
          <div className="container">
            <Link to="/" className="btn btn-outline">
              Return to home
            </Link>
          </div>
        </section>
      )}
    </>
  )
}

export default ContentPage
