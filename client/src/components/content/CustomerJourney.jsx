import React from "react";

const CustomerJourney = () => {
  const steps = [
    { step: "1", title: "Get in Touch", description: "Contact us to discuss your requirements." },
    { step: "2", title: "Plan Your Trip", description: "We create a customized itinerary for you." },
    { step: "3", title: "Receive Treatment", description: "Get the best care from top specialists." },
    { step: "4", title: "Enjoy Your Stay", description: "Relax with guided tours and local experiences." },
  ];

  return (
    <section style={{ padding: "50px", textAlign: "center" }}>
      <h2>Your Journey with Us</h2>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginTop: "20px" }}>
        {steps.map((step, index) => (
          <div key={index} style={{ maxWidth: "250px", textAlign: "center" }}>
            <div
              style={{
                fontSize: "30px",
                color: "#007bff",
                backgroundColor: "#e9f5ff",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                lineHeight: "60px",
                margin: "auto",
              }}
            >
              {step.step}
            </div>
            <h4 style={{ marginTop: "10px" }}>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerJourney;
