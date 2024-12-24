import React from "react";
import "../../styles/feature/EventCalendar.css";

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
    <section className="event-calendar-section">
      <h2>Upcoming Events</h2>
      <div className="event-calendar-container" id="events">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h4 className="event-date">{event.date}</h4>
            <p className="event-title">{event.title}</p>
            <p className="event-location">{event.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCalendar;
