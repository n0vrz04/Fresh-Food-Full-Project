import React from 'react';
import './LoginBanner.css'; 


const LoginBanner = () => {
  return (
    <div className="about-us-banner">
      <div className="banner-content">
        <h1>Account</h1>
        <p className='d-flex align-items-center gap-1 justify-content-center'>
          <a href='/' className='home-link'>Home</a> &gt; <span>Account</span>
        </p>
      </div>
    </div>
  );
};

export default LoginBanner;
