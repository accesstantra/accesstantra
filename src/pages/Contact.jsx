const channels = [
  { term: 'Email', label: 'accesstantra@gmail.com', href: 'mailto:accesstantra@gmail.com' },
  { term: 'Phone', label: '+91 72609 20093', href: 'tel:+917260920093' },
  {
    term: 'WhatsApp',
    label: 'Follow our channel',
    href: 'https://whatsapp.com/channel/0029VbD4Ydn2P59g03ah4T3D',
    external: true,
  },
  {
    term: 'Instagram',
    label: '@accessibletantra',
    href: 'https://www.instagram.com/accessibletantra/',
    external: true,
  },
  {
    term: 'Facebook',
    label: 'Accessible Tantra',
    href: 'https://www.facebook.com/profile.php?id=61590311893370',
    external: true,
  },
  {
    term: 'LinkedIn',
    label: 'Accessible Tantra',
    href: 'https://www.linkedin.com/in/accessible-tantra-310184414/',
    external: true,
  },
  {
    term: 'YouTube',
    label: '@accessibletantra',
    href: 'https://www.youtube.com/@accessibletantra',
    external: true,
  },
]

function Contact() {
  return (
    <>
      <section className="page-hero" aria-labelledby="contact-title">
        <div className="container">
          <h1 id="contact-title">Contact</h1>
          <p className="lead">
            We’d love to hear from you. Reach out through any of the channels below.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Ways to reach us</h2>
          <dl className="contact-list">
            {channels.map((channel) => (
              <div key={channel.term} className="contact-list__row">
                <dt>{channel.term}</dt>
                <dd>
                  {channel.external ? (
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${channel.term}: ${channel.label} (opens in a new tab)`}
                    >
                      {channel.label}
                    </a>
                  ) : (
                    <a href={channel.href}>{channel.label}</a>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="contact-host">
        <div className="container">
          <h2 id="contact-host">Host a webinar, workshop, or training</h2>
          <p>
            If you wish to host a webinar, workshop, or training in the field of accessibility or
            technology, we&rsquo;d be glad to collaborate. Please reach out using any of the
            contacts above and our team will get back to you.
          </p>
        </div>
      </section>
    </>
  )
}

export default Contact
