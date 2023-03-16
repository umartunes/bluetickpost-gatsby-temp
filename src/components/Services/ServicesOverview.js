import React from 'react'
import { Link } from 'gatsby'

import starIcon from '../../assets/images/star-icon.png'
import serviceIcon1 from '../../assets/images/services/service-icon1.png'
// import serviceIcon2 from '../../assets/images/services/service-icon2.png'
// import serviceIcon3 from '../../assets/images/services/service-icon3.png'
import serviceIcon4 from '../../assets/images/services/service-icon4.png'
import serviceIcon6 from '../../assets/images/services/service-icon6.png'

import { Link as ScrollLink } from 'react-scroll'

const ServicesOverview = () => {
    return (
        <section className="solutions-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">

                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="features" />
                        Our Services
                    </span>
                    <h2>Amazing Business Solution Whatever Your Needs</h2>
                    <p>The amazing team of developers &amp; designers behind Techna are ready to help and provide you top-level services for your business needs.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box" style={{ position: 'relative' }}>
                            <div className="icon">
                                <img src={serviceIcon1} alt="features" />
                            </div>
                            <h3>
                                <Link to="/services">
                                    <ScrollLink className="stretched-link" activeClass="active" to="website-development" spy={false} smooth={true} offset={-175} duration={750}>
                                        Website Development
                                    </ScrollLink>
                                </Link>
                            </h3>
                            <p>We design and develop amazing, lightning fast, and high-converting websites that make your business grow.</p>

                            <Link className="view-details-btn" to="/services">
                                View Details
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box" style={{ position: 'relative' }}>
                            <div className="icon">
                                <img src={serviceIcon6} alt="features" />
                            </div>
                            <h3>
                                <Link to="/services">
                                    <ScrollLink className="stretched-link" activeClass="active" to="web-app-development" spy={false} smooth={true} offset={-175} duration={750}>
                                        Custom App Development
                                    </ScrollLink>
                                </Link>
                            </h3>
                            <p>We develop customized, scalable and responsive web applications tailored for your business needs.</p>

                            <Link className="view-details-btn" to="/services">
                                View Details
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-solutions-box" style={{ position: 'relative' }}>
                            <div className="icon">
                                <img src={serviceIcon4} alt="features" />
                            </div>
                            <h3>
                                <Link to="/services">
                                    <ScrollLink className="stretched-link" activeClass="active" to="mobile-app-development" spy={false} smooth={true} offset={-175} duration={750}>
                                        Mobile App Development
                                    </ScrollLink>
                                </Link>
                            </h3>

                            <p>We build smart hybrid mobile apps for both android & iOS with high performance and reusability</p>

                            {/* <span class="badge badge-success d-inline-block mb-2">Coming soon...</span> <br /> */}

                            <Link className="view-details-btn" to="/services">
                                View Details
                            </Link>
                        </div>
                    </div>
                    
                    {/* <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box" style={{ position: 'relative' }}>
                            <div className="icon">
                                <img src={serviceIcon2} alt="features" />
                            </div>
                            <h3>
                                <Link to="/services">
                                    <ScrollLink className="stretched-link" activeClass="active" to="graphics-designing" spy={false} smooth={true} offset={-175} duration={750}>
                                        Graphics Designing
                                    </ScrollLink>
                                </Link>
                            </h3>
                            <p>We design creative, stunning and eye-catching graphics that makes your business more professional.</p>

                            <Link className="view-details-btn" to="/services">
                                View Details
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-solutions-box" style={{ position: 'relative' }}>
                            <div className="icon">
                                <img src={serviceIcon3} alt="features" />
                            </div>
                            <h3>
                                <Link to="/services">
                                    <ScrollLink className="stretched-link" activeClass="active" to="digital-marketing" spy={false} smooth={true} offset={-175} duration={750}>
                                        Digital Marketing
                                    </ScrollLink>
                                </Link>
                            </h3>

                            <p>We help your product reach the most accurate lead and the target audience in attempt for it to be traded on the spot.</p>

                             <span class="badge badge-success d-inline-block mb-2">Coming soon...</span> <br /> 

                            <Link className="view-details-btn" to="/services">
                                View Details
                            </Link>
                        </div>
                    </div> */}

                </div>

            </div>
        </section>
    )
}

export default ServicesOverview