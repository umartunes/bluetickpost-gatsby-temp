import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion'
import Layout from "../../components/App/Layout"
import NavbarThree from "../../components/App/NavbarThree"
import PageBanner from '../../components/Common/PageBanner'
import Footer from "../../components/App/Footer"
import StartProject from '../../components/Common/StartProject'

import { Link } from 'gatsby'

import { jobs } from '../../data/jobs'

const Jobs = () => {

    return (
        <Layout >

            <NavbarThree />
            <PageBanner
                pageTitle="We're Hiring"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Jobs"
            />
            <div className="ptb-100">
                <div className="container">
                    <div className="faq-accordion">
                        <Accordion>
                            {jobs.map((job, i) => {
                                return <AccordionItem key={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            {job.title}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
                                        <Link to="/jobs/apply" className="default-btn">
                                            <i className="flaticon-right"></i>
                                            Apply Now!
                                            <span></span>
                                        </Link>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            })}
                        </Accordion>
                    </div>
                </div>
            </div>
            <StartProject />
            <Footer />
        </Layout>
    );
}

export default Jobs