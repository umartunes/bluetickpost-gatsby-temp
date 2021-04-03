import React from 'react'

import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"

const FAQ = () => {
    
    return (
        <Layout>
            <NavbarThree />
            <div className="demo-iframe-container"><iframe title="Book a Demo" loading="lazy" src="https://admin-stem2.zohobookings.com/portal-embed#/customer/demo"></iframe></div>
        </Layout>
    );
}

export default FAQ