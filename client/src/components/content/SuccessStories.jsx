import React from "react";
import "../../styles/content/SuccessStories.css";

const SuccessStories = () => {
  const stories = [
    {
      title: "John's Recovery Journey",
      content: "John underwent a life-changing heart surgery with our partner hospital.",
      image: "https://via.placeholder.com/300x200?text=Story+1",
    },
    {
      title: "Sophia's Smile Makeover",
      content: "Sophia found her confidence again with our advanced dental treatments.",
      image: "https://via.placeholder.com/300x200?text=Story+2",
    },
  ];

  return (
    <section className="success-stories-section">
      <h2>Success Stories</h2>
      <div className="stories-container">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <img src={story.image} alt={story.title} className="story-image" />
            <h4>{story.title}</h4>
            <p>{story.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
