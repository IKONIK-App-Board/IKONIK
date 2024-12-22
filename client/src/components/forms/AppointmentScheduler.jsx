import React, { useState } from "react";

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
    <section style={{ padding: "50px", backgroundColor: "#f7f7f7", textAlign: "center" }}>
      <h2>Book an Appointment</h2>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "0 auto", marginTop: "20px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
        />
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px" }}
        >
          <option value="">Select Service</option>
          <option value="hospital">Hospital Care</option>
          <option value="dental">Dental Services</option>
        </select>
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none" }}>
          Schedule Now
        </button>
      </form>
    </section>
  );
};

export default AppointmentScheduler;
