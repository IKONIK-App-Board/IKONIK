import React from "react";

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
    <section style={{ padding: "50px", backgroundColor: "#fff", textAlign: "center" }}>
      <h2>Latest Insights</h2>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        {blogs.map((blog, index) => (
          <div key={index} style={{ maxWidth: "300px", margin: "10px", textAlign: "left" }}>
            <img
              src={blog.image}
              alt={blog.title}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h4>{blog.title}</h4>
            <a href={blog.link} style={{ color: "#007bff", textDecoration: "none" }}>
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;