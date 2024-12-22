import React, { useEffect, useState } from "react";

const StatsCounter = () => {
  const stats = [
    { label: "Patients Helped", value: 2000 },
    { label: "Countries Served", value: 25 },
    { label: "Specialists", value: 500 },
    { label: "Years of Experience", value: 10 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) =>
            i === index && count < stat.value ? count + 1 : count
          )
        );
      }, 10);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section style={{ padding: "50px", backgroundColor: "#e9f5ff", textAlign: "center" }}>
      <h2>Our Achievements</h2>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        {stats.map((stat, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: "40px", color: "#007bff" }}>{counts[index]}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
