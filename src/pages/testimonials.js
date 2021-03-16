import React from 'react'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import TestimonialsStyleOne from '../components/Testimonials/TestimonialsStyleOne'
import TestimonialsStyleTwo from '../components/Testimonials/TestimonialsStyleTwo'

const Testimonials = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Testimonials" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Testimonials" 
            />
            <TestimonialsStyleOne />
            <TestimonialsStyleTwo />
            <Footer />
        </Layout>
    );
}

export default Testimonials