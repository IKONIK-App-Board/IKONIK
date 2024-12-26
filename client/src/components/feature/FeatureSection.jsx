import React from "react";
import { FaGlobe, FaStethoscope, FaPlaneDeparture } from "react-icons/fa";
import "../../styles/feature/FeatureSection.css";

const FeatureSection = () => {
  const features = [
    {
      icon: <FaGlobe />, // Using React Icons
      title: "Global Destinations",
      description: "Access top healthcare providers across the globe.",
    },
    {
      icon: <FaStethoscope />, // Using React Icons
      title: "Expert Care",
      description: "Partnered with world-class doctors and hospitals.",
    },
    {
      icon: <FaPlaneDeparture />, // Using React Icons
      title: "Seamless Travel",
      description: "From visa assistance to accommodations, we've got you covered.",
    },
  ];

  return (
    <section className="feature-section" id="features">
      <h2 className="section-title">Why Choose IKONIK?</h2>
      <div className="feature-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h4 className="feature-title">{feature.title}</h4>
            <p className="feature-description">{feature.description}</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;