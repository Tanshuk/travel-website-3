import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-container">
      <div className="footer-logo">Xtravel</div>
      <p className="footer-desc">
        Discover the world with Xtravel. Your adventure starts here!
      </p>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#book">Book</a>
        <a href="/place">Place</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>Email: <a href="mailto:support@xtravel.com">support@xtravel.com</a></p>
        <p>Phone: <a href="tel:+911234567890">+91 12345 67890</a></p>
        <p>Address: 123, Travel Street, New Delhi, India</p>
      </div>
      <div className="footer-social">
        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"> 
          <span role="img" aria-label="Instagram">📸</span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
          <span role="img" aria-label="Twitter">🐦</span>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
          <span role="img" aria-label="Facebook">📘</span>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
          <span role="img" aria-label="YouTube">▶️</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
          <span role="img" aria-label="LinkedIn">💼</span>
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener" aria-label="WhatsApp">
          <span role="img" aria-label="WhatsApp">💬</span>
        </a>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Xtravel. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;