import React from 'react'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import TwoColumns from '../components/Studies/TwoColumns'

// Functional component
const CaseStudies = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Case Studies 2 Columns" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Case Studies 2 Columns" 
            />
           <TwoColumns />
            <Footer />
        </Layout>
    );
}

export default CaseStudies