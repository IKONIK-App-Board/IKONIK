import React, { useState } from "react";
import "../../styles/content/FAQSection.css";

const FAQSection = () => {
  const faqs = [
    { question: "What is medical tourism?", answer: "Medical tourism involves traveling to another country for healthcare." },
    { question: "Do you offer travel insurance?", answer: "Yes, we provide insurance options to ensure your safety." },
    { question: "How do I book a package?", answer: "Simply contact us through the form, and our team will assist you." },
    { question: "What are the benefits of medical tourism?", answer: "It offers access to world-class medical treatments at a lower cost." },
    { question: "Can I book a consultation online?", answer: "Yes, we offer virtual consultations through our website." }
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
              aria-expanded={expandedIndex === index ? "true" : "false"}
              aria-controls={`faq-answer-${index}`}
            >
              {faq.question}
            </h4>
            <div
              id={`faq-answer-${index}`}
              className={`faq-answer ${expandedIndex === index ? "visible" : ""}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;