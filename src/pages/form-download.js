import React, { useEffect } from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo";
import Footer from "../components/App/Footer"
import FormDownload from '../components/Register/FormDownload'

import starIcon from '../assets/images/star-icon.png'

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
            <FormDownload />
            <Footer />
        </Layout>
    );
}

export default Contact