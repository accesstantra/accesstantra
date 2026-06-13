import { Link } from 'react-router-dom'
import './Footer.css'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/initiatives', label: 'Initiatives' },
  { to: '/courses', label: 'Courses' },
  { to: '/announcements', label: 'Announcements' },
  { to: '/contact', label: 'Contact' },
  { to: '/about', label: 'About' },
]

const social = [
  { name: 'WhatsApp Channel', href: 'https://whatsapp.com/channel/0029VbD4Ydn2P59g03ah4T3D' },
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
