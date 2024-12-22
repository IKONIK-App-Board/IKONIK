import React from "react";

const DiscountOffers = () => {
  const offers = [
    {
      title: "10% Off Early Bookings",
      description: "Book your treatment package before Dec 31 and save!",
    },
    {
      title: "Free Consultation",
      description: "Get a free consultation on your first inquiry.",
    },
  ];

  return (
    <section style={{ padding: "50px", textAlign: "center", backgroundColor: "#fffbf0" }}>
      <h2>Special Offers</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
        {offers.map((offer, index) => (
          <div key={index} style={{ maxWidth: "300px", margin: "10px", textAlign: "center", backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <h4>{offer.title}</h4>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscountOffers;
