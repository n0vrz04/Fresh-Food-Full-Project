// WhyChooseUs.js
import React from 'react';
import './WhyChooseUs.css'; 
import bigBasket from '../../../assets/pictures/bigBasket.jpg';
import icon1 from '../../../assets/pictures/icons/icon-choose-1_small.png'
import icon2 from '../../../assets/pictures/icons/icon-choose-2_small.png'
import icon3 from '../../../assets/pictures/icons/icon-choose-3_small.png'
import icon4 from '../../../assets/pictures/icons/icon-choose-4_small.png'
import icon5 from '../../../assets/pictures/icons/icon-choose-5_small.png'
import icon6 from '../../../assets/pictures/icons/icon-choose-6_small.png'

const features = [
  { icon: icon1, title: '100% Organic', description: 'Suspendisse ultricies nisi vel quam suscipit, et rutrum odio porttitor.' },
  { icon: icon2, title: 'Family healthy', description: 'Suspendisse ultricies nisi vel quam suscipit, et rutrum odio porttitor.' },
  { icon: icon3, title: 'Always Fresh', description: 'Suspendisse ultricies nisi vel quam suscipit, et rutrum odio porttitor.' },
];

const features2 = [
  { icon: icon4, title: '100% Organic', description: 'Suspendisse ultricies nisi vel quam suscipit, et rutrum odio porttitor.' },
  { icon: icon5, title: 'Family healthy', description: 'Suspendisse ultricies nisi vel quam suscipit, et rutrum odio porttitor.' },
  { icon: icon6, title: 'Always Fresh', description: 'Suspendisse ultricies nisi vel quam suscipit, et rutrum odio porttitor.' },
];

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us bg-white">
      <h2 className="why-title">Why Choose Us</h2>
      <p className="description">
        The fact of the matter is that you really know something's organic when you find bugs!
        They obviously wouldn't have made it that far in a non-organic growing environment,
        so better than any certification or seal on a package, the presence of creatures lets you know the plant was healthy and.
      </p>
      <div className="content">
        <div className="features-left">
          {features.map((feature, index) => (
            <div className="feature" key={index}>
              <div className="iconHeader">
                <img src={feature.icon} alt="" />
                <h3 className="feature-title">{feature.title}</h3>
              </div>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="basket-image">
          <img
            src={bigBasket}
            alt="Basket of vegetables"
          />
        </div>
        <div className="features-right">
          {features2.map((feature, index) => (
            <div className="feature" key={index}>
              <div className="iconHeader">
                <img src={feature.icon} alt="" />
                <h3 className="feature-title">{feature.title}</h3>
              </div>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
