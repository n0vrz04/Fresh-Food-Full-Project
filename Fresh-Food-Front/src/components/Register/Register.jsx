import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import RegisterBanner from './RegisterBanner/RegisterBanner'
import BackToTop from '../BackToTop/BackToTop'
import CreateAccount from './CreateAccount/CreateAccount'

const Register = () => {
  return (
    <div>
      <Navbar />
      <RegisterBanner />
      <CreateAccount />
      <BackToTop />
      <Footer/>
    </div>
  )
}

export default Register
