import React from "react";
import "../../styles/ui/VideoSection.css";  // Corrected path to the CSS file

const VideoSection = () => {
  return (
    <section className="video-section">
      <h2>Our Video Highlights</h2>
      <p>Discover more about our services and facilities through videos.</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/example"
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
