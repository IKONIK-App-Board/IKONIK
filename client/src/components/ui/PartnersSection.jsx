import React from "react";
import "../../styles/ui/PartnersSection.css";  // Corrected path to the CSS file

const PartnersSection = () => {
  const partners = [
    "https://via.placeholder.com/200x80?text=Partner+1",
    "https://via.placeholder.com/200x80?text=Partner+2",
    "https://via.placeholder.com/200x80?text=Partner+3",
    "https://via.placeholder.com/200x80?text=Partner+4",
  ];

  return (
    <section className="partners-section">
      <h2>Our Trusted Partners</h2>
      <div className="partners-container">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner}
            alt={`Partner ${index + 1}`}
            className="partner-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
