import React from 'react'

import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import StartProject from '../components/Common/StartProject'

import { InlineWidget } from "react-calendly";

const FAQ = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Book a Demo"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Book a Demo"
            />
            <div className="">
                <div className="container">
                    <div className="calendly">
                        <InlineWidget url="https://calendly.com/stem1/coding-demo" styles={{
                            height: '900px'
                        }} />
                    </div>
                </div>
            </div>
            <StartProject />
            <Footer />
        </Layout>
    );
}

export default FAQ