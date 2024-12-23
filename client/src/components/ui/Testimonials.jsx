import React from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "John D.", review: "Excellent service and care!" },
    { name: "Emma S.", review: "The trip and surgery were seamless!" },
    { name: "Liam O.", review: "Highly recommend IKONIK!" },
  ];

  return (
    <section style={{ padding: "50px", backgroundColor: "#fff", textAlign: "center" }}>
      <h2>What Our Customers Say</h2>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={{ maxWidth: "300px", textAlign: "center" }}>
            <p>"{testimonial.review}"</p>
            <strong>- {testimonial.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
