"use client";
import React, { useState } from "react";
import Logo from "./logo";
import Sign from "./sign";
import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  const [showSign, setShowSign] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Logo />
          <ul className="navbar-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
               <Link href="/book" className="navbar-link">
      Book
    </Link>
            </li>
            <li>
              <Link href="/place" className="navbar-link">
                Place
              </Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="navbar-auth">
            <button
              className="navbar-sign-btn"
              onClick={() => setShowSign(true)}
            >
              Sign In / Sign Up
            </button>
          </div>
        </div>
      </nav>
      {showSign && (
        <div className="sign-modal">
          <div className="sign-modal-bg" onClick={() => setShowSign(false)} />
          <div className="sign-modal-content">
            <button
              className="sign-modal-close"
              onClick={() => setShowSign(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <Sign />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;