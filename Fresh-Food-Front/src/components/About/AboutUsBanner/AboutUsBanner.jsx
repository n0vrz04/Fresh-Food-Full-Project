import React from 'react';
import './AboutUsBanner.css'; 


const AboutUsBanner = () => {
  return (
    <div className="about-us-banner">
      <div className="banner-content">
        <h1>About Us</h1>
        <p className='d-flex align-items-center gap-1 justify-content-center'>
          <a href='/' className='home-link'>Home</a> &gt; <span>About Us</span>
        </p>
      </div>
    </div>
  );
};

export default AboutUsBanner;
