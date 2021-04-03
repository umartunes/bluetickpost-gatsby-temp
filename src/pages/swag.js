import React from 'react'

import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"

const SWAG = () => {
    
    return (
        <Layout>
            <NavbarThree />
            <div className="demo-iframe-container"><iframe title="SWAG bag pickup" loading="lazy" src="https://forms.zohopublic.com/stemone/form/SWAGbagpickup/formperma/6WCciZIZlgzLTQBms-8yhHdR8xd8aNa8oDdI-vpcdxk"></iframe></div>
        </Layout>
    );
}

export default SWAG