import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

const links = [
  { to: '/', key: 'nav.home', end: true },
  { to: '/blog', key: 'nav.blog' },
  { to: '/projects', key: 'nav.projects' },
]

function Navbar() {
  const { t } = useLanguage()

  return (
    <header className="navbar-shell">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            <span className="navbar-logo__mark" aria-hidden="true">M</span>
            s0ftcrafter
          </Link>
          <ThemeToggle />
          <LanguageToggle />
        </div>
        <ul className="navbar-links">
          {links.map(({ to, key, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                {t(key)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
