import React from 'react';
import '../index.css';

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        
        <ul className="nav-links">
          <li><a href="home">Home</a></li>
          <li><a href="about">About Me</a></li>
          <li><a href="skills">Skills</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;