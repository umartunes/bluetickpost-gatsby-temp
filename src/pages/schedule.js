import React from 'react'

import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
// import Footer from "../components/App/Footer"
// import StartProject from '../components/Common/StartProject'
// import PageBanner from '../components/Schedule/PageBanner'
// import WhyStem1 from '../components/Schedule/WhyStem1'
// import VirtualClass from '../components/Schedule/VirtualClass'

// import { InlineWidget } from "react-calendly";

const FAQ = () => {
    
    return (
        <Layout>
            <NavbarThree />
            <div className="demo-iframe-container"><iframe title="Book a Demo" loading="lazy" src="https://admin-stem2.zohobookings.com/portal-embed#/customer/demo"></iframe></div>
        </Layout>
    );
}

export default FAQ