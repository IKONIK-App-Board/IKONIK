import React from "react";

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
    <section style={{ padding: "50px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
      <h2>Why Choose IKONIK?</h2>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        {features.map((feature, index) => (
          <div key={index} style={{ maxWidth: "300px", textAlign: "center" }}>
            <div style={{ fontSize: "40px" }}>{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
