import React from "react";

const ContactModal = ({ isVisible, onClose }) => {
  const styles = {
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "#fff",
      padding: "40px",
      borderRadius: "8px",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  if (!isVisible) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h3>Contact MediVoyage</h3>
        <form>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" style={styles.input} rows="5"></textarea>
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
