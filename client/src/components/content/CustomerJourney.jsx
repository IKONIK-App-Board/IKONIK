import React from "react";
import "../../styles/content/CustomerJourney.css";

const CustomerJourney = () => {
  const steps = [
    { step: "1", title: "Get in Touch", description: "Contact us to discuss your requirements." },
    { step: "2", title: "Plan Your Trip", description: "We create a customized itinerary for you." },
    { step: "3", title: "Receive Treatment", description: "Get the best care from top specialists." },
    { step: "4", title: "Enjoy Your Stay", description: "Relax with guided tours and local experiences." },
  ];

  return (
    <section className="customer-journey-section">
      <h2>Your Journey with Us</h2>
      <div className="customer-journey-container">
        {steps.map((step, index) => (
          <div key={index} className="customer-journey-step">
            <div className="customer-journey-number">{step.step}</div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerJourney;
