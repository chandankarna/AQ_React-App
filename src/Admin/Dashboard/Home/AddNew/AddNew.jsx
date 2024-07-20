import React from 'react';
import './Style.scss'
import SideNav from '../../../Defaults/Navs/SideNav';
import TopNav from '../../../Defaults/Navs/TopNav';
import Footer from '../DashFooter';
import AddForm from './AddForm';
import { Helmet } from 'react-helmet';
import TestForm from './TestForm';

function AddNew() {


    return (
        <>
            <Helmet>
                <title>
                    Add New Document ~ Algoquant
                </title>
            </Helmet>
            <TopNav />
            <SideNav />
            <AddForm />
            {/* <TestForm /> */}
            <Footer />
        </>
    );
}

export default AddNew;
