import React from "react";
import "../../styles/ui/PartnersSection.css";  // Corrected path to the CSS file

const PartnersSection = () => {
  const partners = [
    "/images/parteners/partener-1.png",
    "/images/parteners/partener-2.png",
    "/images/parteners/partener-3.png",
    "/images/parteners/partener-4.png",
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
