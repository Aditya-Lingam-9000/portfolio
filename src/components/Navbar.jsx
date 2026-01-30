import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Timeline', id: 'timeline' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar-container">
          <button
            onClick={() => scrollToSection('home')}
            className="navbar-logo"
          >
            𝔸𝔻𝕀𝕋𝕐𝔸 | AI&ML
          </button>

          <button
            className="navbar-hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="navbar-menu">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="navbar-link"
              >
                {link.name}
              </button>
            ))}
            <a
              href="/resume.pdf"
              className="navbar-cv-btn"
              download
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="mobile-menu-link"
            >
              {link.name}
            </button>
          ))}
          <a
            href="/resume.pdf"
            className="mobile-menu-cv-btn"
            download
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
