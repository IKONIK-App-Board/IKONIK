import React from "react";

const VideoSection = () => {
  return (
    <section style={{ padding: "50px", textAlign: "center", backgroundColor: "#eef2f5" }}>
      <h2>Our Video Highlights</h2>
      <p>Discover more about our services and facilities through videos.</p>
      <div style={{ marginTop: "20px" }}>
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
