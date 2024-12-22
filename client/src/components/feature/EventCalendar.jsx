import React from "react";

const EventCalendar = () => {
  const events = [
    {
      date: "15th Dec 2024",
      title: "Free Webinar on Medical Tourism",
      location: "Online",
    },
    {
      date: "20th Dec 2024",
      title: "Medical Conference 2024",
      location: "Dubai, UAE",
    },
  ];

  return (
    <section style={{ padding: "50px", textAlign: "center", backgroundColor: "#f7f7f7" }}>
      <h2>Upcoming Events</h2>
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        {events.map((event, index) => (
          <div key={index} style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
            <h4>{event.date}</h4>
            <p>{event.title}</p>
            <p>{event.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCalendar;
