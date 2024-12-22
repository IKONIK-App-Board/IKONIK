import React from "react";

const LanguagesSupported = () => {
  const languages = ["English", "Arabic", "French", "Spanish", "German", "Mandarin", "Hindi"];

  return (
    <section style={{ padding: "50px", textAlign: "center" }}>
      <h2>We Speak Your Language</h2>
      <p>Our services are available in multiple languages for your convenience.</p>
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px" }}>
        {languages.map((language, index) => (
          <span key={index} style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", borderRadius: "20px" }}>
            {language}
          </span>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSupported;
