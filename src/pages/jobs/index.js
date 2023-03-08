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
                                            {/* {job.title} <span className='float-right'>{job.isAvailable ? `🟢` : `🔴`}</span> */}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className='my-3' style={{ color: '#6b6b84' }}>
                                            <h6>💼 {job.jobType} | 🌎 {job.jobLocation} | ⏳ {job.experienceLevel} | Available: {job.isAvailable ? `🟢` : `🔴`}</h6>

                                        </div>

                                        <p dangerouslySetInnerHTML={{ __html: job.description }}></p>

                                        {job.isAvailable ? ``
                                            : <div class="alert alert-info" role="alert">
                                                <strong>
                                                    We currently don't have any seats vacant for this job post. But you can still apply for this job. We will reach out to you when a seat is vacant, and if we think you're a good fit!
                                                </strong>
                                            </div>
                                        }

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