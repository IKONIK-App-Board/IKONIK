import React from "react";
// import "../../styles/forms/ContactModal.css";
import logo from '/icons/ikonik-black-logo-transparent-back.png';

const ContactModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div id="contact-logo-container">
          <img src={logo} alt="Ikonik Logo" />
        </div>
        <h3>Contact IKONIK</h3>
        <form>
          <input type="text" placeholder="Your Name" className="modal-input" />
          <input type="email" placeholder="Your Email" className="modal-input" />
          <textarea
            placeholder="Your Message"
            className="modal-input"
            rows="5"
          ></textarea>
          <button type="submit" className="modal-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;