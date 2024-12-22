import React from "react";

const Gallery = () => {
  const images = [
    "https://via.placeholder.com/300x200?text=Gallery+1",
    "https://via.placeholder.com/300x200?text=Gallery+2",
    "https://via.placeholder.com/300x200?text=Gallery+3",
    "https://via.placeholder.com/300x200?text=Gallery+4",
  ];

  return (
    <section style={{ padding: "50px", textAlign: "center" }}>
      <h2>Our Facilities & Destinations</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginTop: "20px" }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;