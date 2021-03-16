import React from 'react'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import BlogCard from '../components/BlogContent/BlogCard'

const Blog = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Blog" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog" 
            />
            <BlogCard />
            <Footer />
        </Layout>
    );
}

export default Blog;