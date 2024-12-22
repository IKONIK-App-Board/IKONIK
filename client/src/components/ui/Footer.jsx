import React from "react";

const Footer = () => {
  const styles = {
    container: {
      padding: "20px",
      backgroundColor: "#333",
      color: "#fff",
      textAlign: "center",
    },
    links: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "10px",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
    },
  };

  return (
    <footer style={styles.container}>
      <div style={styles.links}>
        <a href="#services" style={styles.link}>
          Services
        </a>
        <a href="#contact" style={styles.link}>
          Contact
        </a>
        <a href="#about" style={styles.link}>
          About Us
        </a>
      </div>
      <p>&copy; 2024 MediVoyage. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
