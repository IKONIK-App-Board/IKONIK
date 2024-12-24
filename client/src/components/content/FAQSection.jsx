import React, { useState } from "react";
import "../../styles/content/FAQSection.css";

const FAQSection = () => {
  const faqs = [
    { question: "What is medical tourism?", answer: "Medical tourism involves traveling to another country for healthcare." },
    { question: "Do you offer travel insurance?", answer: "Yes, we provide insurance options to ensure your safety." },
    { question: "How do I book a package?", answer: "Simply contact us through the form, and our team will assist you." },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h4
              onClick={() => toggleFAQ(index)}
              className={`faq-question ${expandedIndex === index ? "active" : ""}`}
            >
              {faq.question}
            </h4>
            {expandedIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;