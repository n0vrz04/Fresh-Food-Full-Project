import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Info.css';

const Info = () => {
  return (
    <div className="map-with-contact">
      <div className="contact-info">
        <div className="contact-item d-flex gap-4">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <p>121 King Street,</p>
          <p>Melbourne,  Victoria 3000 Australia</p>
          </div>
          
        </div>
        <div className="contact-item d-flex gap-4">
          <i className="fas fa-envelope"></i>
          <div>
            <p>www.xanadu.com</p>
            <p>hello@xanadu.com</p>
          </div>
        </div>
        <div className="contact-item d-flex gap-4">
          <i className="fas fa-phone"></i>
          <div>
            <p>Hotline: (+1) 866-540-3229</p>
            <p>Fax: (+1) 866-540-3229</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Info;
