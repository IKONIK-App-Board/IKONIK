import React from "react";

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
    <section style={{ padding: "50px", textAlign: "center", backgroundColor: "#f7f7f7" }}>
      <h2>Meet Our Team</h2>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginTop: "20px" }}>
        {team.map((member, index) => (
          <div key={index} style={{ maxWidth: "200px", margin: "10px", textAlign: "center" }}>
            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <h4>{member.name}</h4>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamShowcase;
