import services from '../data/services.js'

function WhatWeDo() {
  return (
    <>
      <section className="page-hero" aria-labelledby="wwd-title">
        <div className="container">
          <h1 id="wwd-title">What we do</h1>
          <p className="lead">
            Six areas of work, all aimed at making systems accessible and including
            differently-abled people in education, work, and daily life.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ul className="grid grid-2 card-list" role="list">
            {services.map((service) => (
              <li key={service.title} className="card">
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default WhatWeDo
