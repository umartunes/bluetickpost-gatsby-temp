import React from 'react'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"

import Footer from "../components/App/Footer"
import PageBanner from '../components/ProgramsJunior/PageBanner'
import OurServices from '../components/ProgramsJunior/OurServices'
import CourseDetailsContent from '../components/ProgramsJunior/CourseDetailsContent'
import RelatedCourses from '../components/ProgramsJunior/RelatedCourses'

const Details = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Junior (Grade 3+)" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Course Details" 
            />
            <CourseDetailsContent />
            <RelatedCourses />
            <OurServices />
            <Footer />
        </Layout>
    );
}

export default Details