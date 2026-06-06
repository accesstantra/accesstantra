// First iteration: real contact details and social handles aren’t available yet,
// so these use generic, clearly-labelled placeholder links.
const channels = [
  { term: 'Email', label: 'Email', href: '#' },
  { term: 'Phone', label: 'Phone', href: '#' },
  { term: 'Instagram', label: 'Instagram', href: '#' },
  { term: 'Facebook', label: 'Facebook', href: '#' },
  { term: 'LinkedIn', label: 'LinkedIn', href: '#' },
  { term: 'YouTube', label: 'YouTube', href: '#' },
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
                  <a href={channel.href} aria-label={`${channel.label} (coming soon)`}>
                    {channel.label}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <p className="lead">Full contact details will be added soon.</p>
        </div>
      </section>
    </>
  )
}

export default Contact
