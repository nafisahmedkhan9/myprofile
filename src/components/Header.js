import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
      <div className="nav-content">
        <div className="logo">Nafis Khan</div>
        
        {/* Desktop Navigation */}
        <ul className="nav-links desktop-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Mobile Navigation */}
        <ul className={`nav-links mobile-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
          <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
          <li><a href="#education" onClick={closeMobileMenu}>Education</a></li>
          <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
          <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
