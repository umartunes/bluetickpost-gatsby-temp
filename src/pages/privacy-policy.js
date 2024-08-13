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

                                <p>At BlueTickPost, we value your privacy and are committed to protecting any information we collect while operating our website. This privacy policy explains how we collect, use, disclose, and protect your personal information, including when we use advertising services.</p>

                                <h5>1. Information Collection</h5>
                                <ul>
                                    <li>We collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
                                    <li>We may collect personal information such as your name, username, content, profile photo, and hashtags to provide and improve our services.</li>
                                </ul>

                                <h5>2. Purpose of Collection</h5>
                                <ul>
                                    <li>We will identify the purposes for which your information is being collected before or at the time of collection.</li>
                                    <li>Your personal information will be used solely for fulfilling these purposes and for other related purposes with your consent or as required by law.</li>
                                </ul>

                                <h5>3. Use of Information</h5>
                                <ul>
                                    <li>We use your personal information to provide, maintain, and improve our services, and to communicate with you.</li>
                                    <li>We may use personal data to customize your experience and to analyze how our services are used.</li>
                                </ul>

                                <h5>4. Third-Party Services</h5>
                                <ul>
                                    <li>We may use third-party advertising services, such as Google AdSense, to display ads on our website. These services may collect information about your visits to our website and other websites to provide targeted advertising.</li>
                                    <li>These third-party services have their own privacy policies, and we encourage you to review them.</li>
                                </ul>

                                <h5>5. Data Security</h5>
                                <ul>
                                    <li>We protect your personal information by using reasonable security measures against loss, theft, unauthorized access, disclosure, copying, use, or modification.</li>
                                </ul>

                                <h5>6. Data Retention</h5>
                                <ul>
                                    <li>We will retain your personal information only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations.</li>
                                </ul>

                                <h5>7. User Rights</h5>
                                <ul>
                                    <li>You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.</li>
                                </ul>

                                <h5>8. Policy Changes</h5>
                                <ul>
                                    <li>BlueTickPost may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on our website.</li>
                                </ul>

                                <h5>9. Contact Us</h5>
                                <ul>
                                    <li>If you have any questions or concerns about our privacy policy or the handling of your personal information, please contact us at <a href="mailto:contact@bluetickpost.com">contact@bluetickpost.com</a>.</li>
                                </ul>

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