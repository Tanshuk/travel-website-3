"use client";
import React, { useRef, useState } from "react";
import "./hero.css";

const images = [
  {
    url: "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg",
    name: "Mountain Escape",
    link: "https://unsplash.com/photos/1506744038136-46273834b3fb"
  },
  {
    url: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg",
    name: "Forest Adventure",
    link: "https://unsplash.com/photos/1465156799763-2c087c332922"
  },
  {
    url:"https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg",
    name: "Beach Paradise",
    link: "https://unsplash.com/photos/1519125323398-675f0ddb6308"
  },
  {
    url: "https://images.pexels.com/photos/2147487/pexels-photo-2147487.jpeg",
    name: "City Lights",
    link: "https://unsplash.com/photos/1500534314209-a25ddb2bd429"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Manual slide change
  const goToSlide = (idx: number) => {
    setCurrent(idx);
  };

  // Next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="hero-slider-section">
      <div className="hero-slider-wrapper">
        <div
          className="hero-slider"
          ref={sliderRef}
          style={{
            transform: `translateX(-${current * 100}vw)`,
            transition: "transform 1.2s cubic-bezier(.86,-0.01,.15,1.01)"
          }}
        >
          {images.map((img, idx) => (
            <div
              className="hero-slide"
              key={img.url}
              style={{
                backgroundImage: `url('${img.url}')`
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-image-name">
                <a
                  href={img.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-image-link"
                >
                  {img.name}
                </a>
              </div>
              <div className="hero-content">
                <h1 className="hero-title">
                  Discover Your Next Adventure
                </h1>
                <p className="hero-desc">
                  Explore breathtaking destinations, unique experiences, and unforgettable journeys.
                </p>
                <a href="#explore" className="hero-btn">
                  Start Exploring
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Manual Controls */}
        <button className="hero-arrow hero-arrow-left" onClick={prevSlide} aria-label="Previous">
          &#8592;
        </button>
        <button className="hero-arrow hero-arrow-right" onClick={nextSlide} aria-label="Next">
          &#8594;
        </button>
        <div className="hero-dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot${current === idx ? " active" : ""}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;