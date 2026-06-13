import { Link } from 'react-router-dom'
import initiatives, { initiativesIntro } from '../data/initiatives.js'

function InitiativesOverview() {
  return (
    <>
      <section className="page-hero" aria-labelledby="initiatives-title">
        <div className="container">
          <h1 id="initiatives-title">Our Initiatives</h1>
          <p className="lead">{initiativesIntro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ul className="grid grid-2 grid-3 card-list" role="list">
            {initiatives.map((item) => (
              <li key={item.id} className="card">
                <h2>
                  <Link to={`/programs/${item.id}`}>{item.title}</Link>
                </h2>
                <p>{item.tagline}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default InitiativesOverview
