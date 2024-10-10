import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import AboutUsBanner from './AboutUsBanner/AboutUsBanner'
import AboutUsSection from './AboutUsSection/AboutUsSection'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import Farmers from './Farmers/Farmers'
import BackToTop from '../BackToTop/BackToTop'

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutUsBanner />
      <AboutUsSection />
      <WhyChooseUs />
      <Farmers />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default About
