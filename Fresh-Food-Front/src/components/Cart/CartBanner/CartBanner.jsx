import React from 'react';
import './CartBanner.css'; 


const CartBanner = () => {
  return (
    <div className="about-us-banner">
      <div className="banner-content">
        <h1>Your Shopping Cart</h1>
        <p className='d-flex align-items-center gap-1 justify-content-center'>
          <a href='/' className='home-link'>Home</a> &gt; <span>Your Shopping Cart</span>
        </p>
      </div>
    </div>
  );
};

export default CartBanner;
