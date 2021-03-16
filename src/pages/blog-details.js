import React from 'react'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import BlogDetailsContent from '../components/BlogContent/BlogDetailsContent'

const BlogDetails = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Blog Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Details" 
            /> 
            <BlogDetailsContent />
            <Footer />
        </Layout>
    )
}

export default BlogDetails;