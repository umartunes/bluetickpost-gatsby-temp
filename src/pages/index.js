import React, { useEffect } from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo";
import Footer from "../components/App/Footer"
import PostForm from '../components/CreatePost/PostForm'

const CreatePost = () => {

    return (
        <Layout>
            <NavbarTwo />
            <PostForm />
            <Footer />
        </Layout>
    );
}

export default CreatePost