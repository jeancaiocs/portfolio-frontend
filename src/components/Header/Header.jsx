import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const links = ['home', 'about', 'skills', 'projects', 'contact']
  const labels = { home: 'Home', about: 'Sobre', skills: 'Habilidades', projects: 'Projetos', contact: 'Contato' }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">

        {/* Logo */}
        <button className="header-logo" onClick={() => goTo('home')}>
          &lt;JC /&gt;
        </button>

        {/* Nav desktop */}
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {links.map(id => (
            <button key={id} onClick={() => goTo(id)}>{labels[id]}</button>
          ))}
        </nav>

        {/* Hamburger mobile */}
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
