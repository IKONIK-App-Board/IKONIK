import React from "react";
import "../../styles/content/BlogPreview.css";

const BlogPreview = () => {
  const blogs = [
    {
      title: "Top Destinations for Medical Tourism in 2024",
      image: "https://via.placeholder.com/300x150?text=Blog+1+Image",
      link: "/blog/top-destinations-for-medical-tourism-in-2024",
    },
    {
      title: "5 Tips to Prepare for Your Medical Journey",
      image: "https://via.placeholder.com/300x150?text=Blog+2+Image",
      link: "/blog/5-tips-to-prepare-for-your-medical-journey",
    },
    {
      title: "The Benefits of Medical Tourism Explained",
      image: "https://via.placeholder.com/300x150?text=Blog+3+Image",
      link: "/blog/the-benefits-of-medical-tourism-explained",
    },
  ];

  return (
    <section className="blog-preview-section">
      <h2 className="section-heading-blog">Latest Insights</h2>
      <div className="blog-preview-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-preview-item">
            <div className="blog-image-wrapper">
              <img
                src={blog.image}
                alt={blog.title}
                className="blog-preview-image"
              />
            </div>
            <h4 className="blog-title">{blog.title}</h4>
            <a href={blog.link} className="blog-preview-link">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;