import React from "react";
import "../../styles/ui/Footer.css";  // Make sure this path is correct

// React Icons for Social Media
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaTiktok, FaReddit, FaGithub, FaWhatsapp, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Top Section */}
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/icons/ikonik-white-kogo-transparent-back.png" alt="Company Logo" className="footer-logo-img" />
        </div>
        <div className="footer-about">
          <h4>About Us</h4>
          <p>
            We are a global leader in medical tourism, offering world-class healthcare services at affordable prices.
            Join us in transforming your health with a seamless, life-changing experience.
          </p>
        </div>
      </div>

      {/* Footer Middle Section */}
      <div className="footer-middle">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <ul>
            <li><strong>Email:</strong> support@example.com</li>
            <li><strong>Phone:</strong> +123 456 7890</li>
            <li><strong>Address:</strong> 123 Medical St, City, Country</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {/* Social Media Icons */}
            <a href="https://www.facebook.com" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com" className="social-icon">
              <FaYoutube />
            </a>
            <a href="https://www.pinterest.com" className="social-icon">
              <FaPinterest />
            </a>
            <a href="https://www.tiktok.com" className="social-icon">
              <FaTiktok />
            </a>
            <a href="https://www.reddit.com" className="social-icon">
              <FaReddit />
            </a>
            <a href="https://www.github.com" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.whatsapp.com" className="social-icon">
              <FaWhatsapp />
            </a>
            <a href="https://www.telegram.org" className="social-icon">
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Copy */}
      <div className="footer-copy">
        <p>&copy; 2024 Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;