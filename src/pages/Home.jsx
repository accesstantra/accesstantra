import { Link } from 'react-router-dom'
import initiatives from '../data/initiatives.js'
import { YOUTUBE_URL } from '../data/site.js'
import WhatsAppJoinForm from '../components/WhatsAppJoinForm.jsx'
import './Home.css'

// The site title, tagline, and logo now live in the global header, so Home
// starts straight into its content sections. The header provides this page's
// <h1>; the sections below are all <h2>.
function Home() {
  return (
    <>
      <section className="section" aria-labelledby="home-announcements">
        <div className="container">
          <h2 id="home-announcements">Announcements</h2>
          <h3>Accessible Tantra Helen Keller Quiz Competition – 2026</h3>
          <p lang="hi">
            हेलेन केलर जी के जन्मदिवस के अवसर पर, अधिकाधिक विद्यार्थियों एवं कार्यरत
            पेशेवरों की सहभागिता हेतु यह प्रतियोगिता सप्ताहांत में{' '}
            <strong>28 जून 2026 (रविवार)</strong> को आयोजित की जाएगी।
          </p>
          <ul lang="hi">
            <li>
              <strong>दिनांक:</strong> 28 जून 2026 (रविवार)
            </li>
            <li>
              <strong>समय:</strong> शाम 4:45 बजे (अस्थायी)
            </li>
            <li>
              <strong>माध्यम:</strong> Google Forms (ऑनलाइन)
            </li>
            <li>
              <strong>पंजीकरण:</strong> पूर्णतः निःशुल्क · आकर्षक पुरस्कार
            </li>
            <li>
              <strong>पंजीकरण की अंतिम तिथि:</strong> 28 जून 2026, दोपहर 3 बजे से पूर्व
            </li>
          </ul>
          <p lang="hi">
            भाग लेने हेतु नीचे दिए गए WhatsApp समूह से जुड़ना अनिवार्य है — सभी नियम, अंतिम
            समय एवं आवश्यक निर्देश केवल समूह में साझा किए जाएँगे। प्रश्न हेलेन केलर जी के जीवन,
            उनसे जुड़े व्यक्तित्वों एवं महत्वपूर्ण घटनाओं पर आधारित होंगे।
          </p>
          <div className="btn-row">
            <a
              className="btn btn-primary"
              href="https://chat.whatsapp.com/BwnMmteQqDGCEdbI3kG5S6?s=sw&p=a&ilr=1"
              target="_blank"
              rel="noopener noreferrer"
              lang="hi"
            >
              WhatsApp समूह से जुड़ें{' '}
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
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
