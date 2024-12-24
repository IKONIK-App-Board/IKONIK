import React from "react";
import "../../styles/content/TeamShowcase.css";

const TeamShowcase = () => {
  const team = [
    {
      name: "Dr. Sarah Thompson",
      position: "Chief Medical Officer",
      photo: "https://via.placeholder.com/200x200?text=Team+1",
    },
    {
      name: "Michael Brown",
      position: "Travel Coordinator",
      photo: "https://via.placeholder.com/200x200?text=Team+2",
    },
    {
      name: "Emily Davis",
      position: "Customer Support Lead",
      photo: "https://via.placeholder.com/200x200?text=Team+3",
    },
    {
      name: "Rajesh Kumar",
      position: "Logistics Manager",
      photo: "https://via.placeholder.com/200x200?text=Team+4",
    },
  ];

  return (
    <section className="team-showcase-section">
      <h2>Meet Our Team</h2>
      <div className="team-container">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h4>{member.name}</h4>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamShowcase;
