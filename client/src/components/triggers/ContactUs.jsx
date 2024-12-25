import React, { useState } from "react";
import "../../styles/triggers/ContactUS.css";
import ContactModal from "../forms/ContactModal";
import { RiMessage2Fill } from "react-icons/ri";

const ContactUS = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button className="modal-trigger" onClick={toggleModal}>
        <RiMessage2Fill />
      </button>
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* <h2>Modal Title</h2>
            <p>This is the content of the modal. Click anywhere outside to close.</p>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button> */}
            <ContactModal isVisible={isModalOpen} onClose={toggleModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUS;