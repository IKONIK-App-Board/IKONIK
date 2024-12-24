import React from "react";
import { FaHospitalAlt, FaTooth, FaStethoscope, FaEye, FaSpa } from "react-icons/fa"; // Importing icons from react-icons
import "../../styles/layout/ServicesList.css";  // Corrected path to the CSS file

const ServicesList = () => {
  const services = [
    {
      icon: <FaHospitalAlt />,
      title: "Hospital Care",
      description: "Access top hospitals for surgeries and treatments.",
    },
    {
      icon: <FaTooth />,
      title: "Dental Services",
      description: "Affordable dental care with state-of-the-art facilities.",
    },
    {
      icon: <FaStethoscope />,
      title: "Health Check-ups",
      description: "Comprehensive health check-up packages.",
    },
    {
      icon: <FaEye />,
      title: "Eye Care",
      description: "World-class eye treatments and surgeries.",
    },
    {
      icon: <FaSpa />,
      title: "Wellness Retreats",
      description: "Holistic wellness packages for rejuvenation.",
    },
  ];

  return (
    <section className="services-list" id="services">
      <h2>Our Premium Services</h2>
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