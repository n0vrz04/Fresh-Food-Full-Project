// WhyChooseUs.js
import React from 'react';
import './WhyChooseUs.css'; 
import leafIcon from '../../../assets/pictures/about/leaf_icon.png';
import bigBasket2 from '../../../assets/pictures/about/choose_us_image.jpg';
import icon1 from '../../../assets/pictures/about/choose_us_block_1_icon.jpg'
import icon2 from '../../../assets/pictures/about/choose_us_block_2_icon.jpg'
import icon3 from '../../../assets/pictures/about/choose_us_block_3_icon.jpg'
import icon4 from '../../../assets/pictures/about/choose_us_block_4_icon.jpg'
import icon5 from '../../../assets/pictures/about/choose_us_block_5_icon.jpg'
import icon6 from '../../../assets/pictures/about/choose_us_block_6_icon.jpg'

const features = [
  { icon: icon1, title: 'Always Fresh', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: icon2, title: 'Keep You Healthy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: icon3, title: 'Keep You Healthy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const features2 = [
  { icon: icon4, title: 'Keep You Healthy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: icon5, title: 'Keep You Healthy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { icon: icon6, title: 'Keep You Healthy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2 className="title">Why Choose Us</h2>
      <div className="decorative-divider">
            <hr className="line" />
            <img src={leafIcon} alt="leaf icon" />
            <hr className="line" />
        </div>
      <div className="content">
        <div className="features-left d-flex gap-5">
          {features.map((feature, index) => (
            <div className="feature d-flex align-items-center gap-2" key={index}>
              <div className="iconHeader d-flex flex-column gap-0 align-items-center">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              <img src={feature.icon} alt="" />
            </div>
          ))}
        </div>
        <div className="basket-image">
          <img
            src={bigBasket2}
            alt="Basket of vegetables"
          />
        </div>
        <div className="features-right d-flex gap-5">
          {features2.map((feature, index) => (
            <div className="feature d-flex align-items-center gap-2" key={index}>
                <img src={feature.icon} alt="" />
                <div className="iconHeader d-flex flex-column gap-0 align-items-center">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
