import React from 'react'
import FeaturedProducts from './LastestProducts/LastestProducts'
import PromoBanner from './PromoBanner/PromoBanner'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import LastestFromBlog from './LastestFromBlog/LastestFromBlog'
import HomeImgCards from './HomeImgCards/HomeImgCards'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import BackToTop from '../BackToTop/BackToTop'
import HomeCarousel from './HomeCarousel/HomeCarousel'
import WeAreFreshFood from './WeAreFreshFood/WeAreFreshFood'
import OurSuppliers from './OurSuppliers/OurSuppliers'
import LastestProducts from './LastestProducts/LastestProducts'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <HomeImgCards />
      <WeAreFreshFood />
      <OurSuppliers />
      <LastestProducts />
      <PromoBanner />
      <WhyChooseUs />
      <LastestFromBlog />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default Home
