import React from "react"
import NavbarThree from "../components/App/NavbarThree"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"
import Banner from "../components/home-copy/Banner"
import OurSolutions from "../components/home-copy/OurSolutions"
import OurServices from "../components/home-copy/OurServices"
import OurFeatures from "../components/home-copy/OurFeatures"
import TeamMember from "../components/home-copy/TeamMember"
import RecentProjects from "../components/home-copy/RecentProjects"
import Pricing from "../components/home-copy/Pricing"
import Testimonials from "../components/home-copy/Testimonials"
import Partner from "../components/home-copy/Partner"
import ProjectStartArea from "../components/home-copy/ProjectStartArea"
import OurBlog from "../components/home-copy/OurBlog"

const Home = () => {
  return (
    <Layout>
      <NavbarThree />
      <Banner />
      <OurSolutions />
      <OurServices />
      <OurFeatures />
      <TeamMember />
      <RecentProjects />
      <Pricing />
      <Testimonials />
      <Partner />
      <OurBlog />
      <ProjectStartArea />
      <Footer />
    </Layout>
  )
}

export default Home