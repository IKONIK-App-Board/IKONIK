import React from "react";
import "../../styles/ui/Hero.css";  // Corrected path to the CSS file

const Hero = () => {
  return (
    <header className="hero-header">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-logo">IKONIK</div>
        <h1 className="hero-text">Your Gateway to Health & Exploration</h1>
        <p>Experience world-class medical treatments while enjoying exotic destinations.</p>
      </div>
    </header>
  );
};

export default Hero;
