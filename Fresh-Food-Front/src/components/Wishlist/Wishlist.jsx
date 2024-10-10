import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import BackToTop from '../BackToTop/BackToTop'
import WishlistBanner from './WishlistBanner/WishlistBanner'
import WishlistRow from './WishlistRow/WishlistRow'

const Wishlist = () => {
  return (
    <div>
      <Navbar />
      <WishlistBanner />
      <WishlistRow />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default Wishlist
