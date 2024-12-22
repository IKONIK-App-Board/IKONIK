import React from "react";

const TabNavigation = ({ activeTab, onTabChange }) => {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "20px",
    },
    navItem: {
      fontSize: "18px",
      cursor: "pointer",
      padding: "10px",
      borderRadius: "5px",
      transition: "background-color 0.3s",
    },
    activeItem: {
      backgroundColor: "#28a745",
      color: "#fff",
    },
  };

  const tabs = ["services", "destinations", "testimonials"];

  return (
    <nav style={styles.nav}>
      {tabs.map((tab) => (
        <div
          key={tab}
          style={{
            ...styles.navItem,
            ...(activeTab === tab ? styles.activeItem : {}),
          }}
          onClick={() => onTabChange(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </div>
      ))}
    </nav>
  );
};

export default TabNavigation;