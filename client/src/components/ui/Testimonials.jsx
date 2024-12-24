import React from "react";
import "../../styles/ui/Testimonials.css";  // Corrected path to the CSS file

const Testimonials = () => {
  const testimonials = [
    { name: "John D.", review: "Excellent service and care!" },
    { name: "Emma S.", review: "The trip and surgery were seamless!" },
    { name: "Liam O.", review: "Highly recommend IKONIK!" },
  ];

  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p>"{testimonial.review}"</p>
            <strong>- {testimonial.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
