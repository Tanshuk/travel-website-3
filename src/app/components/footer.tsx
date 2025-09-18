"use client";
import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      // Mock API call (replace with real endpoint in production)
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSuccess("Subscribed successfully!");
        setEmail("");
      } else {
        setError("Subscription failed. Try again.");
      }
    } catch {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">Xtravel</div>
        <p className="footer-desc">
          Discover the world with Xtravel. Your adventure starts here!
        </p>
        <div className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#book" className="footer-link">Book</a>
          <a href="/place" className="footer-link">Place</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: <a href="mailto:support@xtravel.com" className="footer-contact-link">support@xtravel.com</a></p>
          <p>Phone: <a href="tel:+911234567890" className="footer-contact-link">+91 12345 67890</a></p>
          <p>Address: 123, Travel Street, New Delhi, India</p>
        </div>
        <div className="footer-newsletter">
          <h4>Subscribe to Our Newsletter</h4>
          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
                setSuccess("");
              }}
              placeholder="Enter your email"
              className={`newsletter-input ${error ? "newsletter-input-error" : ""}`}
              aria-label="Newsletter email"
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
          {error && <p className="newsletter-error">{error}</p>}
          {success && <p className="newsletter-success">{success}</p>}
        </div>
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="footer-social-link">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" className="footer-social-link">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="footer-social-link">
            <FaFacebookF />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" className="footer-social-link">
            <FaYoutube />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" className="footer-social-link">
            <FaLinkedinIn />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener" aria-label="WhatsApp" className="footer-social-link">
            <FaWhatsapp />
          </a>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Xtravel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;