import React from "react";
import "../../styles/forms/NewsletterSignup.css"; 

const NewsletterSignup = () => {
  return (
    <section className="newsletter-signup">
      <h2>Subscribe to Our Newsletter</h2>
      <div className="form-group">
        <input type="email" placeholder="Enter your email" className="input-field" />
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </section>
  );
};

export default NewsletterSignup;
