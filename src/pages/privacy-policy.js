import React from 'react'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import { Link } from 'gatsby'
import privacyPolicy from '../assets/images/privacy-policy.jpg'

const PrivacyPolicy = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Privacy Policy"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Privacy Policy"
            />
            <section className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="privacy-policy-content">


                                <p>It is Techna policy to respect your privacy regarding any information we may collect while operating our website. Accordingly, we have developed this privacy policy in order for you to understand how we collect, use, communicate, disclose and otherwise make use of personal information. We have outlined our privacy policy below.</p>
                                <ul class="">
                                    <li>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
                                    <li>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</li>
                                    <li>We will collect and use personal information solely for fulfilling those purposes specified by us and for other ancillary purposes, unless we obtain the consent of the individual concerned or as required by law.</li>
                                    <li>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</li>
                                    <li>We will protect personal information by using reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</li>
                                    <li>We will make readily available to customers information about our policies and practices relating to the management of personal information.</li>
                                    <li>We will only retain personal information for as long as necessary for the fulfilment of those purposes.</li>
                                </ul>
                                <p>We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. Techna may change this privacy policy from time to time at Techna’s sole discretion.</p>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <aside className="widget-area">
                                <div className="widget widget_insight">
                                    <ul>
                                        <li>
                                            <Link to="/about-us">
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">
                                                Contact Us
                                            </Link>
                                        </li>

                                        <li className="active">
                                            <Link to="#">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/terms-of-service">
                                                Terms &amp; Conditions
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* <div className="widget widget_recent_courses">
                                    <h3 className="widget-title">Recent Courses</h3>

                                    <article className="item">
                                        <Link to="#" className="thumb">
                                            <span className="fullimage cover bg1" role="img"></span>
                                        </Link>
                                        <div className="info">
                                            <span>$49.00</span>
                                            <h4 className="title usmall"><Link to="#">The Data Science Course 2020: Complete Data Science Bootcamp</Link></h4>
                                        </div>
                                        <div className="clear"></div>
                                    </article>

                                    <article className="item">
                                        <Link to="#" className="thumb">
                                            <span className="fullimage cover bg2" role="img"></span>
                                        </Link>
                                        <div className="info">
                                            <span>$59.00</span>
                                            <h4 className="title usmall"><Link to="#">Java Programming MasterclassName for Software Developers</Link></h4>
                                        </div>
                                        <div className="clear"></div>
                                    </article>

                                    <article className="item">
                                        <Link to="#" className="thumb">
                                            <span className="fullimage cover bg3" role="img"></span>
                                        </Link>
                                        <div className="info">
                                            <span>$69.00</span>
                                            <h4 className="title usmall"><Link to="#">Deep Learning A-Z™: Hands-On Artificial Neural Networks</Link></h4>
                                        </div>
                                        <div className="clear"></div>
                                    </article>
                                </div> */}

                                {/* <div className="widget widget_tag_cloud">
                                    <h3 className="widget-title">Popular Tags</h3>

                                    <div className="tagcloud">
                                        <Link to="#">Business <span className="tag-link-count"> (3)</span></Link>
                                        <Link to="#">Design <span className="tag-link-count"> (3)</span></Link>
                                        <Link to="#">Braike <span className="tag-link-count"> (2)</span></Link>
                                        <Link to="#">Fashion <span className="tag-link-count"> (2)</span></Link>
                                        <Link to="#">Travel <span className="tag-link-count"> (1)</span></Link>
                                        <Link to="#">Smart <span className="tag-link-count"> (1)</span></Link>
                                        <Link to="#">Marketing <span className="tag-link-count"> (1)</span></Link>
                                        <Link to="#">Tips <span className="tag-link-count"> (2)</span></Link>
                                    </div>
                                </div> */}
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Layout>
    )
}

export default PrivacyPolicy;