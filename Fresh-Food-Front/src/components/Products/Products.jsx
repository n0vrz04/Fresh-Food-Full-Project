import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import ProductsBanner from './ProductsBanner/ProductsBanner'
import BackToTop from '../BackToTop/BackToTop'
import ProductGrid from './ProductGrid/ProductGrid'
import { useEffect } from 'react'

const Product = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Navbar />
      <ProductsBanner />
      <ProductGrid  />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default Product

