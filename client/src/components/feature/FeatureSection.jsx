import React from "react";
import "../../styles/feature/FeatureSection.css";

const FeatureSection = () => {
  const features = [
    {
      icon: "🌍",
      title: "Global Destinations",
      description: "Access top healthcare providers across the globe.",
    },
    {
      icon: "🩺",
      title: "Expert Care",
      description: "Partnered with world-class doctors and hospitals.",
    },
    {
      icon: "🛫",
      title: "Seamless Travel",
      description: "From visa assistance to accommodations, we've got you covered.",
    },
  ];

  return (
    <section className="feature-section">
      <h2>Why Choose IKONIK?</h2>
      <div className="feature-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h4 className="feature-title">{feature.title}</h4>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;