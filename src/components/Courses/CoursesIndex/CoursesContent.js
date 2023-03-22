import React from 'react'
import { Link } from 'gatsby'

import StarIcon from '../../../assets/images/star-icon.png'
import shape from '../../../assets/images/shape/vector-shape6.png'

import { courses } from '../../../data/courses'

const CoursesContent = () => {
    return (
        <div className="courses-area ptb-100">
            <div className="container">
                <div className="section-title" style={{ maxWidth: 800 }}>
                    <span className="sub-title">
                        <img src={StarIcon} alt="StarIcon" />
                        Our Courses
                    </span>
                    <h2>Techna Learning Process! </h2>
                    <p style={{ maxWidth: 800 }}>All our programs are designed to encourage creativity, group learning, problem solving & mentoring. Learn to code by completing challenges, building games, apps, and more. Continuously develop interpersonal and presentation skills in each of our courses.</p>
                </div>
                <div className="row">

                    {courses.map((course, i) => {

                        return <div className="col-lg-4 col-md-6">

                            <div className="single-courses-box">

                                <div className="courses-image">

                                    <Link to={course.coursePage} className="d-block image">
                                        <img src={course.image} alt="about" />
                                    </Link>
                                    <Link to="#" className="fav">
                                        <i className="flaticon-heart"></i>
                                    </Link>
                                    {course.isFree ? <div className="price shadow free">Free</div> : <></>}
                                </div>

                                <div className="courses-content">
                                    <h5>
                                        <Link to={course.coursePage}>
                                            {course.name}
                                        </Link>
                                    </h5>
                                    <p>{course.descriptionSummary}</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <i className='flaticon-agendas'></i> {course.courseDuration}
                                        </li>
                                        <li>
                                            <i className='flaticon-price-tag'></i> {course.price}
                                        </li>
                                    </ul>
                                    <div className="mt-3 text-right">
                                        <Link to={course.coursePage} className="default-btn disabled">
                                            <i className="flaticon-right"></i>
                                            Learn more <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    })}

                </div>

            </div>

            <div className="vector-shape6">
                <img src={shape} alt="about" />
            </div>
        </div>
    )
}

export default CoursesContent