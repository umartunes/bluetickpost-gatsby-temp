import React from 'react'
import {Link} from 'gatsby'
import course1 from '../../assets/images/courses/course1.jpg'
import course2 from '../../assets/images/courses/course2.jpg'
import course3 from '../../assets/images/courses/course3.jpg'
import user1 from '../../assets/images/user1.jpg'
import user2 from '../../assets/images/user2.jpg'
import user3 from '../../assets/images/user3.jpg'
import shape from '../../assets/images/shape/vector-shape6.png'

const RelatedCourses = () => {
    return (
        <div className="courses-area bg-fafafb pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Student showcase</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link to="/course-details" className="d-block image">
                                    <img src={course1} alt="course" />
                                </Link>
                                <Link to="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </Link>
                                {/* <div className="price shadow free">Free</div> */}
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src={user1} className="rounded-circle" alt="course" />
                                    <span>Lushen Bertnad</span>
                                </div>
                                <h3>
                                    <Link to="/course-details">
                                        My First Webpage
                                    </Link>
                                </h3>
                                <p>It was a great moment when Lushen realize that she can create her own website and make her own on Internet!.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agendas'></i> Grade 3
                                    </li>
                                    <li>
                                        <i className='flaticon-team'></i> June 10, 2017
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box ">
                            <div className="courses-image">
                                <Link to="/course-details" className="d-block image">
                                    <img src={course2} alt="course" />
                                </Link>
                                <Link to="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </Link>
                                {/* <div className="price shadow">$49</div> */}
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src={user2} className="rounded-circle" alt="course" />
                                    <span>Sarah Taylor</span>
                                </div>
                                <h3>
                                    <Link to="/course-details">
                                        Introduction to Linear Models and Matrix Algebra
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agendas'></i> 7 Weeks Long
                                    </li>
                                    <li>
                                        <i className='flaticon-team'></i> Available Now
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link to="/course-details" className="d-block image">
                                    <img src={course3} alt="course" />
                                </Link>
                                <Link to="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </Link>
                                {/* <div className="price shadow">$69</div> */}
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src={user3} className="rounded-circle" alt="course" />
                                    <span>David Warner</span>
                                </div>
                                <h3>
                                    <Link to="/course-details">
                                        Data Science: Inference and Modeling
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agendas'></i> 2 Weeks Long
                                    </li>
                                    <li>
                                        <i className='flaticon-team'></i> Available Now
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape6">
                <img src={shape} alt="course" />
            </div>
        </div>
    )
}

export default RelatedCourses