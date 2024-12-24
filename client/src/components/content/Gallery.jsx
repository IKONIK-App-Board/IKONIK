import React from "react";
import "../../styles/content/Gallery.css";

const Gallery = () => {
  const images = [
    "https://via.placeholder.com/300x200?text=Gallery+1",
    "https://via.placeholder.com/300x200?text=Gallery+2",
    "https://via.placeholder.com/300x200?text=Gallery+3",
    "https://via.placeholder.com/300x200?text=Gallery+4",
  ];

  return (
    <section className="gallery-section">
      <h2>Our Facilities & Destinations</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
