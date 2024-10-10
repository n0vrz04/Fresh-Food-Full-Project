import React from 'react';
import './ProductDetailBanner.css'; 


const ProductDetailBanner = () => {
  return (
    <div className="details-banner">
      <div className="banner-content">
        <h1>Product Details</h1>
        <p>
          <a href='/' className='home-link'>Home</a> &gt; <span>Product Details</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetailBanner;



