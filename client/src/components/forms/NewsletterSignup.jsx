import React from "react";

const NewsletterSignup = () => {
  const styles = {
    container: {
      padding: "50px",
      backgroundColor: "#007bff",
      color: "#fff",
      textAlign: "center",
    },
    input: {
      padding: "10px",
      width: "300px",
      marginRight: "10px",
      border: "none",
      borderRadius: "4px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#fff",
      color: "#007bff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  return (
    <section style={styles.container}>
      <h2>Subscribe to Our Newsletter</h2>
      <div style={{ marginTop: "20px" }}>
        <input type="email" placeholder="Enter your email" style={styles.input} />
        <button style={styles.button}>Subscribe</button>
      </div>
    </section>
  );
};

export default NewsletterSignup;
