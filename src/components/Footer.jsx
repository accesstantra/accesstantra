import { Link } from 'react-router-dom'
import './Footer.css'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/what-we-do', label: 'What We Do' },
  { to: '/contact', label: 'Contact' },
]

// Placeholder channels for this first iteration — links resolve to "#" until real
// handles are available. Each link text names the channel for screen readers.
const social = ['Instagram', 'Facebook', 'LinkedIn', 'YouTube']

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__name">Accessible Tantra</p>
          <p className="site-footer__tagline" lang="hi">
            समावेशी भारत का मूल मंत्र
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="site-footer__heading">Quick links</h2>
          <ul className="site-footer__list" role="list">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="site-footer__heading">Connect</h2>
          <ul className="site-footer__list" role="list">
            {social.map((name) => (
              <li key={name}>
                <a href="#" aria-label={`${name} (link coming soon)`}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p className="container">© {year} Accessible Tantra. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
