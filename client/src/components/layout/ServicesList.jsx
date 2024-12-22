import React from "react";

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
    <section style={{ padding: "50px", backgroundColor: "#f7f7f7", textAlign: "center" }}>
      <h2>Our Services</h2>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginTop: "20px" }}>
        {services.map((service, index) => (
          <div key={index} style={{ maxWidth: "250px", margin: "10px" }}>
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
