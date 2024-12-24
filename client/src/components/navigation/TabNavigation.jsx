import React from "react";
import "../../styles/navigation/TabNavigation.css";  // Corrected path to the CSS file

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = ["services", "destinations", "testimonials"];

  return (
    <nav className="tab-nav">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`tab-item ${activeTab === tab ? "active-tab" : ""}`}
          onClick={() => onTabChange(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </div>
      ))}
    </nav>
  );
};

export default TabNavigation;