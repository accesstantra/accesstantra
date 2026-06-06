import { Link } from 'react-router-dom'
import './Footer.css'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/what-we-do', label: 'What We Do' },
  { to: '/contact', label: 'Contact' },
]

const social = [
  { name: 'Instagram', href: 'https://www.instagram.com/accessibletantra/' },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61590311893370' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/accessible-tantra-310184414/' },
  { name: 'YouTube', href: 'https://www.youtube.com/@accessibletantra' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__name">Accessible Tantra</p>
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
            {social.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.name} (opens in a new tab)`}
                >
                  {item.name}
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
