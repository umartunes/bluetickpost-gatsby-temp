import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../../components/App/Layout"
// import NavbarTwo from "../../components/App/NavbarTwo"
import NavbarThree from "../../components/App/NavbarThree"
import PageBanner from '../../components/Common/PageBanner'
import Footer from "../../components/App/Footer"
import BlogCard from '../../components/BlogContent/BlogCard'
// import StartProject from "../../components/BlogContent/StartProject";

const Blog = (props) => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Blog"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Blog"
            />
            {/* <StartProject /> */}
            <BlogCard {...props} />
            <Footer />
        </Layout>
    );
}

export default Blog;

export const pageQuery = graphql`
    query MyQuery {
        site {
            siteMetadata {
                siteTitle
            }
        }
        allMdx {
            edges {
                node {
                    id
                    frontmatter {
                        category
                        featuredImage
                        id
                        path
                        seoImage
                        tags
                        description
                        date
                        title
                        author
                        authorImage
                    }
                }
            }
        }
    }
`