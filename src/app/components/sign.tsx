"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import "./sign.css";

const Sign = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    place: "",
    referralCode: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (isSignUp) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      else if (!/^\+?\d{10,15}$/.test(formData.phone)) newErrors.phone = "Invalid phone number";
      if (!formData.place.trim()) newErrors.place = "Place is required";
    }
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setMessage(null);
    try {
      if (isSignUp) {
        // Mock registration (replace with real API call to your backend)
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (response.ok) {
          setMessage("Registration successful! Please sign in.");
          setIsSignUp(false);
        } else {
          setMessage(data.error || "Registration failed. Try again.");
        }
      } else {
        // Sign-in with NextAuth.js
        const result = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });
        if (result?.error) {
          setMessage("Invalid email or password. Please try again.");
        } else {
          setMessage("Login successful! Redirecting...");
          setTimeout(() => router.push("/dashboard"), 1500);
        }
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="sign-container">
      <div className="sign-card">
        <h2>{isSignUp ? "Create Your Account" : "Welcome Back"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <div className="sign-field">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className={`sign-input ${errors.fullName ? "sign-input-error" : ""}`}
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
                {errors.fullName && <span className="sign-error">{errors.fullName}</span>}
              </div>
              <div className="sign-field">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className={`sign-input ${errors.phone ? "sign-input-error" : ""}`}
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                {errors.phone && <span className="sign-error">{errors.phone}</span>}
              </div>
              <div className="sign-field">
                <input
                  type="text"
                  name="place"
                  placeholder="Place"
                  className={`sign-input ${errors.place ? "sign-input-error" : ""}`}
                  value={formData.place}
                  onChange={handleInputChange}
                  required
                />
                {errors.place && <span className="sign-error">{errors.place}</span>}
              </div>
              <div className="sign-field">
                <input
                  type="text"
                  name="referralCode"
                  placeholder="Referral Code (optional)"
                  className="sign-input"
                  value={formData.referralCode}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
          <div className="sign-field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`sign-input ${errors.email ? "sign-input-error" : ""}`}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <span className="sign-error">{errors.email}</span>}
          </div>
          <div className="sign-field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`sign-input ${errors.password ? "sign-input-error" : ""}`}
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {errors.password && <span className="sign-error">{errors.password}</span>}
          </div>
          <button type="submit" className="sign-btn">
            {isSignUp ? "Register" : "Login"}
          </button>
          <button type="button" className="sign-google-btn" onClick={handleGoogleSignIn}>
            Sign {isSignUp ? "Up" : "In"} with Google
          </button>
        </form>
        {message && (
          <div className="sign-message">
            <p>{message}</p>
          </div>
        )}
        <p className="sign-toggle">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
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