import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import services from '../data/services.js'
import './Home.css'

function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <img
            src={logo}
            alt="Accessible Tantra logo — the letter A filled with disability and accessibility symbols"
            className="hero__logo"
            width="160"
            height="160"
          />
          <div>
            <h1 id="hero-title">Accessible Tantra</h1>
            <p className="lead">
              A non-profit working to make every <em>tantra</em> — every system, public or
              private — accessible to differently-abled people across India.
            </p>
            <div className="btn-row">
              <Link to="/what-we-do" className="btn btn-primary">
                What we do
              </Link>
              <Link to="/about" className="btn btn-outline">
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <h2 id="services-title">How we help</h2>
          <ul className="grid grid-2 grid-3 card-list" role="list">
            {services.map((service) => (
              <li key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="mission-title">
        <div className="container">
          <h2 id="mission-title">Why we exist</h2>
          <p className="lead">
            Many accessibility efforts wait for people to find them. We go door to door
            instead — reaching differently-abled people where they are.
          </p>
          <p className="stat">
            <strong>52.2%</strong> — literacy rate among persons with disabilities in India,
            against roughly 80% for the general population.
          </p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
