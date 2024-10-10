import React from 'react';
import './WeAreFreshFood.css';
import farmer from '../../../assets/pictures/home/6_large.jpg';
import icon1 from '../../../assets/pictures/home/icon-shipping-1.png';
import icon2 from '../../../assets/pictures/home/icon-shipping-2.png';
import icon3 from '../../../assets/pictures/home/icon-shipping-3.png';
import icon4 from '../../../assets/pictures/home/icon-shipping-4.png';
import leafIcon from '../../../assets/pictures/about/leaf_icon.png';

const WeAreFreshFood = () => {
  return (
    <div className="container fresh-food-section mt-5">
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-12 text-center">
          <img
            src={farmer} 
            alt="Farmer with basket of fresh vegetables"
            className="img-fluid farmer-img"
          />
        </div>
        
        <div className="col-lg-8 col-md-12 text-center text-lg-start">

          <h2 className="text-center right-header">We Are <span className="text-dark fw-bold text-span">FRESH FOOD</span></h2>
          <p className="text-muted text-center right-text">
            The fact of the matter is that you really know something’s organic when you find bugs!
            They obviously wouldn’t have made it that far in a non-organic growing environment, so better
            than any certification or seal on a package, the presence of creatures lets you know the plant
            was healthy and grown organically.
          </p>
          <div className="decorative-divider">
            <hr className="line" />
            <img src={leafIcon} alt="leaf icon" />
            <hr className="line" />
          </div>
          <div className="row text-center mt-4">
        <div className="col-lg-3 col-sm-6 mb-3">
          <div className="feature-card p-3">
            <img src={icon1} alt="" />
            <h5 className="mt-2">FREE SHIPPING</h5>
            <p className="small">ON ORDER OVER $800</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-3">
          <div className="feature-card p-3">
            <img src={icon2} alt="" />
            <h5 className="mt-2">SUPPORT</h5>
            <p className="small">LIFE TIME SUPPORT 24/7</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-3">
          <div className="feature-card p-3">
            <img src={icon3} alt="" />
            <h5 className="mt-2">HELP PARTNER</h5>
            <p className="small">HELP ALL ASPECTS</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mb-3">
          <div className="feature-card p-3">
            <img src={icon4} alt="" />
            <h5 className="mt-2">CONTACT WITH US</h5>
            <p className="small">+07 (0) 7782 9137</p>
          </div>
        </div>
      </div>
        </div>
      </div>

      
    </div>
  );
};

export default WeAreFreshFood;
