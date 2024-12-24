import React from "react";
import "../../styles/ui/TabContent.css";  // Corrected path to the CSS file

const TabContent = ({ activeTab }) => {
  if (activeTab === "services") {
    const services = ["Cosmetic", "Orthopedic", "Dental"];
    return (
      <div className="carousel">
        {services.map((service, index) => (
          <div key={index} className="carousel-item">
            <img
              src={`/images/service${index + 1}.jpg`}
              alt={service}
              className="card-image"
            />
            <h4>{service} Care</h4>
          </div>
        ))}
      </div>
    );
  }

  if (activeTab === "destinations") {
    const destinations = ["Thailand", "Turkey", "India"];
    return (
      <div className="carousel">
        {destinations.map((destination, index) => (
          <div key={index} className="carousel-item">
            <img
              src={`/images/destination${index + 1}.jpg`}
              alt={destination}
              className="card-image"
            />
            <h4>{destination}</h4>
          </div>
        ))}
      </div>
    );
  }

  if (activeTab === "testimonials") {
    return (
      <div>
        <blockquote>
          "IKONIK transformed my healthcare journey. The blend of care and travel was
          impeccable!"
        </blockquote>
        <cite>- Sarah L.</cite>
      </div>
    );
  }

  return null;
};

export default TabContent;
