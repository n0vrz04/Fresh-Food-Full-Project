import React from 'react';
import './WishlistBanner.css'; 


const WishlistBanner = () => {
  return (
    <div className="about-us-banner">
      <div className="banner-content">
        <h1>Wish List</h1>
        <p className='d-flex align-items-center gap-1 justify-content-center'>
          <a href='/' className='home-link'>Home</a> &gt; <span>Wish List</span>
        </p>
      </div>
    </div>
  );
};

export default WishlistBanner;
