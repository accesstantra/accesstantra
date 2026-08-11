import { Link } from 'react-router-dom'
import initiatives from '../data/initiatives.js'
import announcementsData from '../data/announcements.json'
import { YOUTUBE_URL } from '../data/site.js'
import WhatsAppJoinForm from '../components/WhatsAppJoinForm.jsx'
import banner from '../assets/banner.jpeg'
import './Home.css'

const announcements = announcementsData.announcements

function AnnouncementButton({ label, link, variant }) {
  const className = `btn btn-${variant || 'primary'}`
  const isExternal = /^https?:\/\//.test(link)
  return isExternal ? (
    <a className={className} href={link} target="_blank" rel="noopener noreferrer">
      {label} <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    <Link to={link} className={className}>
      {label}
    </Link>
  )
}

// The site title, tagline, and logo now live in the global header, so Home
// starts straight into its content sections. The header provides this page's
// <h1>; the sections below are all <h2>.
function Home() {
  return (
    <>
      <section className="section home-banner" aria-labelledby="home-banner-heading">
        <div className="container">
          <h2 id="home-banner-heading" className="sr-only">
            Accessible Tantra
          </h2>
          <img
            src={banner}
            className="home-banner__img"
            width="1299"
            height="891"
            alt="Accessible Tantra — Democratizing access, empowering abilities. Making every system and every space accessible across disabilities through education, technology, employment, mentorship, and community. An illustration shows diverse hands using assistive technology, with a bionic hand and a human hand meeting in a handshake to represent collaboration."
          />
        </div>
      </section>

      <section className="section" aria-labelledby="home-announcements">
        <div className="container">
          <h2 id="home-announcements">Announcements</h2>
          {announcements.map((item, i) => (
            <div key={item.title || i}>
              <p>
                {item.title && <strong>{item.title}:</strong>} {item.body}
              </p>
              {item.buttonLabel && item.link && (
                <div className="btn-row">
                  <AnnouncementButton
                    label={item.buttonLabel}
                    link={item.link}
                    variant={item.variant}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="home-why">
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

      <section className="section" aria-labelledby="home-initiatives">
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
          <p>Get help with computers and assistive technology.</p>
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
          <p>
            Our experts will be glad to extend support in both online mode and offline mode (in
            limited places).
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
