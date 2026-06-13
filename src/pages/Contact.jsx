import ContactForm from '../components/ContactForm.jsx'

function Contact() {
  return (
    <>
      <section className="page-hero" aria-labelledby="contact-title">
        <div className="container">
          <h1 id="contact-title">Contact</h1>
          <p className="lead">
            We’d love to hear from you. Reach out through any of the channels below, or send us a
            message directly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Ways to reach us</h2>
          <p>
            Phone / WhatsApp: <a href="tel:+917260920093">+91 72609 20093</a>
          </p>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="contact-message">
        <div className="container">
          <h2 id="contact-message">Send us a message</h2>
          <p>
            Enter a subject and your message, then choose <strong>Send mail</strong> — Gmail will
            open in a new tab with your message ready to send to us.
          </p>
          <ContactForm />
        </div>
      </section>

      <section className="section" aria-labelledby="contact-host">
        <div className="container">
          <h2 id="contact-host">Host a webinar, workshop, or training</h2>
          <p>
            If you wish to host a webinar, workshop, or training in the field of accessibility or
            technology, we&rsquo;d be glad to collaborate. Please reach out using any of the
            contacts above and our team will get back to you.
          </p>
          <p>
            Our experts will be glad to extend support in both online mode and offline mode (in
            limited places).
          </p>
        </div>
      </section>
    </>
  )
}

export default Contact
