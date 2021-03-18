import React from 'react'
import Layout from "../App/Layout"
import NavbarThree from "../App/NavbarThree"
import PageBanner from '../Common/PageBanner'
import Footer from "../App/Footer"
import BlogLayoutContent from './BlogLayoutContent'

import SEO from '../App/SEO'

const BlogLayout = (props) => {
    console.log(props)
    return (
        <Layout>

            <SEO
                seoTitle={props.pageContext?.frontmatter?.title + " - STEM one"}
                seoDescription={props.pageContext?.frontmatter?.description}
                seoCanonical={'/blogs' + props.pageContext?.frontmatter?.path}
                seoImage={props.pageContext?.frontmatter?.seoImage}
            />

            <NavbarThree />
            <PageBanner
                pageTitle={props.pageContext?.frontmatter?.title}
                homePageText="Home"
                homePageUrl="/"
                activePageText="Blog"
            />
            <BlogLayoutContent {...props} />
            <Footer />
        </Layout>
    )
}

export default BlogLayout;