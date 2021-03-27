import React from 'react'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import EventsCard from '../components/Events/EventsCard'

const AllHacks = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Events" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Events" 
            />
            <EventsCard />
            <Footer />
        </Layout>
    );
}

export default AllHacks