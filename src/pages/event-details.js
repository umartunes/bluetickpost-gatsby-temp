import React from 'react'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import EventDetailsContent from '../components/Events/EventDetailsContent'
import EventSpeakers from '../components/Events/EventSpeakers'

const EventDetails = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Event Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Event Details" 
            />
            <EventDetailsContent />
            <EventSpeakers />
            <Footer />
        </Layout>
    );
}

export default EventDetails;