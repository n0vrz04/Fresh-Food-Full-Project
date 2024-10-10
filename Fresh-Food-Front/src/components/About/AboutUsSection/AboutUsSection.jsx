import React from 'react';
import './AboutUsSection.css';
import leafIcon from '../../../assets/pictures/about/leaf_icon.png';
import leftBarImg from '../../../assets/pictures/about/story_large_image.jpg';
import galleryImage1 from '../../../assets/pictures/about/story_image_slider1.jpg';
import galleryImage2 from '../../../assets/pictures/about/story_image_slider2.jpg';
import galleryImage3 from '../../../assets/pictures/about/story_image_slider3.jpg';

import {Carousel} from 'react-bootstrap';

const AboutUsSection = () => {
    return (
      <section className="about-us-section">
        <div className="about-us-header text-center">
          <h2>Welcome To Fresh Food</h2>
          <h1>A LITTLE STORY ABOUT US</h1>
          <div className="decorative-divider">
            <hr className="line" />
            <img src={leafIcon} alt="leaf icon" />
            <hr className="line" />
          </div>
          
        </div>
  
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
          <h3 className="mb-4">A FRIENDLY ONLINE STORY</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur rutrum ut iaculis arcu. Proin tincidunt, ipsum nec vehicula euismod, nibh pretium lorem at ornare risus sem et risus.</p>
            <p>Curabitur pulvinar dui viverra libero lobortis in dictum velit luctus. Donec imperdiet tincidunt interdum. Duis ultricies condimentum interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>
          <div className="col-md-6">
             
            <Carousel className="gallery-carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={leftBarImg}
                  alt="Gallery item 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={galleryImage1}
                  alt="Gallery item 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={galleryImage2}
                  alt="Gallery item 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={galleryImage3}
                  alt="Gallery item 3"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
    );
  };
  
  export default AboutUsSection;


