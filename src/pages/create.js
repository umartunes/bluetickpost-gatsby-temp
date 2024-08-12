import React, { useEffect } from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo";
import Footer from "../components/App/Footer"
import PostForm from '../components/CreatePost/PostForm'

// import { courses } from '../data/courses'

// const availableCourses = courses.filter((course, i) => { return course.isAvailable })

const CreatePost = () => {
    // useEffect(() => {

    //     document.body.style.overflowY = 'hidden'

    //     return () => {
    //         document.body.style.overflowY = 'auto'
    //     };

    // }, []);

    return (
        <Layout>
            <NavbarTwo />

            <PostForm />

            <Footer />
        </Layout>
    );
}

export default CreatePost