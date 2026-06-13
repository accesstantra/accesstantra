function About() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-title">
        <div className="container">
          <h1 id="about-title">About us</h1>
          <p className="lead">
            Accessible Tantra is a non-profit ensuring that every <em>tantra</em> — the
            machinery of government or private life — is accessible to the differently-abled.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>A flowing river, not a static pond</h2>
          <p>
            Many good organisations already work on accessibility, but often statically —
            like a pond that only reaches those who come to it. In a country where awareness
            is still low, that isn’t enough. We take a dynamic, door-to-door approach,
            reaching differently-abled people where they live rather than waiting for them to
            find us.
          </p>

          <h2>The need</h2>
          <ul>
            <li>
              <strong>2.68 crore</strong> persons with disabilities in India (Census 2011),
              nearly 70% of them in rural areas.
            </li>
            <li>
              <strong>52.2%</strong> literacy among persons with disabilities, far below the
              general rate.
            </li>
            <li>
              Only <strong>1 in 5</strong> complete secondary education or higher.
            </li>
          </ul>

          <h2>Our goal</h2>
          <p>
            Through digital skills, accessibility training, and mentoring, we want to turn
            scattered efforts into a movement of inclusion that reaches every corner of India.
          </p>
        </div>
      </section>
    </>
  )
}

export default About
