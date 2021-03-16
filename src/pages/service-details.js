import React from 'react'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent'
import RelatedServices from '../components/ServiceDetails/RelatedServices'
 
const Details = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Service Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Service Details" 
            />
            <ServiceDetailsContent />
            <RelatedServices />
            <Footer />
        </Layout>
    );
}

export default Details