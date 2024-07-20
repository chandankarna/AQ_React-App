import React, { Component } from 'react'
import './Style.scss'
import Cols from './Cols'
import Header from './Header'
import Map from './Map'
import Offer from './Offer'
import Office from './Office'
import Story from './Story'
import Contact from '../ContactUs/Contact'
import BackGround from './BackGround'
import { Helmet } from 'react-helmet'
import Navs from '../../DEFAULTS/Navs/LargeScreenNav/Navs'
import Footer from '../Footer/Footer'


export class Home extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>
            Home ~ Algoquant Fintech Limited
          </title>
        </Helmet>
        <div className="wrapper">
          <Navs />
          <Header />
          <Offer />
          <Cols />
          <Story />
          <BackGround />
          <Contact />
          <Map />
          <Office />
          <Footer />
        </div>
      </>
    )
  }
}

export default Home