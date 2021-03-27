import React from 'react'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import EventDetailsContent from '../components/Peel2021/EventDetailsContent'
import EventSpeakers from '../components/Peel2021/EventSpeakers'

const EventDetails = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Jr.Hacks Peel - 2021" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Hackathon - Peel 2021" 
            />
            <EventDetailsContent />
            <EventSpeakers />
            <Footer />
        </Layout>
    );
}

export default EventDetails;