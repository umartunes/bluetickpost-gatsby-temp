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
                        Our Strength
                    </span>
                    <h2>BlueTickPost Focus</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src={ServiceIcon1} alt="Service Icon" />
                            </div>
                            <h3>Excitement</h3>
                            <p> Our promise to make students excited about coding and not fear Programming!</p>

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
                            <p>We focus on fundementals: Algorithm, Abstraction, Decompose, Patterns, Program,.. </p>

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
                            <h3>Progress</h3>
                            <p>Gamified learning process and module-based quizzes and progress reports for students and parents.</p>

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
                            <h3>Hands-on Approach</h3>
                            <p>Students complete concept specific tasks that help retain what they have learned </p>

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
                            <p>We encourage open discussion and new ideas for students to work with each other and <b>Mentor</b>  </p>

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
                            <h3>Creative</h3>
                            <p>Our courses are designed to provide freedom for students to be creative and solve problems</p>

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