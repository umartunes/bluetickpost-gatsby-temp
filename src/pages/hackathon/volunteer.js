import React from 'react'
import Layout from "../../components/App/Layout"
import NavbarThree from "../../components/App/NavbarThree"
import PageBanner from '../../components/Common/PageBanner'
import Footer from "../../components/App/Footer"
import CaseStudiesDetailsContent from '../../components/Hackathon/Volunteer/CaseStudiesDetailsContent'
import RelatedProjects from '../../components/Hackathon/Volunteer/RelatedProjects'

const Volunteer = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Volunteer" 
                homePageText="Hackathon" 
                homePageUrl="/hackathon" 
                activePageText="Volunteer" 
            />
            <CaseStudiesDetailsContent />
            <RelatedProjects />
            <Footer />
        </Layout>
    );
}

export default Volunteer