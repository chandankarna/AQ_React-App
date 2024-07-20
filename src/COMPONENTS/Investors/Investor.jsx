import React, { Component } from 'react'
import './Style.scss'
import Header from './Header'
import Data from './Data'
import { Helmet } from 'react-helmet'
import Navs from '../../DEFAULTS/Navs/LargeScreenNav/Navs'
import Footer from '../Footer/Footer'
// import DataTest from './DataSetTest'

export class Investor extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Investors ~ Algoquant Fintech</title>
        </Helmet>
        <div className="wrapper">
          <Navs />
          <Header />
          <Data />
          {/* <DataTest /> */}
          <Footer />
        </div>
      </>
    )
  }
}

export default Investor