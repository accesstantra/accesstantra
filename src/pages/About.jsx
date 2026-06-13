import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-title">
        <div className="container">
          <h1 id="about-title">About us</h1>
          <p className="lead">
            Accessible Tantra is a social initiative committed to making every system, every
            space, and every opportunity accessible for persons with disabilities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Who we are</h2>
          <p>
            Accessibility cannot be achieved in isolation — it requires collaboration across
            disabilities, sectors, and communities. Accessible Tantra is a collaborative
            movement that brings individuals, organisations, institutions, experts, and
            advocates together to identify barriers, share solutions, build capacity, and work
            collectively towards a more accessible society. Our approach extends beyond offices
            and conference halls: through community outreach, door-to-door awareness, digital
            literacy, mentorship, advocacy, and resource sharing, we aim to bring accessibility
            directly to the people who need it most.
          </p>

          <h2>Our journey</h2>
          <p>
            Accessible Tantra traces its roots to <strong>Android Mobile Café</strong>, a
            YouTube-based initiative launched in June 2018 to make technology more accessible
            for persons with visual impairments. Initially focused on Android smartphones, screen
            readers, mobile applications, and digital services, it gradually expanded to include
            computer training, internet usage, digital literacy, and assistive technologies.
          </p>
          <p>
            During the COVID-19 pandemic, online training programmes and computer classes enabled
            participants from across India to develop digital skills and access technology more
            effectively. Interactions with students, professionals, parents, and persons with
            disabilities highlighted that accessibility extends far beyond technology — education,
            employment, information, and public services continue to present barriers.
          </p>
          <p>
            Inspired by these learnings and the evolving needs of the community, Android Mobile
            Café was reimagined as <strong>Accessible Tantra in 2026</strong>, with a wider
            vision of promoting accessibility, inclusion, awareness, collaboration, mentorship,
            and digital empowerment across all spheres of society.
          </p>

          <h2>The need</h2>
          <ul>
            <li>
              More than <strong>2.68 crore</strong> persons with disabilities live in India
              (Census 2011) — widely considered an underestimate.
            </li>
            <li>
              Barriers persist across education, employment, technology, transport, healthcare,
              and public services.
            </li>
            <li>
              Efforts often remain fragmented — isolated by disability, region, or sector —
              while accessibility is a shared, societal responsibility.
            </li>
          </ul>

          <h2>Our vision</h2>
          <p>
            An inclusive India where accessibility is a lived reality — visible in every system,
            every space, and every opportunity — and where persons with disabilities participate
            with dignity, independence, and equal opportunity.
          </p>

          <div className="btn-row">
            <Link to="/initiatives" className="btn btn-primary">
              Explore our initiatives
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
