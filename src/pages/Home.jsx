import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import initiatives from '../data/initiatives.js'
import { YOUTUBE_URL } from '../data/site.js'
import WhatsAppJoinForm from '../components/WhatsAppJoinForm.jsx'
import './Home.css'

function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <img
            src={logo}
            alt="Accessible Tantra logo"
            className="hero__logo"
            width="130"
            height="130"
          />
          <h1 id="hero-title">
            Making every system and every space accessible across disabilities
          </h1>
          <p className="hero__tagline">Training · Mentorship · Collaboration · Innovation</p>
          <p className="lead">
            Building an inclusive India where persons with disabilities can participate with
            dignity, independence, and equal opportunity.
          </p>
          <div className="btn-row">
            <Link to="/courses" className="btn btn-primary">
              Join Us
            </Link>
            <Link to="/programs/collaboration" className="btn btn-outline">
              Partner With Us
            </Link>
            <Link to="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="home-why">
        <div className="container">
          <h2 id="home-why">Why Accessible Tantra?</h2>
          <p>
            India is home to more than <strong>2.68 crore</strong> persons with disabilities
            (Census 2011) — and these figures are widely considered an underestimate. Despite
            progress in disability rights, accessibility and inclusion remain a challenge across
            education, employment, technology, transport, healthcare, and public life.
          </p>
          <p>
            Too often, accessibility efforts remain fragmented — isolated by disability, region,
            or sector. But accessibility is a societal issue, not a disability-specific one.
            Accessible Tantra is a collaborative movement: a common platform where individuals,
            organisations, experts, and advocates come together to identify barriers, share
            solutions, build capacity, and work towards a more accessible society.
          </p>
          <div className="btn-row">
            <Link to="/about" className="btn btn-outline">
              Learn more about us
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="home-initiatives">
        <div className="container">
          <h2 id="home-initiatives">Our initiatives</h2>
          <ul className="grid grid-2 grid-3 card-list" role="list">
            {initiatives.map((item) => (
              <li key={item.id} className="card">
                <h3>
                  <Link to={`/programs/${item.id}`}>{item.title}</Link>
                </h3>
                <p>{item.tagline}</p>
              </li>
            ))}
          </ul>
          <div className="btn-row">
            <Link to="/initiatives" className="btn btn-outline">
              Explore all initiatives
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="home-announcements">
        <div className="container">
          <h2 id="home-announcements">Announcements</h2>
          <p>
            Registrations are open for our <strong>Free 21-Day Intermediate to Advanced Excel
            Training</strong> — designed for visually impaired learners and screen reader users.
          </p>
          <div className="btn-row">
            <Link to="/courses/excel" className="btn btn-primary">
              Excel training details
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="home-youtube">
        <div className="container">
          <h2 id="home-youtube">Watch and learn on YouTube</h2>
          <p>
            Explore free tutorials and accessibility-related content — from smartphone and
            computer skills to assistive technology tips and screen-reader techniques.
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
              Visit our YouTube channel <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="home-whatsapp">
        <div className="container">
          <h2 id="home-whatsapp">Computer support on WhatsApp</h2>
          <p>Get help with computers, phones, and assistive technology.</p>
          <WhatsAppJoinForm />
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="home-webinar">
        <div className="container">
          <h2 id="home-webinar">Host a webinar or workshop</h2>
          <p>
            If you wish to host a webinar, workshop, or training in the field of accessibility or
            technology, we&rsquo;d be glad to collaborate. Please reach out to us.
          </p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn-primary">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
