import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
// import Navs from './Navs/LargeScreenNav/Navs'
// import Footer from "../COMPONENTS/Footer/Footer";


export class Layout extends Component {
    render() {
        return (
            <>
                {/* <Navs /> */}
                <Outlet />
                {/* <Footer /> */}
            </>
        )
    }
}

export default Layout