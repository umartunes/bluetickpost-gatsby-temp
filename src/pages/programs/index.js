import React from "react";
import NavbarTwo from "../../components/App/NavbarTwo";
import Footer from "../../components/App/Footer";
import Layout from "../../components/App/Layout";

import StartProject from "../../components/Programs/ProgramsIndex/StartProject";
import AboutUs from "../../components/Programs/ProgramsIndex/AboutUs";
import UpcomingBootcamps from "../../components/Programs/ProgramsIndex/UpcomingBootcamps";
import Services from "../../components/Programs/ProgramsIndex/Services";
import Pricing from "../../components/Programs/ProgramLayout/Pricing";

const Home = () => {
  return (
    <Layout
      seoTitle="Our Learng to Code Programs for Grade 2 - 8 students"
      seoDescription="We live in a digital world and its increasingly important to get comfortable with the skills needed to succeed."
    >
      <NavbarTwo />
      <StartProject />

      <Services />
      {/* <AboutUs /> */}
      <Pricing />
      <UpcomingBootcamps />

      <Footer />
    </Layout>
  );
};

export default Home;
