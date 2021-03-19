import React from 'react';

import StarIcon from '../../assets/images/star-icon.png'
import ServiceIcon1 from '../../assets/images/services/service-icon1.png'
import ServiceIcon2 from '../../assets/images/services/service-icon2.png'
import ServiceIcon3 from '../../assets/images/services/service-icon3.png'
import ServiceIcon4 from '../../assets/images/services/service-icon4.png'
import ServiceIcon5 from '../../assets/images/services/service-icon5.png'
import ServiceIcon6 from '../../assets/images/services/service-icon6.png'

const Services = () => {
    return (
        <section className="services-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={StarIcon} alt="image_alt" />
                        Our Services
                    </span>
                    <h2>Six Features of STEM1</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={ServiceIcon1} alt="Service Icon" />
                            </div>
                            <h3>Future-ready</h3>
                            <p>The importance of coding is undeniable. From medicine to architecture, it is involved in every field of life. Help your child to ace all of them by providing them learning opportunities through STEM1.</p>

                            {/* <Link to="/service-details" className="read-more-btn">
                                Read More <i className="flaticon-right"></i>
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={ServiceIcon2} alt="Service Icon" />
                            </div>
                            <h3>Computational thinking</h3>
                            <p>The basic features of coding such as computational thinking helps students to tackle issues using patterns, automation, and logic.</p>

                            {/* <Link to="/service-details" className="read-more-btn">
                                Read More <i className="flaticon-right"></i>
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={ServiceIcon3} alt="Service Icon" />
                            </div>
                            <h3>Clear Progression</h3>
                            <p>Students must be taught what they can understand. Therefore, at STEM1, we offer three different courses i-e Junior, Senior, and Leader. It ensures that students learn in a stepwise manner and do not get overwhelmed due to complexity.</p>

                            {/* <Link to="/service-details" className="read-more-btn">
                                Read More <i className="flaticon-right"></i>
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={ServiceIcon4} alt="Service Icon" />
                            </div>
                            <h3>Hands-on Learning</h3>
                            <p>Keeping a child motivated for studies can be a difficult job to do. But we are here to help you with that. Our courses are designed to keep learners motivated through hands-on learning. We follow a 1:3 ratio i.e, we have one instructor for 3 students. </p>

                            {/* <Link to="/service-details" className="read-more-btn">
                                Read More <i className="flaticon-right"></i>
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={ServiceIcon5} alt="Service Icon" />
                            </div>
                            <h3>Leadership</h3>
                            <p>We enhance our student’s leadership skills by providing them mentorship opportunities. Our STEM1 graduates are given a chance to become an instructor for STEM1. It helps them in retaining what they have learned. Moreover, it also incorporates leadership skills in them. </p>

                            {/* <Link to="/service-details" className="read-more-btn">
                                Read More <i className="flaticon-right"></i>
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={ServiceIcon6} alt="Service Icon" />
                            </div>
                            <h3>Foreseeing</h3>
                            <p>The importance of coding is undeniable. From medicine to architecture, it is involved in every field of life. Help your child to ace all of them by providing them learning opportunities through STEM1.</p>

                            {/* <Link to="/service-details" className="read-more-btn">
                                Read More <i className="flaticon-right"></i>
                            </Link> */}
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col">
                        <div className="text-center">

                            <h2 className="mb-5">Enjoy A Demo Class On Us.</h2>
                            <Link to="/schedule" className="default-btn" style={{ paddingLeft: 25 }}>
                                Sign-up Today! <span></span>
                            </Link>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Services;