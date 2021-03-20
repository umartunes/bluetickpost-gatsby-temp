import React from 'react'

import StarIcon from '../../assets/images/star-icon.png'

const Solutions = () => {
    return (
        <section className="solutions-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={StarIcon} alt="StarIcon" />
                        Our core values!
                    </span>
                    <h2>Learn: Play: Excel </h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>Local but Virtual</h3>
                            <p>Convinience of Virtual class but with instructors are local, which means they can offer a better learning experience for the students. </p>

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
                            
                            <h3>Group Learning</h3>
                            <p>Group Learning provides a better learning experience and Leadership opportunities for students. We believe there is always something to learn from each other.</p>

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
                            <h3>Leadership</h3>
                            <p> Our students are our future Instructors!. We provide plenty of opportunities for students to lead and present their ideas and projects. </p>

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
                            <p>There are over 700 coding languages!. In 10 years, there will have way more, it is important to learn how to be comfortable with logic and problem solving than trying to master few programming languages!</p>
                        </blockquote>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Solutions;