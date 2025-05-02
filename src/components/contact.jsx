import React from 'react';
import '../index.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>You can contact me with this:</p>
      <div className="social-buttons">
        <a href="https://www.facebook.com/katkat.dapatnapo" className="btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <img src="/Facebook.png"  alt="Facebook" />
        </a>
        <a href="https://github.com/kitty1926" className="btn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src="/git.png" alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/kiitkat_96/" className="btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/insta.jpg" alt="Instagram" />
        </a>
      </div>
    </section>
  );
}

export default Contact;