import React from "react";
import NavbarTwo from "../../components/App/NavbarTwo";
// import NavbarThree from "../../components/App/NavbarThree"
import Footer from "../../components/App/Footer";
import Layout from "../../components/App/Layout";
import PageBanner from '../../components/Common/PageBanner'
import CoursesContent from '../../components/Courses/CoursesIndex/CoursesContent'
// import StartProject from "../../components/Courses/CoursesIndex/StartProject";
// import Services from "../../components/Courses/CoursesIndex/Services";
// import AboutUs from "../../components/Courses/CoursesIndex/AboutUs";
// import Pricing from "../../components/Courses/CourseLayout/Pricing";
// import UpcomingBootcamps from "../../components/Courses/CoursesIndex/UpcomingBootcamps";

const Home = () => {
  return (
    <Layout
      seoTitle="Our Learn to Code Programs for students"
      seoDescription="We live in a digital world and its increasingly important to get comfortable with the skills needed to succeed."
    >
      <NavbarTwo />
      {/* <PageBanner
        pageTitle="Courses"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Courses"
      /> */}
      <CoursesContent />
      {/* <StartProject /> */}
      {/* <Services /> */}
      {/* <AboutUs /> */}
      {/* <Pricing /> */}
      {/* <UpcomingBootcamps /> */}

      <Footer />
    </Layout>
  );
};

export default Home;
