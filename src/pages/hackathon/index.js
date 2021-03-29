import React from 'react'
import Layout from "../../components/App/Layout"
import NavbarThree from "../../components/App/NavbarThree"
import PageBanner from '../../components/Common/PageBanner'
import Footer from "../../components/App/Footer"
import EventsCard from '../../components/Hackathon/HackathonIndex/EventsCard'

const Events = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Hackathon" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Hackathon" 
            />
            <EventsCard />
            <Footer />
        </Layout>
    );
}

export default Events