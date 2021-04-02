import React from 'react'
import Layout from "../../components/App/Layout"
import NavbarTwo from "../../components/App/NavbarTwo"
// import PageBanner from '../../components/Common/PageBanner'
import StartProject from "../../components/Hackathon/HackathonIndex/StartProject";
import Footer from "../../components/App/Footer"
import EventsCard from '../../components/Hackathon/HackathonIndex/EventsCard'
import VideosSection from '../../components/Hackathon/HackathonIndex/VideosSection'
import CommunityInitiative from '../../components/Hackathon/HackathonIndex/CommunityInitiative'
import Sponsors from '../../components/Hackathon/HackathonIndex/Sponsors'
import WhyJRHacks from '../../components/Hackathon/HackathonIndex/WhyJRHacks'
import StudentSchedule from '../../components/Hackathon/HackathonIndex/StudentSchedule'
import HackathonExpectations from '../../components/Hackathon/HackathonIndex/HackathonExpectations'

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
            <VideosSection />
            <CommunityInitiative />
            <Sponsors />
            <WhyJRHacks />
            <StudentSchedule />
            <HackathonExpectations />
            <EventsCard />
            <Footer />
        </Layout>
    );
}

export default Hackathon