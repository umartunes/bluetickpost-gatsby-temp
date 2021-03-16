import React from 'react'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import OurHistoryContentOne from '../components/Community/OurHistoryContentOne'
import OurHistoryContentTwo from '../components/Community/OurHistoryContentTwo'

const History = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Community" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Community" 
            />
            <OurHistoryContentOne />
            <OurHistoryContentTwo />
            <Footer />
        </Layout>
    );
}

export default History