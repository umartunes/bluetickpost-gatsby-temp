import React from 'react'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import CourseDetailsContent from '../components/CoursesDetails/CourseDetailsContent'
import RelatedCourses from '../components/CoursesDetails/RelatedCourses'

const Details = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Course Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Course Details" 
            />
            <CourseDetailsContent />
            <RelatedCourses />
            <Footer />
        </Layout>
    );
}

export default Details