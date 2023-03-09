import React from 'react'
import Layout from "../../components/App/Layout"
import NavbarTwo from "../../components/App/NavbarTwo"
import PageBanner from '../../components/Common/PageBanner'
import Footer from "../../components/App/Footer"
import ContactInfo from '../../components/Services/Contact/ContactInfo'
import ContactForm from '../../components/Services/Contact/ContactForm'

const Contact = () => {
    return (
        <Layout>
            <NavbarTwo />
            {/* <PageBanner
                pageTitle="Contact" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Contact" 
            /> */}
            <ContactForm />
            <ContactInfo />
            <Footer />
        </Layout>
    );
}

export default Contact