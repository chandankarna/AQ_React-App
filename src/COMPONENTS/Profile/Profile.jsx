import React, { Component } from 'react'
import './Style.scss'
import Directors from './Directors'
import Header from './Header'
import Tables from './Tables'
import { Helmet } from 'react-helmet'
import Navs from '../../DEFAULTS/Navs/LargeScreenNav/Navs'
import Footer from '../Footer/Footer'


export class Profile extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>
            Profile ~ Algoquant Fintech
          </title>
        </Helmet>
        <div className="wrapper">
          <Navs />
          <Header />
          <Directors />
          <Tables />
          <Footer />
        </div>
      </>
    )
  }
}

export default Profile