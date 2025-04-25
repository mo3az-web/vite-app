import './navbar.css';
import React, { useState } from 'react';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (

    <nav className="navbar">
        <div className="logos">Moaz Ahmed</div>
        <button className= "navbar-toggle" onClick={toggleMenu}>
        ☰

        </button>
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#Skills">skills</a></li>
        <li><a href="#more">my life and more about me</a></li>
      </ul>
    </nav>
    );
}

export default Navbar;