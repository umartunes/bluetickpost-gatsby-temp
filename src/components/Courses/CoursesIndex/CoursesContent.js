import React from 'react'
import { Link } from 'gatsby'

import StarIcon from '../../../assets/images/star-icon.png'
import course1 from '../../../assets/images/courses/course1.jpg'
import course2 from '../../../assets/images/courses/course2.jpg'
import course3 from '../../../assets/images/courses/course3.jpg'
import shape from '../../../assets/images/shape/vector-shape6.png'

const courses = [
    {
        id: "web-and-mobile-app-development",
        name: "Web & Mobile App Development",
        coursePage: "/course-details",
        price: "$15/month",
        duration: "6 months",
        isFree: false,
        isAvailable: true,
        image: course1,
        description: `An application development program for absolute beginners, which will lead you to job/freelancing industry.`,
    },
    {
        id: "artificial-intelligence",
        name: "Artificial Intelligence",
        coursePage: "/course-details",
        price: "$15/month",
        duration: "1 year",
        isFree: false,
        isAvailable: false,
        image: course2,
        description: `A one year AI Program designed for absolute beginners. which will lead you to job/freelancing industry.`,
    },
    {
        id: "basic-computer-course",
        name: "Basic Computer Course",
        coursePage: "/course-details",
        price: "Free",
        duration: "2 weeks",
        isFree: true,
        isAvailable: true,
        image: course3,
        description: `A short course to help you understanding all the basics of computer needed to live in the 21st century.`,
    },

]

const CoursesContent = () => {
    return (
        <div className="courses-area ptb-100 bg-fafafb">
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
                                    <p>{course.description}</p>
                                    <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <i className='flaticon-agendas'></i> {course.duration}
                                        </li>
                                        <li>
                                            <i className='flaticon-price-tag'></i> {course.price}
                                        </li>
                                    </ul>
                                    <div className="mt-3 text-right">
                                        {course.isAvailable
                                            ? <Link to={course.coursePage} className="default-btn disabled">
                                                <i className="flaticon-right"></i>
                                                Apply Now <span></span>
                                            </Link>
                                            : <h4 className="mt-4">Coming Soon</h4>
                                        }
                                       
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