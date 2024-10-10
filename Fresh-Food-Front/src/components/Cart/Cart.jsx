import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import BackToTop from '../BackToTop/BackToTop'
import CartBanner from './CartBanner/CartBanner'
import CartRow from './CartRow/CartRow'

const Cart = () => {
  return (
    <div>
      <Navbar />
      <CartBanner />
      <CartRow />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default Cart
