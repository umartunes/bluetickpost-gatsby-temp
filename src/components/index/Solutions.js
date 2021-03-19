import React from 'react'

import StarIcon from '../../assets/images/star-icon.png'

const Solutions = () => {
    return (
        <section className="solutions-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={StarIcon} alt="StarIcon" />
                        Our Solutions
                    </span>
                    <h2>Three Reasons You Should Join STEM1 Today</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>Local but Virtual</h3>
                            <p>Are you looking for coding classes near you? We are here to help you. We are a Canadian-owned business offering virtual classes for students. Our instructors are local to the city you’re from, which means they can offer a better learning experience. </p>

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
                            <p>Group Learning enhances a child’s communication skills and time management. We teach kids in a group of 6 to ensure that they get proper attention while improving their coordination skills.</p>

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
                            <h3>Problem-solving</h3>
                            <p>Helping your child in learning coding can be the first step in that process. Through our courses, students gain analytical and creative thinking skills that make them great problem solvers. </p>

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
                            <p>There are over 700 coding languages! The most popular ones are Python, JavaScript, Elm, Scala, & Ruby. Python is the best programming language for kids because it is easy to set up, similar to writing English, and it’s considered the language of the future!</p>
                        </blockquote>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Solutions;