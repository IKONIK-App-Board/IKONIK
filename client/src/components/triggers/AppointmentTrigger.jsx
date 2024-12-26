import React, { useState } from "react";
import "../../styles/triggers/AppointmentTrigger.css";
import AppointmentModal from "../forms/AppointmentModal";
import { GoDiscussionOutdated } from "react-icons/go";

const AppointmentTrigger = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Floating Button to Trigger Modal */}
      <button className="appoint-modal-trigger" onClick={toggleModal}>
        <GoDiscussionOutdated size={24} />
      </button>

      {/* Appointment Modal */}
      {isModalOpen && (
        <AppointmentModal isOpen={isModalOpen} onClose={toggleModal} />
      )}
    </>
  );
};

export default AppointmentTrigger;
