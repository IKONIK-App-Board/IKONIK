import React from "react";
import "../../styles/ui/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    { name: "John D.", review: "Excellent service and care!" },
    { name: "Emma S.", review: "The trip and surgery were seamless!" },
    { name: "Liam O.", review: "Highly recommend IKONIK!" },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="section-heading">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p className="testimonial-review">"{testimonial.review}"</p>
            <strong className="testimonial-name">- {testimonial.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
