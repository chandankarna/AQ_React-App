import React, { Component } from 'react'
import './Style.scss'
import { Helmet } from 'react-helmet'
import Contact from './Contact'
import Header from './Header'
import Navs from '../../DEFAULTS/Navs/LargeScreenNav/Navs'
import Footer from '../Footer/Footer'

export class ContactUs extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Contact Us ~ Algoquant Fintech</title>
        </Helmet>
        <div className="wrapper">
          <Navs />
          <Header />
          <Contact />
          <Footer />
        </div>
      </>
    )
  }
}

export default ContactUs