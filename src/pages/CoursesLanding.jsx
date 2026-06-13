import { Link } from 'react-router-dom'
import courses, { coursesLanding } from '../data/courses.js'

function StandingLink({ link }) {
  const className = `btn btn-${link.variant || 'primary'}`
  return link.href ? (
    <a className={className} href={link.href} target="_blank" rel="noopener noreferrer">
      {link.label} <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    <Link className={className} to={link.to}>
      {link.label}
    </Link>
  )
}

function CoursesLanding() {
  const upcoming = courses.filter((course) => course.upcoming)

  return (
    <>
      <section className="page-hero" aria-labelledby="courses-title">
        <div className="container">
          <h1 id="courses-title">{coursesLanding.title}</h1>
          <p className="lead">{coursesLanding.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Upcoming courses</h2>
          {upcoming.length > 0 ? (
            <ul className="grid grid-2 card-list" role="list">
              {upcoming.map((course) => (
                <li key={course.id} className="card">
                  <h3>
                    <Link to={`/courses/${course.id}`}>{course.title}</Link>
                  </h3>
                  <p>{course.tagline}</p>
                  {course.meta && (
                    <p className="content-meta">
                      {Object.entries(course.meta).map(([key, value], i) => (
                        <span key={key}>
                          {i > 0 && <span aria-hidden="true"> · </span>}
                          <strong>{key}:</strong> {value}
                        </span>
                      ))}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="lead">{coursesLanding.noCoursesMessage}</p>
          )}

          <div className="btn-row">
            {coursesLanding.standingLinks.map((link) => (
              <StandingLink key={link.label} link={link} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CoursesLanding
