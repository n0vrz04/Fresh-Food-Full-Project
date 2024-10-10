import React from 'react';
import './BlogDetailBanner.css'; 


const BlogDetailBanner = () => {
  return (
    <div className="blog-details-banner">
      <div className="banner-content">
        <h1>Blog Details</h1>
        <p>
          <a href='/' className='home-link'>Home</a> &gt; <span>Blog Details</span>
        </p>
      </div>
    </div>
  );
};

export default BlogDetailBanner;



