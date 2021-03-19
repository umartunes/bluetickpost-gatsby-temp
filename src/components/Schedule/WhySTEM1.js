import React from 'react'

import StarIcon from '../../assets/images/star-icon.png'

const WhyStem1 = () => {
    return (
        <section className="solutions-area pt-100 pb-70 bg-fafafa">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={StarIcon} alt="StarIcon" />
                        Why Us?
                    </span>
                    <h2>Why code with STEM1?</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>Virtual Courses</h3>
                            <p>Our virtual courses are designed to enhance your child’s problem-solving skills. It enables them to make decisions that are relatable to everyday life. We also schedule presentations and group projects to enhance your child’s soft skills. Let your children code with STEM and get ready to observe the astonishing results. </p>

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
                           
                            <h3>Future-ready</h3>
                            <p>Coding is involved in every walk of life. Be it medicine, engineering, architecture, or physics, if your child knows how to code, they can ace in all of them. STEM1 is here to help you with that. Our online courses will teach them the basics that will help them in moving forward. </p>

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
                            <p>Having a focused vision of the future is very important for your child. But forcing them to become experienced programmers is too early at this stage and we understand that. Therefore, STEM1 works to develop the interest of students in programming rather than making them job-ready. </p>

                            {/* <Link to="/service-details-two" className="view-details-btn">
                                View Details
                            </Link> */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default WhyStem1;