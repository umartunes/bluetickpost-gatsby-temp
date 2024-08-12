import React from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo";
import Footer from "../components/App/Footer"
import RegisterForm from '../components/Register/RegisterForm'
const Contact = () => {
    return (
        <Layout>
            <NavbarTwo />
            <RegisterForm />
            <Footer />
        </Layout>
    );
}

export default Contact