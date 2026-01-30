import { useState, useEffect } from 'react';
import { ChevronUp, Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Your Name. Built with React.
            </p>
          </div>

          <div className="footer-section footer-links">
            <button onClick={() => scrollToSection('home')} className="footer-link">
              Home
            </button>
            <button onClick={() => scrollToSection('projects')} className="footer-link">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="footer-link">
              Contact
            </button>
          </div>

          <div className="footer-section footer-social">
            <a
              href="mailto:your.email@example.com"
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://linkedin.com"
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com"
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://twitter.com"
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </footer>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default Footer;
