import React from 'react'
import Layout from "../components/App/Layout"
import NavbarThree from "../components/App/NavbarThree"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import { Link } from 'gatsby'
import termsImg from '../assets//images/terms-of-service.jpg'

const TermsOfService = () => {
    return (
        <Layout>
            <NavbarThree />
            <PageBanner
                pageTitle="Terms &amp; Conditions"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Terms &amp; Conditions"
            />
            <section className="terms-of-service-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="terms-of-service-content">

                                <p>Welcome to BlueTickPost! These Terms and Conditions (the "Terms") govern your use of our website located at <a href="https://bluetickpost.com">https://bluetickpost.com</a> (the "Site") and the services we provide. By accessing or using the Site, you agree to comply with these Terms. If you do not agree with any part of these Terms, please discontinue your use of our Site and services.</p>

                                <h5>1. Acceptance of Terms</h5>
                                <p>By using our Site, you agree to be bound by these Terms and our Privacy Policy. We may modify these Terms from time to time, and your continued use of the Site constitutes acceptance of any changes.</p>

                                <h5>2. Use of Services</h5>
                                <ul>
                                    <li>You agree to use our services for lawful purposes only and in a manner that does not infringe upon the rights of others or restrict their use and enjoyment of the services.</li>
                                    <li>Posts generated through our services must not be used for illegal purposes, including defamation, harassment, or infringement of intellectual property rights.</li>
                                    <li>We reserve the right to terminate or suspend access to our services for any user who violates these Terms or engages in unlawful activities.</li>
                                </ul>

                                <h5>3. User Responsibilities</h5>
                                <ul>
                                    <li>You are responsible for the content you create and share. Ensure that all content is original and does not violate any laws or third-party rights.</li>
                                    <li>Do not use our services to distribute content that is harmful, offensive, or otherwise objectionable.</li>
                                </ul>

                                <h5>4. Intellectual Property Rights</h5>
                                <ul>
                                    <li>You retain ownership of the content you create. By using our services, you grant us a non-exclusive, royalty-free, worldwide license to use, display, and distribute your content for the purpose of operating and improving our services.</li>
                                    <li>All intellectual property rights related to our services are owned by BlueTickPost or our licensors. Your use of our services does not grant you any rights to these intellectual properties.</li>
                                </ul>

                                <h5>5. Account Responsibility</h5>
                                <ul>
                                    <li>You are responsible for maintaining the confidentiality of your account and password and for all activities under your account.</li>
                                    <li>You may not transfer your account to another person or entity. We are not responsible for any unauthorized access to your account due to theft or misappropriation.</li>
                                </ul>

                                <h5>6. Electronic Communications</h5>
                                <p>By visiting our Site or sending us emails, you consent to receive electronic communications from us. All agreements, notices, disclosures, and other communications provided to you electronically will satisfy any legal requirement that such communications be in writing.</p>

                                <h5>7. Third-Party Links and Services</h5>
                                <ul>
                                    <li>Our Site may contain links to third-party websites. We are not responsible for the content or practices of these sites, and their inclusion does not imply endorsement.</li>
                                    <li>We may use third-party services to provide certain functionalities. By using these services, you consent to our sharing of information with these third parties as necessary to provide the requested services.</li>
                                </ul>

                                <h5>8. Advertising and Payment</h5>
                                <ul>
                                    <li>We may use third-party advertising services, such as Google AdSense, which may collect information about your visits to our Site and other websites for targeted advertising purposes.</li>
                                    <li>We may introduce subscription plans or other paid services in the future. Payment processing will be handled by third-party processors, and we do not store or have access to your payment information.</li>
                                </ul>

                                <h5>9. Use of Communication Services</h5>
                                <ul>
                                    <li>Our Site may offer communication services like forums and chat areas. You agree to use these services only for appropriate purposes and to adhere to all guidelines and laws.</li>
                                    <li>Do not post content that is defamatory, abusive, or infringes on the rights of others. We reserve the right to remove content and terminate access to our communication services at our discretion.</li>
                                </ul>

                                <h5>10. Data Security and Retention</h5>
                                <ul>
                                    <li>We use reasonable security measures to protect your personal information. However, we cannot guarantee absolute security.</li>
                                    <li>We will retain your personal information only as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations.</li>
                                </ul>

                                <h5>11. User Rights</h5>
                                <ul>
                                    <li>You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.</li>
                                </ul>

                                <h5>12. Policy Changes</h5>
                                <p>We may update these Terms from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our Site constitutes acceptance of the updated terms.</p>

                                <h5>13. Termination</h5>
                                <p>We reserve the right to terminate or suspend your access to our services at our discretion, without notice, for any reason, including violations of these Terms.</p>

                                <h5>14. Governing Law</h5>
                                <p>These Terms are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising from these Terms will be handled in the appropriate courts of [Your Country/State].</p>

                                <h5>15. Contact Us</h5>
                                <p>If you have any questions or concerns about these Terms, please contact us at <a href="mailto:contact@bluetickpost.com">contact@bluetickpost.com</a>.</p>

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
                                        <li>
                                            <Link to="/privacy-policy">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link to="#">
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

export default TermsOfService;