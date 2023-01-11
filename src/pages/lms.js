import React from "react";
// import NavbarTwo from "../components/App/NavbarTwo";
// import Footer from "../components/App/Footer";
import Layout from "../components/App/Layout";

// import StartProject from "../components/lms/StartProject";
// import AboutUs from "../components/lms/AboutUs";
// import UpcomingBootcamps from "../components/lms/UpcomingBootcamps";
// import Services from "../components/lms/Services";
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

import SEO from "../components/App/SEO";

const Home = () => {
  return (
    <Layout>
      <SEO
        seoTitle="Techna LMS - Techna"
        seoDescription="Techna LMS - A Game-Based Learning Platform (Courses, Quizzes and Surveys)"
      />

      <iframe style={{
        display: 'block',
        background: "#000",
        border: "none",
        height: "100vh",
        width: "100%",
        maxWidth: '100vw'
      }} title="" loading="lazy" src={`https://lms.techna.pk/?random=${Math.random().toString(36).slice(2)}`}></iframe>

      {/* 
      <StartProject />
      <AboutUs />
      <UpcomingBootcamps />
      <Services />

      <Footer /> */}
    </Layout>
  );
};

export default Home;
