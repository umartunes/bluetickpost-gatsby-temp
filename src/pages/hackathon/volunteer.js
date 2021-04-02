import React from 'react'
import Layout from "../../components/App/Layout"
import NavbarTwo from "../../components/App/NavbarTwo"
// import PageBanner from '../../components/Common/PageBanner'
import StartProject from "../../components/Hackathon/HackathonIndex/StartProject";
import Footer from "../../components/App/Footer"
import CaseStudiesDetailsContent from '../../components/Hackathon/Volunteer/CaseStudiesDetailsContent'
import RelatedProjects from '../../components/Hackathon/Volunteer/RelatedProjects'

const Volunteer = () => {
    return (
        <Layout>
            <NavbarTwo />
            {/* <PageBanner
                pageTitle="Volunteer" 
                homePageText="Hackathon" 
                homePageUrl="/hackathon" 
                activePageText="Volunteer" 
            /> */}
            <StartProject />
            <CaseStudiesDetailsContent />
            <RelatedProjects />
            <Footer />
        </Layout>
    );
}

export default Volunteer