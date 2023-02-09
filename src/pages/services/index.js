import React from 'react'
import Layout from "../../components/App/Layout"
import NavbarTwo from "../../components/App/NavbarTwo"
// import PageBanner from '../../components/Common/PageBanner'
import Footer from "../../components/App/Footer"
// import ServicesOne from '../../components/Services/ServicesOne'
import ServicesOverview from '../../components/Services/ServicesOverview'
import ServicesDescription from '../../components/Services/ServicesDescription'
import StartProject from '../../components/Common/StartProject'

const Services = () => {
    return (
        <Layout
            seoTitle="Our Services - Techna"
        >
            <NavbarTwo />
            {/* <PageBanner
                pageTitle="Services" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Services" 
            /> */}
            {/* <ServicesOne /> */}
            <ServicesOverview />
            <ServicesDescription />
            <StartProject />
            <Footer />
        </Layout>
    );
}

export default Services