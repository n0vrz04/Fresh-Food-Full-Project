// src/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'; // Brand icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-image'>
      </div>
      <div className="footer-top">
        <div className="footer-section">
          <h3 className="footer-heading">About Us</h3>
          <p>
            With more than 15 years of experience, we can proudly say that we
            are one of the best in business, a trusted supplier for more than
            1000 companies...
          </p>
          <a href="/about" className="footer-link">
            READ MORE →
          </a>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Information</h3>
          <ul className="footer-list d-flex flex-column">
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Legal Notice</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Secure Payment</a></li>
            <li><a href="#">Our Stores</a></li>
          </ul>
        </div>

        <div className="footer-section d-flex flex-column gap-2">
          <h3 className="footer-heading">Get In Touch</h3>
          <div className="footer-social-icons d-flex gap-2">
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
          </div>
          <h4 className="footer-heading">Payment Accept</h4>
          <a href='#' className="footer-payment-icons">
            <img src="https://freshfood-store.myshopify.com/cdn/shop/t/5/assets/f1_payment1_img.png?v=169920717840467018591501466879" alt="PayPal" />
          </a>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Get Newsletter</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...</p>
          <input type="email" placeholder="Place enter your email" className="footer-input" />
          <button className="footer-button">SUBSCRIBE →</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright ©2017 Fresh Food - All Rights Reserved</p>
        <ul className="footer-bottom-links">
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="#">Term of Use</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Policy</a></li>
          <li><a href="#">Site Map</a></li>
        </ul>
        <p>Language: ENG | Price: EUR</p>
      </div>
    </footer>
  );
};

export default Footer;
