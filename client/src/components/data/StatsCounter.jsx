import React, { useEffect, useState } from "react";
import "../../styles/data/StatsCounter.css";

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
    <section className="stats-counter-section">
      <h2>Our Achievements</h2>
      <div className="stats-counter-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h3 className="stat-value">{counts[index]}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;