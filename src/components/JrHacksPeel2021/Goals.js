import React from 'react'

import StarIcon from '../../assets/images/star-icon.png'

const Goals = () => {
    return (
        <section className="solutions-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={StarIcon} alt="StarIcon" />
                        Our Goals
                    </span>
                    <h2>Jr.Hacks Benefits </h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>Students</h3>
                            <p>Provide great fun STEM day for students with workshops & competitions. </p>

                            {/* <Link to="/service-details-two" className="view-details-btn">
                                View Details
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div>
                            
                            <h3>Parents</h3>
                            <p>Information sessions to provide opportunities and resources available for their children </p>

                            {/* <Link to="/service-details-two" className="view-details-btn">
                                View Details
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>
                            <h3>Community</h3>
                            <p>We raise funds for a local charity that is focussed on removing barriers to education for students.  </p>

                            {/* <Link to="/service-details-two" className="view-details-btn">
                                View Details
                            </Link> */}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <blockquote>
                            <h2>Did you know?</h2>
                            <p>Hackathons are the events used by companies and college students to find innovative solutions to problems. Many awesome products are built at hackathon. You child is just starting a little early!!</p>
                        </blockquote>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Goals;