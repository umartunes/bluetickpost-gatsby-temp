import React from 'react'

import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import Footer from "../components/App/Footer"
import StartProject from '../components/Common/StartProject'
import PageBanner from '../components/Schedule/PageBanner'
import WhyStem1 from '../components/Schedule/WhyStem1'
import VirtualClass from '../components/Schedule/VirtualClass'

// import { InlineWidget } from "react-calendly";

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
                        {/* <InlineWidget url="https://calendly.com/stem1/coding-demo" styles={{
                            height: '650px'
                        }} /> */}
                        {/* <iframe width='100%' height='750px' src='https://admin-stem2.zohobookings.com/portal-embed#/customer/4165035000000025143' frameborder='0' allowfullscreen='' > </iframe> */}
                        <iframe width='100%' height='950px' src='https://admin-stem2.zohobookings.com/portal-embed#/customer/4165035000000025143' frameborder='0' allowfullscreen='' > </iframe>
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