import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import BackToTop from '../BackToTop/BackToTop'
import BlogsBanner from './BlogsBanner/BlogsBanner'
import BlogCards from './BlogCards/BlogCards'

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <BlogsBanner />
      <BlogCards />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default Blogs
