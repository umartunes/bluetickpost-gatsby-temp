import React from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo"
// import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import AboutUsContent from '../components/AboutUs/AboutUsContent'
import OurHistory from '../components/AboutUs/OurHistory'
import StartProject from "../components/AboutUs/StartProject";
// import WhyChooseUs from '../components/AboutUs/WhyChooseUs'
// import HowItWork from '../components/AboutUs/HowItWork'
import TeamMembers from '../components/AboutUs/TeamMembers'
// import Testimonials from '../components/AboutUs/Testimonials'
// import Partner from '../components/AboutUs/Partner'
 
const AboutUs = () => {
    return (
        <Layout>
            <NavbarTwo />
            {/* <PageBanner
                pageTitle="About Us" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="About Us" 
            /> */}
            <StartProject />
            <AboutUsContent />
            <OurHistory />
            {/* <WhyChooseUs />
            <HowItWork /> */}
            <TeamMembers />
            {/* <Testimonials /> */}
            {/* <Partner /> */}
            <Footer />
        </Layout>
    );
}

export default AboutUs;