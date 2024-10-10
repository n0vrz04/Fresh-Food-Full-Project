import React from 'react';
import './BlogsBanner.css'; 


const BlogsBanner = () => {
  return (
    <div className="blogs-banner">
      <div className="banner-content">
        <h1>Blogs</h1>
        <p className='d-flex align-items-center gap-1 justify-content-center'>
          <a href='/' className='home-link'>Home</a> &gt; <span>Blogs</span>
        </p>
      </div>
    </div>
  );
};

export default BlogsBanner;
