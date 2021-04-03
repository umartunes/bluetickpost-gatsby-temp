import React from 'react'

import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"

const register = () => {
    
    return (
        <Layout>
            <NavbarThree />
            <div className="demo-iframe-container"><iframe title="Reserve your spot" loading="lazy" src="https://admin-stem2.zohobookings.com/portal-embed#/customer/4165035000000032034"></iframe></div>
        </Layout>
    );
}

export default register