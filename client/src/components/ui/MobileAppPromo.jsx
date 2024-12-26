import React from "react";
import "../../styles/ui/MobileAppPromo.css";  

import { SiGoogleplay } from "react-icons/si";
import { FaAppStoreIos } from "react-icons/fa";

const MobileAppPromo = () => {
  return (
    <div className="promo-container">
            <div className="promo-header">
                <h1>Discover the Future of Mobile Apps</h1>
                <p>Our new app brings you closer to the experiences you've always dreamed of.</p>
            </div>

            <div className="mobile-showcase">
                <div className="phone-shape">
                    <div className="phone-screen">
                        <div className="app-screen-content">
                            <h2>Your Dashboard</h2>
                            <p>Track your progress with detailed analytics and charts. Stay organized with all your data in one place.</p>
                        </div>
                    </div>
                </div>

                <div className="phone-shape">
                    <div className="phone-screen">
                        <div className="app-screen-content">
                            <h2>Get Instant Notifications</h2>
                            <p>Receive real-time updates, reminders, and news directly on your phone to stay ahead of the curve.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="promo-footer">
                <button className="download-button">Download Now</button>
                <div className="store-buttons">
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                       <SiGoogleplay /> 
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                        <FaAppStoreIos />
                    </a>
                </div>
            </div>
        </div>
  );
};

export default MobileAppPromo;