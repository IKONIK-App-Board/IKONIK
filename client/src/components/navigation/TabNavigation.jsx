import React, { useState, useEffect } from "react";
import "../../styles/navigation/TabNavigation.css";
import { FaHome, FaServicestack, FaMapMarkedAlt } from 'react-icons/fa';
import { GiHamburgerMenu, GiJourney } from 'react-icons/gi';
import { BsAirplaneEnginesFill } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";

import Logo from '/icons/IKONIK.jpg'; // Adjust the path if necessary

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { name: "Home", key: "home", icon: <FaHome /> },
    { name: "Services", key: "services", icon: <FaServicestack /> },
    { name: "Journey", key: "journey", icon: <GiJourney /> },
    { name: "Features", key: "features", icon: <BsAirplaneEnginesFill /> },
    { name: "Events", key: "events", icon: <FaMapMarkedAlt /> },
    { name: "Offers", key: "offers", icon: <MdLocalOffer /> },
  ];

  const handleToggleMenu = () => setMenuOpen(!menuOpen);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    const element = document.getElementById(tabKey);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer to detect the section in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id); // Update active tab when section is in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe each section with corresponding IDs
    tabs.forEach(tab => {
      const section = document.getElementById(tab.key);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      // Cleanup the observer
      observer.disconnect();
    };
  }, [tabs]);

  return (
    <nav className={`tab-nav ${menuOpen ? "open" : ""}`}>
      {/* Logo and Name */}
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
        <span className="logo-name">IKONIK</span>
      </div>

      <div className="hamburger" onClick={handleToggleMenu}>
        <GiHamburgerMenu />
      </div>

      <div className="tab-items">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`tab-item ${activeTab === tab.key ? "active-tab" : ""}`}
            onClick={() => handleTabChange(tab.key)} // Keep the click functionality intact
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-name">{tab.name}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default TabNavigation;
