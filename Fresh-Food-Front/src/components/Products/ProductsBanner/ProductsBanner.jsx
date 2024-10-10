import React from 'react';
import './ProductsBanner.css'; 


const ProductsBanner = () => {
  return (
    <div className="products-banner">
      <div className="banner-content">
        <h1>Products</h1>
        <p className='d-flex align-items-center gap-1 justify-content-center'>
          <a href='/' className='home-link'>Home</a> &gt; <span>Products</span>
        </p>
      </div>
    </div>
  );
};

export default ProductsBanner;
