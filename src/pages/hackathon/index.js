import React from "react";
import Layout from "../../components/App/Layout";
import NavbarTwo from "../../components/App/NavbarTwo";
import StartProject from "../../components/Hackathon/HackathonIndex/StartProject";
import Footer from "../../components/App/Footer";
// import EventsCard from "../../components/Hackathon/HackathonIndex/EventsCard";
import VideosSection from "../../components/Hackathon/HackathonIndex/VideosSection";
import CommunityInitiative from "../../components/Hackathon/HackathonIndex/CommunityInitiative";
// import Sponsors from "../../components/Hackathon/HackathonIndex/Sponsors"; 
import WhyJRHacks from "../../components/Hackathon/HackathonIndex/WhyJRHacks";
import StudentSchedule from "../../components/Hackathon/HackathonIndex/StudentSchedule";
import HackathonExpectations from "../../components/Hackathon/HackathonIndex/HackathonExpectations";
// import hacksupdate from "../../components/Hackathon/HackathonIndex/HackathonUpdate";
import HacksUpdates from '../../components/Hackathon/HackathonIndex/hacksupdates'
import Pricing from '../../components/Hackathon/HackathonIndex/Pricing'

const Hackathon = () => {
  //allEvents.json

  return (
    <Layout>
      <NavbarTwo />
      <StartProject />
       {/* <HacksUpdates /> */}
      <StudentSchedule />
      {/* <hacksupdate /> */}
      <HackathonExpectations />
      <CommunityInitiative />
      <VideosSection />
      <WhyJRHacks />
      {/* <Pricing /> */}
      {/* <EventsCard /> */}
      <Footer />
    </Layout>
  );
};

export default Hackathon;
