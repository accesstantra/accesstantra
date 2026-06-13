import { Link, useParams } from 'react-router-dom'
import { getProgram } from '../data/programs.js'
import RegistrationForm from '../components/RegistrationForm.jsx'

function ProgramPage() {
  const { programId } = useParams()
  const program = getProgram(programId)

  // Program was removed or the link is stale — fail gracefully.
  if (!program) {
    return (
      <section className="page-hero" aria-labelledby="program-missing">
        <div className="container">
          <h1 id="program-missing">Not available</h1>
          <p className="lead">
            This program isn&rsquo;t available right now. Please check our{' '}
            <Link to="/what-we-do">work areas</Link> or{' '}
            <Link to="/contact">contact us</Link>.
          </p>
        </div>
      </section>
    )
  }

  // Build the info cards from whichever content blocks this program defines.
  const blocks = [
    { heading: 'What you will learn', items: program.learn },
    { heading: 'Who it’s for', items: program.audience },
    { heading: 'Highlights', items: program.highlights },
  ].filter((block) => block.items && block.items.length > 0)

  return (
    <>
      <section className="page-hero" aria-labelledby="program-title">
        <div className="container">
          <h1 id="program-title">{program.title}</h1>
          {program.subtitle && <p className="lead">{program.subtitle}</p>}
          {program.meta && (
            <p>
              {Object.entries(program.meta).map(([key, value], i) => (
                <span key={key}>
                  {i > 0 && <span aria-hidden="true"> · </span>}
                  <strong>{key}:</strong> {value}
                </span>
              ))}
            </p>
          )}
        </div>
      </section>

      {(program.intro || blocks.length > 0) && (
        <section className="section">
          <div className="container">
            {program.intro && <p className="lead">{program.intro}</p>}
            {blocks.length > 0 && (
              <div
                className={`grid ${blocks.length > 1 ? 'grid-2' : ''}`}
                style={{ marginTop: '1.5rem' }}
              >
                {blocks.map((block) => (
                  <div className="card" key={block.heading}>
                    <h2>{block.heading}</h2>
                    <ul>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="section section--alt" aria-labelledby="program-form">
        <div className="container">
          <h2 id="program-form">{program.formHeading || 'Registration form'}</h2>
          {program.formIntro && <p>{program.formIntro}</p>}

          {program.form.type === 'embed' ? (
            <iframe
              className="program-embed"
              src={program.form.src}
              title={`${program.title} form`}
              loading="lazy"
            >
              Loading…
            </iframe>
          ) : (
            <RegistrationForm form={program.form} programTitle={program.title} />
          )}
        </div>
      </section>
    </>
  )
}

export default ProgramPage
