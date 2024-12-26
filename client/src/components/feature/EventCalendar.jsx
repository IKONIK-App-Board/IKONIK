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
    {
      date: "25th Dec 2024",
      title: "Holiday Healthcare Expo",
      location: "London, UK",
    },
    {
      date: "30th Dec 2024",
      title: "End-of-Year Health Symposium",
      location: "New York, USA",
    },
  ];

  return (
    <section className="event-calendar-section">
      <h2 className="section-title">Upcoming Events</h2>
      <div className="event-calendar-container" id="events">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-card-header">
              <h4 className="event-date">{event.date}</h4>
            </div>
            <div className="event-card-body">
              <p className="event-title">{event.title}</p>
              <p className="event-location">{event.location}</p>
            </div>
            <div className="event-card-footer">
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCalendar;