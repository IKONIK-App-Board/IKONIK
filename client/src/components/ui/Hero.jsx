import React from "react";

const Hero = () => {
  const styles = {
    header: {
      backgroundImage: "url('/images/hero-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      padding: "100px 20px",
      textAlign: "center",
      position: "relative",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: 1,
    },
    content: {
      position: "relative",
      zIndex: 2,
    },
    logo: {
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    heroText: {
      fontSize: "48px",
      fontWeight: "600",
      lineHeight: "1.2",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <div style={styles.logo}>MediVoyage</div>
        <h1 style={styles.heroText}>Your Gateway to Health & Exploration</h1>
        <p>Experience world-class medical treatments while enjoying exotic destinations.</p>
      </div>
    </header>
  );
};

export default Hero;