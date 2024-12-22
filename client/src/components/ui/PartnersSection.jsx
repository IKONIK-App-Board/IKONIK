import React from "react";

const PartnersSection = () => {
  const partners = [
    "https://via.placeholder.com/200x80?text=Partner+1",
    "https://via.placeholder.com/200x80?text=Partner+2",
    "https://via.placeholder.com/200x80?text=Partner+3",
    "https://via.placeholder.com/200x80?text=Partner+4",
  ];

  return (
    <section style={{ padding: "50px", textAlign: "center" }}>
      <h2>Our Trusted Partners</h2>
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", marginTop: "20px" }}>
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner}
            alt={`Partner ${index + 1}`}
            style={{
              height: "80px",
              objectFit: "contain",
              margin: "10px",
              filter: "grayscale(100%)",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
