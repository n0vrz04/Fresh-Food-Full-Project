import React from 'react'
import './HomeCarousel.css';
import SlideShow1 from '../../../assets/pictures/home/slideshow1.jpg';
import SlideShow2 from '../../../assets/pictures/home/slideshow2.jpg';
import {Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeCarousel = () => {
  return (
    <div>
      <Carousel indicators={false}>
        <Carousel.Item>
            <img
                className="d-block w-100 img-fluid"
                src={SlideShow1}
                alt="First slide"
            />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <h1 className='carousel-header'>FRESH FOOD</h1>
            <p className='carousel-text'>Delivering the best organic fruits and vegetables to your doorstep</p>
            <Link to="/products" className="carousel-button mt-3">SHOP NOW</Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100 img-fluid"
                src={SlideShow2}
                alt="Second slide"
            />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
            <h1 className='carousel-header2'>FRESH ORGANIC FOOD</h1>
            <p className='carousel-text2'>Choose fresh and healthy for a better tomorrow</p>
            <Link to="/products" className="carousel-button2  mt-3">VIEW DETAIL !</Link>
          </div>
        </Carousel.Item>
      </Carousel>  
    </div>
  )
}

export default HomeCarousel
