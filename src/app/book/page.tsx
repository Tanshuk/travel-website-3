"use client";
import React, { useState } from "react";
import "./book.css";
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from "@react-google-maps/api";

const destinations = [
  { name: "Taj Mahal, India", lat: 27.1751, lng: 78.0421 },
  { name: "Goa Beaches, India", lat: 15.2993, lng: 74.1240 },
  { name: "Eiffel Tower, France", lat: 48.8584, lng: 2.2945 },
  { name: "Grand Canyon, USA", lat: 36.1069, lng: -112.1129 }
];

const MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // <--- Insert your key here

const Book = () => {
  const [selected, setSelected] = useState(0);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [days, setDays] = useState(1);
  const [start, setStart] = useState("");
  const [distance, setDistance] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

  // Calculate distance using Haversine formula
  const calculateDistance = async () => {
    setError("");
    setDirections(null);
    if (!start) {
      setDistance(null);
      setError("Please enter your starting location.");
      return;
    }
    const dest = destinations[selected];
    const startCoords = start.split(",").map(Number);
    if (
      startCoords.length !== 2 ||
      isNaN(startCoords[0]) ||
      isNaN(startCoords[1])
    ) {
      setDistance(null);
      setError("Invalid location format. Please use: latitude,longitude");
      return;
    }
    // Haversine formula
    const toRad = (v: number) => (v * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(dest.lat - startCoords[0]);
    const dLng = toRad(dest.lng - startCoords[1]);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(startCoords[0])) *
        Math.cos(toRad(dest.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    setDistance((R * c).toFixed(2));

    // Google Directions API
    if (window.google && window.google.maps) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: { lat: startCoords[0], lng: startCoords[1] },
          destination: { lat: dest.lat, lng: dest.lng },
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            setDirections(null);
          }
        }
      );
    }
  };

  return (
    <section className="book-section" id="book">
      <div className="book-container">
        <h2 className="book-title">Book Your <span className="highlight">Dream Destination</span></h2>
        <p className="book-subtitle">Plan your adventure in a few easy steps.</p>
        <form
          className="book-form"
          onSubmit={e => {
            e.preventDefault();
            calculateDistance();
          }}
        >
          <div className="book-form-group">
            <label htmlFor="destination">Destination</label>
            <select
              id="destination"
              value={selected}
              onChange={e => setSelected(Number(e.target.value))}
              className="book-input"
            >
              {destinations.map((d, idx) => (
                <option value={idx} key={d.name}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
          <div className="book-form-group">
            <label htmlFor="start-location">Your Location <span className="light">(lat,lng)</span></label>
            <input
              id="start-location"
              type="text"
              placeholder="e.g. 28.6139,77.2090"
              value={start}
              onChange={e => setStart(e.target.value)}
              className="book-input"
              required
              autoComplete="off"
            />
          </div>
          <div className="book-form-row">
            <div className="book-form-group">
              <label htmlFor="adults">Adults</label>
              <input
                id="adults"
                type="number"
                min={1}
                value={adults}
                onChange={e => setAdults(Number(e.target.value))}
                className="book-input"
                required
              />
            </div>
            <div className="book-form-group">
              <label htmlFor="children">Children</label>
              <input
                id="children"
                type="number"
                min={0}
                value={children}
                onChange={e => setChildren(Number(e.target.value))}
                className="book-input"
                required
              />
            </div>
            <div className="book-form-group">
              <label htmlFor="days">Days</label>
              <input
                id="days"
                type="number"
                min={1}
                value={days}
                onChange={e => setDays(Number(e.target.value))}
                className="book-input"
                required
              />
            </div>
          </div>
          <button type="submit" className="book-btn">
            Calculate & Book Now
          </button>
        </form>
        {error && <div className="book-error">{error}</div>}
        {distance && !error && (
          <div className="book-result">
            <h3>
              Distance to <span className="highlight">{destinations[selected].name}</span>:
            </h3>
            <p>
              <strong>
                {isNaN(Number(distance)) ? distance : `${distance} km`}
              </strong>
            </p>
            <div className="book-map-container">
              <LoadScript googleMapsApiKey={MAPS_API_KEY}>
                <GoogleMap
                  mapContainerStyle={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "12px",
                    marginTop: "1rem"
                  }}
                  center={{
                    lat: destinations[selected].lat,
                    lng: destinations[selected].lng
                  }}
                  zoom={5}
                >
                  <Marker
                    position={{
                      lat: destinations[selected].lat,
                      lng: destinations[selected].lng
                    }}
                    label="Destination"
                  />
                  {start && !isNaN(Number(distance)) && directions && (
                    <DirectionsRenderer directions={directions} />
                  )}
                </GoogleMap>
              </LoadScript>
            </div>
            <div className="book-success-msg">
              <span role="img" aria-label="celebration">🎉</span> Your trip is almost set! We'll contact you for final booking details.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Book;