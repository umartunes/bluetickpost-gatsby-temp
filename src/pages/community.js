import React from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo"
import PageBanner from '../components/Common/PageBanner'
import StartProject from "../components/Community/StartProject";
import Footer from "../components/App/Footer"
import OurHistoryContentOne from '../components/Community/OurHistoryContentOne'
import OurHistoryContentTwo from '../components/Community/OurHistoryContentTwo'

const History = () => {
    return (
        <Layout>
            <NavbarTwo />
            {/* <PageBanner
                pageTitle="Community" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Community" 
            /> */}
            <StartProject />
            <OurHistoryContentOne />
            <OurHistoryContentTwo />
            <Footer />
        </Layout>
    );
}

export default History