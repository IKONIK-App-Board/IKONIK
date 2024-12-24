import React, { useState } from "react";
import "../../styles/forms/AppointmentScheduler.css";

const AppointmentScheduler = () => {
  const [form, setForm] = useState({ name: "", date: "", service: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Scheduled!");
  };

  return (
    <section className="appointment-scheduler">
      <h2>Book an Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="appointment-input"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="appointment-input"
        />
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="appointment-select"
        >
          <option value="">Select Service</option>
          <option value="hospital">Hospital Care</option>
          <option value="dental">Dental Services</option>
        </select>
        <button type="submit" className="appointment-button">
          Schedule Now
        </button>
      </form>
    </section>
  );
};

export default AppointmentScheduler;
