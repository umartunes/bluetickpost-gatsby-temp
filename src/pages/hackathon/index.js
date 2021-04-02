import React from 'react'
import Layout from "../../components/App/Layout"
import NavbarTwo from "../../components/App/NavbarTwo"
// import PageBanner from '../../components/Common/PageBanner'
import StartProject from "../../components/Hackathon/HackathonIndex/StartProject";
import Footer from "../../components/App/Footer"
import EventsCard from '../../components/Hackathon/HackathonIndex/EventsCard'

const Hackathon = () => {
//allEvents.json
 
    return (
        <Layout>
            <NavbarTwo />
            {/* <PageBanner
                pageTitle="Hackathon" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Hackathon" 
            /> */}
            <StartProject />
            <EventsCard />
            <Footer />
        </Layout>
    );
}

export default Hackathon