import React from "react";
import "../../styles/content/Gallery.css";

const Gallery = () => {
  const images = [
    "/images/facilities/dist-1.png",
    "/images/facilities/dist-2.png",
    "/images/facilities/dist-3.png",
    "/images/facilities/dist-4.png",
  ];

  return (
    <section className="gallery-section">
      <h2 className="section-title">Our Facilities & Destinations</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <p className="gallery-text">Gallery {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;