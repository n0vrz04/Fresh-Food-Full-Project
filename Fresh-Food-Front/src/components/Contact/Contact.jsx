import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import BackToTop from '../BackToTop/BackToTop'
import ContactUsBanner from './ContactUsBanner/ContactUsBanner'
import Info from './Info/Info'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactUsBanner />
      <Info />
      <ContactForm />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default Contact
