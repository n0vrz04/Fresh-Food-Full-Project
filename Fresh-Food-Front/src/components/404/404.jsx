import React from 'react';
import { useNavigate } from 'react-router-dom';
import './404.css'; // Optional: add custom CSS for styling the 404 page
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import Icon404 from '../../assets/pictures/pic404.jpg';

const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <div className="not-found-container">
      <div className="not-found-icon">
        <img src={Icon404} alt="" />
      </div>
      <h1>THIS IS NOT THE WEB PAGE YOU ARE LOOKING FOR</h1>
      <p>Please try one of the following pages</p>
      <button className="home-button" onClick={goToHome}>Home Page »</button>
    </div>
    </div>
    
  );
};

export default NotFound;
