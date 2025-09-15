"use client";
import React, { useState } from "react";
import "./place.css";

const places = [
  {
    country: "India",
    name: "Taj Mahal",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=80",
    description: "A symbol of love and one of the most visited monuments in the world.",
    reviews: [
      { user: "Amit", rating: 5, comment: "Breathtaking beauty and history!" },
      { user: "Sara", rating: 4, comment: "Crowded but worth every moment." }
    ],
    avgRating: 4.8,
    visitors: "7M+"
  },
  {
    country: "India",
    name: "Goa Beaches",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description: "Famous for its vibrant nightlife, golden sands, and blue waters.",
    reviews: [
      { user: "Priya", rating: 5, comment: "Perfect for relaxation and fun!" },
      { user: "John", rating: 4, comment: "Loved the beach parties." }
    ],
    avgRating: 4.7,
    visitors: "6M+"
  },
  {
    country: "France",
    name: "Eiffel Tower",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    description: "Iconic Paris landmark with stunning city views.",
    reviews: [
      { user: "Marie", rating: 5, comment: "Romantic and magical at night!" },
      { user: "Alex", rating: 4, comment: "Must-see in Paris." }
    ],
    avgRating: 4.9,
    visitors: "7M+"
  },
  {
    country: "USA",
    name: "Grand Canyon",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    description: "A natural wonder with breathtaking views and hiking trails.",
    reviews: [
      { user: "Emily", rating: 5, comment: "Unforgettable experience!" },
      { user: "Mike", rating: 5, comment: "Nature at its best." }
    ],
    avgRating: 4.95,
    visitors: "5M+"
  }
];

const Place = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="place-section">
      <h2 className="place-title">Top Travel Destinations</h2>
      <div className="place-tabs">
        {places.map((place, idx) => (
          <button
            key={place.name}
            className={`place-tab${selected === idx ? " active" : ""}`}
            onClick={() => setSelected(idx)}
          >
            {place.country} - {place.name}
          </button>
        ))}
      </div>
      <div className="place-card">
        <img src={places[selected].image} alt={places[selected].name} className="place-img" />
        <div className="place-info">
          <h3 className="place-name">{places[selected].name}</h3>
          <p className="place-desc">{places[selected].description}</p>
          <div className="place-meta">
            <span className="place-rating">⭐ {places[selected].avgRating} / 5</span>
            <span className="place-visitors">{places[selected].visitors} visitors/year</span>
          </div>
          <div className="place-reviews">
            <h4>Customer Reviews</h4>
            {places[selected].reviews.map((review, idx) => (
              <div key={idx} className="place-review">
                <span className="review-user">{review.user}:</span>
                <span className="review-rating">⭐ {review.rating}</span>
                <span className="review-comment">{review.comment}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Place;