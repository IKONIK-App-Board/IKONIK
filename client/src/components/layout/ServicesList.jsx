import React from "react";
import "../../styles/layout/ServicesList.css";  // Corrected path to the CSS file

const ServicesList = () => {
  const services = [
    {
      icon: "🏥",
      title: "Hospital Care",
      description: "Access top hospitals for surgeries and treatments.",
    },
    {
      icon: "🦷",
      title: "Dental Services",
      description: "Affordable dental care with state-of-the-art facilities.",
    },
    {
      icon: "🩺",
      title: "Health Check-ups",
      description: "Comprehensive health check-up packages.",
    },
    {
      icon: "👁️",
      title: "Eye Care",
      description: "World-class eye treatments and surgeries.",
    },
    {
      icon: "🌿",
      title: "Wellness Retreats",
      description: "Holistic wellness packages for rejuvenation.",
    },
  ];

  return (
    <section className="services-list">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;