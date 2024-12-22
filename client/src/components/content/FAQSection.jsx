import React, { useState } from "react";

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
    <section style={{ padding: "50px", backgroundColor: "#f0f0f0" }}>
      <h2>Frequently Asked Questions</h2>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <h4
              onClick={() => toggleFAQ(index)}
              style={{ cursor: "pointer", color: "#007bff" }}
            >
              {faq.question}
            </h4>
            {expandedIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
