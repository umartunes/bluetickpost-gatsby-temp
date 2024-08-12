import React, { useEffect } from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo";
import Footer from "../components/App/Footer"
import AdmissionsClosed from '../components/Register/AdmissionsClosed'
import RegisterForm from '../components/Register/RegisterForm'

import { courses } from '../data/courses'

const availableCourses = courses.filter((course, i) => { return course.isAvailable })

const Contact = () => {

    // useEffect(() => {

    //     document.body.style.overflowY = 'hidden'

    //     return () => {
    //         document.body.style.overflowY = 'auto'
    //     };

    // }, []);

    return (
        <Layout>
            <NavbarTwo />

            {availableCourses.length ? <RegisterForm /> : <AdmissionsClosed />}

            {/* URL for quick website update */}
            {/* <iframe style={{
                display: 'block',
                background: "#000",
                border: "none",         
                height: "calc( 100vh - 110px )",  
                width: "100%",
                maxWidth: '100vw'
            }} title="" loading="lazy" src={`https://techna.web.app/apply?random=${Math.random().toString(36).slice(2)}`}></iframe> */}

            <Footer />
        </Layout>
    );
}

export default Contact