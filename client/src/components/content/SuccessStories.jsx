import React from "react";

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
    <section style={{ padding: "50px", textAlign: "center" }}>
      <h2>Success Stories</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
        {stories.map((story, index) => (
          <div key={index} style={{ maxWidth: "300px", margin: "10px", textAlign: "center" }}>
            <img
              src={story.image}
              alt={story.title}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h4>{story.title}</h4>
            <p>{story.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
