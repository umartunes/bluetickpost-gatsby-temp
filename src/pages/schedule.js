import React from 'react'

import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import Footer from "../components/App/Footer"
import StartProject from '../components/Common/StartProject'
import PageBanner from '../components/Schedule/PageBanner'
import WhyStem1 from '../components/Schedule/WhyStem1'
import VirtualClass from '../components/Schedule/VirtualClass'

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
                            height: '650px'
                        }} />
                    </div>
                </div>
            </div>
            <WhyStem1 />
            <VirtualClass />
            <StartProject />
            <Footer />
        </Layout>
    );
}

export default FAQ