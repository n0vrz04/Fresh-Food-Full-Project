import React from 'react'
import Navbar from '../Header/Navbar'
import BackToTop from '../BackToTop/BackToTop'
import Footer from '../Footer/Footer'
import ProductDetailBanner from './ProductDetailBanner/ProductDetailBanner'
import ProductDetailSection from './ProductDetailSection/ProductDetailSection'

const ProductsDetail = () => {
  return (
    <div>
      <Navbar />
      <ProductDetailBanner />
      <ProductDetailSection />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default ProductsDetail
