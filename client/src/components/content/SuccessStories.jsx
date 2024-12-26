import React, { useState } from "react";
import "../../styles/content/SuccessStories.css";

const StoryCard = ({ title, content, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`story-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="story-image-wrapper">
        <img src={image} alt={title} className="story-image" />
      </div>
      <div className="story-details">
        <h4 className="story-title">{title}</h4>
        <p className="story-content">{content}</p>
      </div>
    </div>
  );
};

const SuccessStories = () => {
  const stories = [
    {
      title: "John's Recovery Journey",
      content: "John underwent a life-changing heart surgery with our partner hospital.",
      image: "/images/stories/story-1.png",
    },
    {
      title: "Sophia's Smile Makeover",
      content: "Sophia found her confidence again with our advanced dental treatments.",
      image: "/images/stories/story-2.png",
    },
    {
      title: "Sophia's Smile Makeover",
      content: "Sophia found her confidence again with our advanced dental treatments.",
      image: "/images/stories/story-2.png",
    },
  ];

  return (
    <section className="success-stories">
      <div className="success-stories-header">
        <h2 className="header-title">Success Stories</h2>
        <p className="header-subtitle">
          Discover how our services have transformed lives.
        </p>
      </div>
      <div className="stories-container">
        {stories.map((story, index) => (
          <StoryCard key={index} {...story} />
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
