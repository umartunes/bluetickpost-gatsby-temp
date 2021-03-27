import React from 'react'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import CoursesContent from '../components/Courses/CoursesContent'
 

const CoursesGrid = () => {
    return (
        <Layout seoTitle='Course page' seoDescription='' >
               
            <NavbarThree />
            <PageBanner
                pageTitle="Course Grid" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Course Grid" 
            />
            <CoursesContent />
            <Footer />
        </Layout>
    );
}

export default CoursesGrid;