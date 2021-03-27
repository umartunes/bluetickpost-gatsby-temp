import React from 'react';
import NavbarTwo from "../components/App/NavbarTwo"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"

import MainBanner from '../components/JrHacksPeel2021/MainBanner';
import Goals from '../components/JrHacksPeel2021/Goals';
// import AboutUs from '../components/index/AboutUs';
// import Services from '../components/JrHacksPeel2021/Services';
import CallToAction from '../components/JrHacksPeel2021/CallToAction';
import HowItWorks from '../components/JrHacksPeel2021/HowItWorks';
import EventDay from '../components/JrHacksPeel2021/EventDay';
// import RecentProjects from '../components/index/RecentProjects';
// import TeamMember from '../components/index/TeamMember';
// import Testimonials from '../components/index/Testimonials';
// import Partner from '../components/index/Partner';
// import OurBlog from '../components/index/OurBlog';
// import ProjectStartArea from '../components/index/ProjectStartArea';


const JrHacksPeel2021 = () => {
    return (
        <Layout>
            <NavbarTwo />
            <MainBanner />
            <Goals />
            <HowItWorks />
            {/* <AboutUs /> */}
            <CallToAction />
            <EventDay />
            {/* <RecentProjects /> */}
            {/* <TeamMember />
            <CallToAction /> */}
            {/* <Testimonials />  */}
            {/* <Partner />  */}
            {/* <OurBlog /> */}
            {/* <ProjectStartArea />  */}
            <Footer />
        </Layout>
    );
}

export default JrHacksPeel2021;