import React from 'react';
import NavbarTwo from "../components/App/NavbarTwo"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"

import MainBanner from '../components/index/MainBanner';
import Solutions from '../components/index/Solutions';
// import AboutUs from '../components/index/AboutUs';
import Services from '../components/index/Services';
import CoursesContent from '../components/index/CoursesContent'
import CallToAction from '../components/index/CallToAction';
// import HowItWork from '../components/index/HowItWork';
// import RecentProjects from '../components/index/RecentProjects';
// import TeamMember from '../components/index/TeamMember';
// import Testimonials from '../components/index/Testimonials';
// import Partner from '../components/index/Partner';
// import OurBlog from '../components/index/OurBlog';
// import ProjectStartArea from '../components/index/ProjectStartArea';

// import Youtube from '../components/index/Youtube'

const Home = () => {
    return (
        <Layout>
            <NavbarTwo />
            

            <MainBanner />
            {/* <Youtube /> */}

            {/* <HowItWork /> */}
            <CoursesContent />
            <Solutions />
            {/* <AboutUs /> */}
            <CallToAction />
            <Services />
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

export default Home;