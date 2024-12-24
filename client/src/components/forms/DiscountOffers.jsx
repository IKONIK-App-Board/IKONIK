import React from "react";
import "../../styles/forms/DiscountOffers.css";

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
    <section className="discount-offers" id="offers">
      <h2>Special Offers</h2>
      <div className="offer-cards">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <h4>{offer.title}</h4>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscountOffers;