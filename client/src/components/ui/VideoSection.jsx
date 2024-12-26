import React from "react";
import "../../styles/ui/VideoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section">
      <h2 className="section-heading">Our Video Highlights</h2>
      <p className="section-description">
        Discover more about our services and facilities through videos.
      </p>
      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/u31qwQUeGuM?si=nDlbzCBC8dcEPE6x"
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;