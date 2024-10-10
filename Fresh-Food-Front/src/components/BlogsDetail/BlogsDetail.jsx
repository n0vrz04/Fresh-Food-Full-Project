import React from 'react'
import Navbar from '../Header/Navbar'
import BackToTop from '../BackToTop/BackToTop'
import BlogDetailBanner from './BlogDetailBanner/BlogDetailBanner'
import Footer from '../Footer/Footer'
import BlogDetailSection from './BlogDetailSection/BlogDetailSection'

const BlogsDetail = () => {
  return (
    <div>
      <Navbar />
      <BlogDetailBanner />
      <BlogDetailSection />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default BlogsDetail
