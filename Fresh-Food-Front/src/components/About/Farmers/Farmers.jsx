import React from 'react';
import './Farmers.css'; 
import OurTeamImg1 from '../../../assets/pictures/about/our_team_image1.jpg';
import OurTeamImg2 from '../../../assets/pictures/about/our_team_image2.jpg';
import OurTeamImg3 from '../../../assets/pictures/about/our_team_image3.jpg';
import leafIcon from '../../../assets/pictures/about/leaf_icon.png';

const farmersData = [
  {
    id: 1,
    name: 'Michael Andrews',
    image: OurTeamImg1, 
    description: 'Richard McClintock, a Latin professor at words, consectetur, from a Lorem Ipsum passage, and literature, discovered the',
  },
  {
    id: 2,
    name: 'Michael Andrews',
    image: OurTeamImg2,
    description: 'Richard McClintock, a Latin professor at words, consectetur, from a Lorem Ipsum passage, and literature, discovered the',
  },
  {
    id: 3,
    name: 'Michael Andrews',
    image: OurTeamImg3,
    description: 'Richard McClintock, a Latin professor at words, consectetur, from a Lorem Ipsum passage, and literature, discovered the',
  },
];

const Farmers = () => {
  return (
    <div className="farmers-container">
      <h2 className="title">We Are Family</h2>
      <h3 className="subtitle">FRESH FOOD'S FARMERS</h3>
      <div className="decorative-divider">
            <hr className="line" />
            <img src={leafIcon} alt="leaf icon" />
            <hr className="line" />
        </div>
      <div className="farmers-list my-4">
        {farmersData.map(farmer => (
          <div className="farmer-card" key={farmer.id}>
            <img src={farmer.image} alt={farmer.name} className="farmer-image" />
            <h4 className="farmer-name">{farmer.name}</h4>
            <p className="farmer-description">{farmer.description}</p>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-skype"></i>
              <i className="fab fa-google-plus"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Farmers;
