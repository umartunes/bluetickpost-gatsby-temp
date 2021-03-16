import React from 'react';
import NavbarTwo from "../components/App/NavbarTwo"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"


import StartProject from '../components/lms/StartProject';
import AboutUs from '../components/lms/AboutUs';
import UpcomingBootcamps from '../components/lms/UpcomingBootcamps';
import Services from '../components/lms/Services'
// import MainBanner from '../components/lms/MainBanner'
// import FeaturedServices from '../components/lms/FeaturedServices'
// import WhyChooseUs from '../components/lms/WhyChooseUs'
// import WhatWeDo from '../components/lms/WhatWeDo'
// import Funfacts from '../components/lms/Funfacts'
// import Testimonials from '../components/lms/Testimonials'
// import WeServe from '../components/lms/WeServe'
// import TeamMembers from '../components/lms/TeamMembers'
// import CaseStudy from '../components/lms/CaseStudy'
// import BlogPost from '../components/lms/BlogPost'

const Home = () => {
    return (
        <Layout>
            <NavbarTwo />
            <StartProject />
            <AboutUs />
            <UpcomingBootcamps />
            <Services />
            {/* <MainBanner /> */}
            {/* <FeaturedServices />
            <WhyChooseUs />
            <WhatWeDo />
            <Funfacts />
            <Testimonials />
            <WeServe />
            <TeamMembers />
            <CaseStudy />
            <BlogPost /> */}
            <Footer />
        </Layout>
    );
}

export default Home;