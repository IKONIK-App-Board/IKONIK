import React from "react";
import "../../styles/content/LanguagesSupported.css";

const LanguagesSupported = () => {
  const languages = ["English", "Arabic", "French", "Spanish", "German", "Mandarin", "Hindi"];

  return (
    <section className="languages-section">
      <h2>We Speak Your Language</h2>
      <p>Our services are available in multiple languages for your convenience.</p>
      <div className="languages-list">
        {languages.map((language, index) => (
          <span key={index} className="language-badge">
            {language}
          </span>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSupported;
