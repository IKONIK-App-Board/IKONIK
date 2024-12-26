import React from "react";
import "../../styles/content/TeamShowcase.css";

const TeamShowcase = () => {
  const team = [
    {
      name: "Dr. Khaled Al-Farsi",
      position: "Chief Medical Officer",
      photo: "/images/team/team-1.png",
    },
    {
      name: "Omar Khalid",
      position: "Travel Coordinator",
      photo: "/images/team/team-2.png",
    },
    {
      name: "Mahmoud Haddad",
      position: "Customer Support Lead",
      photo: "/images/team/team-3.png",
    },
    {
      name: "Ahmed Al-Nasser",
      position: "Logistics Manager",
      photo: "/images/team/team-4.png",
    },
  ];

  return (
    <section className="team-showcase-section">
      <h2 className="section-title">Meet Our Team</h2>
      <div className="team-container">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-photo-wrapper">
              <img src={member.photo} alt={member.name} className="team-photo" />
            </div>
            <h4 className="team-name">{member.name}</h4>
            <p className="team-position">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamShowcase;