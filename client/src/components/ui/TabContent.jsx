import React from "react";

const TabContent = ({ activeTab }) => {
  const styles = {
    carousel: {
      display: "flex",
      overflowX: "scroll",
      gap: "20px",
      padding: "20px",
      scrollbarWidth: "none",
    },
    carouselItem: {
      flex: "0 0 300px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      overflow: "hidden",
      transition: "transform 0.3s",
    },
    cardImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
  };

  if (activeTab === "services") {
    const services = ["Cosmetic", "Orthopedic", "Dental"];
    return (
      <div style={styles.carousel}>
        {services.map((service, index) => (
          <div key={index} style={styles.carouselItem}>
            <img
              src={`/images/service${index + 1}.jpg`}
              alt={service}
              style={styles.cardImage}
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
      <div style={styles.carousel}>
        {destinations.map((destination, index) => (
          <div key={index} style={styles.carouselItem}>
            <img
              src={`/images/destination${index + 1}.jpg`}
              alt={destination}
              style={styles.cardImage}
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
          "MediVoyage transformed my healthcare journey. The blend of care and travel was
          impeccable!"
        </blockquote>
        <cite>- Sarah L.</cite>
      </div>
    );
  }

  return null;
};

export default TabContent;
