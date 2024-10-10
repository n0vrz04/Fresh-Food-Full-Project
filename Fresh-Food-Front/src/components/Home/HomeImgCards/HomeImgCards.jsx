import React from 'react'
import './HomeImgCards.css';
import HomeImg1 from '../../../assets/pictures/home/3_grande.jpg';
import HomeImg2 from '../../../assets/pictures/home/4_grande.jpg';
import HomeImg3 from '../../../assets/pictures/home/5_grande.jpg';

const HomeImgCards = () => {
  return (
    <div className="container product-categories mt-5">
      <div className="row text-center category-row">
        <div className="col-md-4 col-12 mb-3">
            <img src={HomeImg1} alt="Organic Fruit" className="img-fluid category-card" />
        </div>
        <div className="col-md-4 col-12 mb-3">
            <img src={HomeImg2} alt="Organic Vegetables" className="img-fluid category-card" />
        </div>
        <div className="col-md-4 col-12 mb-3">
            <img src={HomeImg3} alt="Kitchen Spices" className="img-fluid category-card" />
        </div>
      </div>
    </div>
  );
}

export default HomeImgCards
