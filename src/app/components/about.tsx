import React from "react";
import "./about.css";

const About = () => (
  <section className="about-section" id="about">
    <div className="about-container">
      <h2 className="about-title">About Xtravel</h2>
      <p className="about-desc">
        Xtravel is your gateway to the world’s most breathtaking destinations. We help travelers discover, plan, and experience unforgettable journeys across India and beyond. Our platform features top-rated places, real customer reviews, and expert travel tips to make your adventure seamless and memorable.
      </p>
      <div className="about-highlights">
        <div className="about-card">
          <span className="about-icon">🌏</span>
          <h3>Global Destinations</h3>
          <p>Explore the best places in India, France, USA, and more.</p>
        </div>
        <div className="about-card">
          <span className="about-icon">⭐</span>
          <h3>Trusted Reviews</h3>
          <p>Read real experiences from fellow travelers.</p>
        </div>
        <div className="about-card">
          <span className="about-icon">🎉</span>
          <h3>Unique Experiences</h3>
          <p>Find hidden gems and local adventures curated for you.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;