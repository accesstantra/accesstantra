import { Link, useParams } from 'react-router-dom'
import { getCourse } from '../data/courses.js'
import CourseForm from '../components/CourseForm.jsx'

function CoursePage() {
  const { courseId } = useParams()
  const course = getCourse(courseId)

  // Course was removed or the link is stale — fail gracefully.
  if (!course) {
    return (
      <section className="page-hero" aria-labelledby="course-missing">
        <div className="container">
          <h1 id="course-missing">Course not available</h1>
          <p className="lead">
            This course isn&rsquo;t available right now. Please check our{' '}
            <Link to="/what-we-do">work areas</Link> or{' '}
            <Link to="/contact">contact us</Link>.
          </p>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="page-hero" aria-labelledby="course-title">
        <div className="container">
          <h1 id="course-title">{course.title}</h1>
          <p className="lead">{course.subtitle}</p>
          <p>
            <strong>Starts:</strong> {course.startDate} &nbsp;·&nbsp;{' '}
            <strong>Cost:</strong> Free &nbsp;·&nbsp;{' '}
            <strong>Phone / WhatsApp:</strong> {course.contact}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="lead">{course.intro}</p>

          <div className="grid grid-2" style={{ marginTop: '1.5rem' }}>
            <div className="card">
              <h2>What you will learn</h2>
              <ul>
                {course.learn.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h2>Who can join</h2>
              <ul>
                {course.audience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h2 style={{ marginTop: '1rem' }}>Highlights</h2>
              <ul>
                {course.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="register-title">
        <div className="container">
          <h2 id="register-title">Registration form</h2>
          <p>Seats are limited. Please fill in your details below to register.</p>
          <CourseForm form={course.form} courseTitle={course.title} />
        </div>
      </section>
    </>
  )
}

export default CoursePage
