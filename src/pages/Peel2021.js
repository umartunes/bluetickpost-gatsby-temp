import React from "react";
import Layout from "../components/App/Layout";
import Footer from "../components/App/Footer";
import EventDetailsContent from "../components/Peel2021/EventDetailsContent";
// import EventSpeakers from '../components/Peel2021/EventSpeakers'
import Sponsors from "../components/Peel2021/Sponsors";
import NavbarTwo from "../components/App/NavbarTwo";
import HowItWork from "../components/Peel2021/HowItWork";
// import Partner from "../components/Hackathons/Peel2021/Partner";

const EventDetails = () => {
  return (
    <Layout>
      <NavbarTwo />

      <EventDetailsContent />
      {/* <Partner /> */}
      <HowItWork />
      <Sponsors />
      <Footer />
    </Layout>
  );
};

export default EventDetails;
