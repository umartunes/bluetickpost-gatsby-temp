import React, { useEffect } from 'react'
import Layout from "../../components/App/Layout"
import NavbarTwo from "../../components/App/NavbarTwo";
import Footer from "../../components/App/Footer"
import JobApplicationForm from '../../components/Jobs/JobApplicationForm'

const JobApply = () => {

    // useEffect(() => {

    //     document.body.style.overflowY = 'hidden'
        
    //     return () => {
    //         document.body.style.overflowY = 'auto'
    //     };

    // }, []);

    return (
        <Layout>
            <NavbarTwo />
            <JobApplicationForm />
            <Footer />
        </Layout>
    );
}

export default JobApply