import React, { useState } from "react";
import "./sign.css";

const Sign = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="sign-container">
      <div className="sign-card">
        <h2>{isSignUp ? "Create Your Account" : "Welcome Back"}</h2>
        <form>
          {isSignUp && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                className="sign-input"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="sign-input"
                required
              />
              <input
                type="text"
                placeholder="Place"
                className="sign-input"
                required
              />
              <input
                type="text"
                placeholder="Referral Code (optional)"
                className="sign-input"
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            className="sign-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="sign-input"
            required
          />
          <button type="submit" className="sign-btn">
            {isSignUp ? "Register" : "Login"}
          </button>
        </form>
        <p className="sign-toggle">
          {isSignUp
            ? "Already have an account?"
            : "Don't have an account?"}
          <button
            type="button"
            className="sign-link"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Sign;