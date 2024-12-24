import React from "react";
import "../../styles/ui/Footer.css";  // Corrected path to the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="#services" className="footer-link">
          Services
        </a>
        <a href="#contact" className="footer-link">
          Contact
        </a>
        <a href="#about" className="footer-link">
          About Us
        </a>
      </div>
      <p>&copy; 2024 IKONIK. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
