import React from "react";

const Logo = () => (
  <div
    style={{
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #14b8a6 0%, #2563eb 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 16px rgba(37,99,235,0.15)",
    }}
  >
    <span
      style={{
        color: "#fff",
        fontWeight: 900,
        fontSize: "1.3rem",
        fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
        letterSpacing: "2px",
        textShadow: "0 2px 12px rgba(0,0,0,0.2)",
      }}
    >
      Xtravel
    </span>
  </div>
);

export default Logo;