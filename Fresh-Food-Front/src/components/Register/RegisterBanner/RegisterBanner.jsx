import React from 'react';
import './RegisterBanner.css'; 


const RegisterBanner = () => {
  return (
    <div className="about-us-banner">
      <div className="banner-content">
        <h1>Create Account</h1>
        <p className='d-flex align-items-center gap-1 justify-content-center'>
          <a href='/' className='home-link'>Home</a> &gt; <span>Create Account</span>
        </p>
      </div>
    </div>
  );
};

export default RegisterBanner;
