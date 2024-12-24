import React from "react";
import "../../styles/data/InteractiveMap.css";

const InteractiveMap = () => {
  return (
    <section className="interactive-map-section">
      <h2>Explore Our Locations</h2>
      <iframe
        title="Interactive Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094396!2d144.95373531550415!3d-37.816217979751634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a18b0e62f917!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1614805474601!5m2!1sen!2sau"
        className="interactive-map-iframe"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default InteractiveMap;