import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OurSuppliers.css';
import Carousel from 'react-bootstrap/Carousel';
import freshLogo1 from '../../../assets/pictures/home/brand-1_compact.jpg';
import freshLogo2 from '../../../assets/pictures/home/brand-2_compact.jpg';
import freshLogo3 from '../../../assets/pictures/home/brand-3_compact.jpg';
import freshLogo4 from '../../../assets/pictures/home/brand-4_compact.jpg';
import freshLogo5 from '../../../assets/pictures/home/brand-5_compact.jpg';
import freshLogo6 from '../../../assets/pictures/home/brand-6_compact.jpg';

const OurSuppliers = () => {
  return (
    <div className="our-suppliers-section mt-5">
      <div className="container text-center py-5">
        <h2 className="text-white mb-4">Our Suppliers</h2>
        <hr className="section-divider" />
        <Carousel
          indicators={false}
          interval={1000}
          controls={false}
          className="supplier-carousel"
          slide={true} 
        >
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
              <img src={freshLogo1} alt="Organic Vegan Food" className="img-fluid supplier-logo" />
              <img src={freshLogo2} alt="Organic" className="img-fluid supplier-logo" />
              <img src={freshLogo3} alt="Vegan Restaurant" className="img-fluid supplier-logo" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
              <img src={freshLogo4} alt="Fresh Food" className="img-fluid supplier-logo" />
              <img src={freshLogo5} alt="Vegetarian Natural Restaurant" className="img-fluid supplier-logo" />
              <img src={freshLogo6} alt="Organic Vegan Food" className="img-fluid supplier-logo" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default OurSuppliers;
