import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import BackToTop from '../BackToTop/BackToTop'
import LoginBanner from './LoginBanner/LoginBanner'
import LoginAccount from './LoginAccount/LoginAccount'

const Login = () => {
  return (
    <div>
      <Navbar />
      <LoginBanner />
      <LoginAccount />
      <BackToTop />
      <Footer/>
    </div>
  )
}

export default Login
