import React from 'react';
import './PromoBanner.css'; 

import vegetables from '../../../assets/pictures/home/home1-images-banner1.jpg';
import { Link } from 'react-router-dom';

const PromoBanner = () => {
  return (
    <div className="special-offer-container">
      <div className="offer-content">
        <div>
        <img 
          src={vegetables} 
          alt="Vegetables"
          className="offer-image"
        />
        </div>
        
        <div className="offer-details text-center d-flex flex-column align-items-center gap-0">
          <h3>Special Offers</h3>
          <h1>GET 30% OFF</h1>
          <p className='your-order'>YOUR ORDER OF $100 OR MORE</p>
          <hr className='section-divider w-50'/>
          <p className="expired">Expired</p>
          <Link to='/products' className='shop-button'>Shop Now</Link>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;