import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import RegistrationForm from './RegistrationForm.jsx'
import LanguageToggle from './LanguageToggle.jsx'
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
// When the page provides a `hi` object ({ intro, sections, formIntro }), a
// single English / हिन्दी toggle switches the entire description to Hindi.
function ContentPage({ page }) {
  const formHeadingRef = useRef(null)
  const [lang, setLang] = useState('en')

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
  const hasEmbeddedForm = Boolean(page.form && page.form.src)
  const hasHindi = Boolean(page.hi)
  // Description fields (intro, sections, formIntro) come from the Hindi object
  // when Hindi is selected; everything else stays in English.
  const desc = hasHindi && lang === 'hi' ? page.hi : page
  const descLang = hasHindi ? lang : undefined

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
            {hasHindi && (
              <div className="lang-bar">
                <span className="lang-bar__label">Read this page in:</span>
                <LanguageToggle lang={lang} onChange={setLang} />
              </div>
            )}

            <div lang={descLang}>
              {desc.intro && (
                <div className="lead">
                  <Paragraphs text={desc.intro} />
                </div>
              )}
              {desc.sections?.map((section, i) => (
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
            </div>

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
            {desc.formIntro && (
              <div lang={descLang}>
                <Paragraphs text={desc.formIntro} />
              </div>
            )}
            {page.form?.type === 'embed' && page.form.src && (
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
