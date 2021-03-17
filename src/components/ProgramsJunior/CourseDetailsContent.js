import React, { Component } from 'react'
import { Link } from 'gatsby'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion'

import CoursesDetailsSidebar from './CoursesDetailsSidebar'
import details from '../../assets/images/courses/courses-details.jpg'

import user1 from '../../assets/images/user1.jpg'
import user2 from '../../assets/images/user2.jpg'
import user3 from '../../assets/images/user3.jpg'

const curriculum = [
    {
        heading: `Introduction to Coding 101`,
        description: `Learn the basics of coding. The use of different languages and basic command styles that are common in the world of programming languages are included in this course.`
    },
    {
        heading: `Animation  101`,
        description: `Animations are a great way to learn difficult concepts. Learn programming to create interactive drawings and animations.`
    },
    {
        heading: `Scratch  101`,
        description: `Let your children learn scratch, a programming language, to create their own stories, animations, and games.`
    },
    {
        heading: `HTML 101`,
        description: `Learn the fundamentals of HTML and design headings, paragraphs, and links. Let your child dive into the world of website and application development.`
    },
    {
        heading: `Cyber Safety 101`,
        description: `Children are exposed to a lot of risks while using the internet. Teach your kids the basics of Cyber Safety to ensure safe browsing.`
    },
    {
        heading: `Game Design 101`,
        description: `Do you love playing games? They are certainly a great way to boost your skills. Learn to design your games through our Game Design 101 course.`
    },
    {
        heading: `VR Vex 101`,
        description: `Love robots and are interested in how they work? Through our VR Vex, learn how to code a virtual robot based on block-based coding.`
    },
    {
        heading: `TinkerCad 101`,
        description: `Want to design 3D models of your imaginations? Lucky for you, we have got the right thing for you. Use TinkerCAD course to do just that!`
    },
    {
        heading: `Python 101`,
        description: `Learn the basics of python language and create software for your everyday small tasks such as calculating percentages and average.`
    },
    {
        heading: `Hacking 101`,
        description: `Hacking is not always bad as it is generally considered. Teach your child the basics of ethical hacking to protect them from online dangers.`
    },
]

class CourseDetailsContent extends Component {

    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="courses-details-area pb-100">
                <div className="courses-details-image">
                    <img src={details} alt="course" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="courses-details-desc">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li
                                        className="current"
                                        onClick={(e) => this.openTabSection(e, 'tab1')}
                                    >
                                        Overview
                                    </li>
                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab2')}
                                    >
                                        Curriculum
                                    </li>
                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab4')}
                                    >
                                        Reviews
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div id="tab1" className="tab-pane tabs_item">
                                        <div className="courses-overview">
                                            <h3>Course Description</h3>
                                            <p>With the 4th industrial revolution, children are now exposed to technology more than ever. From asking Alexa to play their favorite poem and automatically customizing their coffee drinks, they all grow up. Therefore, it is the responsibility of the parents to familiarize them with the technological advancements.</p>

                                            <h3>Certification</h3>
                                            <p>We gamify the learning through badges to recognize the growth of our students. They will be awarded a certificate of completion after they finish every course. Students will have to submit a presentation or project, required to graduate the program. </p>

                                            <h3>Who this course is for?</h3>
                                            <p>Our Junior program is designed for 3 to 5 graders to teach them the basics of coding. This program offers 10 courses and weekly classes are conducted for each course. At the end of each course, we conduct exams to assess the level of learning. </p>
                                        </div>
                                    </div>

                                    <div id="tab2" className="tab-pane tabs_item">
                                        <div className="courses-curriculum">

                                            <h3>Curriculum</h3>

                                            <ul>
                                                {curriculum.map((cur, i) => {
                                                    return <li key={i}>
                                                        <a
                                                            to="#"
                                                            className="d-flex justify-content-between align-items-center"
                                                        >
                                                            <span className="courses-name">
                                                                <span>{cur.heading}</span>
                                                                <br/><br/>
                                                                <span className="text-muted">{cur.description}</span>
                                                            </span>

                                                            {/* <div className="courses-meta">
                                                                <span className="duration">Preview</span>
                                                            </div> */}
                                                        </a>
                                                    </li>
                                                })}

                                            </ul>
                                            {/*                                             
                                            <h3>Stepping into the World of Python</h3>
                                            <ul>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="d-flex justify-content-between align-items-center"
                                                    >
                                                        <span className="courses-name">NumPy Introduction</span>
                                                        <div className="courses-meta">
                                                            <span className="duration">15 Min</span>
                                                            <span className="status locked"><i className='flaticon-lock'></i></span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="d-flex justify-content-between align-items-center"
                                                    >
                                                        <span className="courses-name">NumPy Getting Started</span>
                                                        <div className="courses-meta">
                                                            <span className="duration">30 Min</span>
                                                            <span className="status locked"><i className='flaticon-lock'></i></span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="d-flex justify-content-between align-items-center"
                                                    >
                                                        <span className="courses-name">NumPy Creating Arrays</span>
                                                        <div className="courses-meta">
                                                            <span className="duration">45 Min</span>
                                                            <span className="status locked"><i className='flaticon-lock'></i></span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="d-flex justify-content-between align-items-center"
                                                    >
                                                        <span className="courses-name">NumPy Array Indexing</span>
                                                        <div className="courses-meta">
                                                            <span className="questions">4 questions</span>
                                                            <span className="duration">1 Hour</span>
                                                            <span className="status locked"><i className='flaticon-lock'></i></span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="d-flex justify-content-between align-items-center"
                                                    >
                                                        <span className="courses-name">NumPy Array Slicing</span>
                                                        <div className="courses-meta">
                                                            <span className="duration">1.5 Hour</span>
                                                            <span className="status locked"><i className='flaticon-lock'></i></span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <h3>Python MySQL</h3>
                                            <ul>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="d-flex justify-content-between align-items-center"
                                                    >
                                                        <span className="courses-name">Python MySQL</span>
                                                        <div className="courses-meta">
                                                            <span className="duration">01 Hour</span>
                                                            <span className="status locked"><i className='flaticon-lock'></i></span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="d-flex justify-content-between align-items-center"
                                                    >
                                                        <span className="courses-name">Python MySQL Create Database</span>
                                                        <div className="courses-meta">
                                                            <span className="questions">3 questions</span>
                                                            <span className="duration">1.1 Hour</span>
                                                            <span className="status locked"><i className='flaticon-lock'></i></span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="d-flex justify-content-between align-items-center"
                                                    >
                                                        <span className="courses-name">Python MySQL Create Table</span>
                                                        <div className="courses-meta">
                                                            <span className="duration">1.5 Hour</span>
                                                            <span className="status locked"><i className='flaticon-lock'></i></span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul> */}
                                        </div>
                                    </div>

                                    {/* Rating Tab */}
                                    <div id="tab4" className="tab-pane tabs_item">
                                        <div className="courses-reviews">
                                            <h3>Program Rating</h3>
                                            <div className="rating">
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star"></span>
                                            </div>

                                        </div>

                                        <div className="courses-review-comments">
                                            <h3>3 Reviews</h3>
                                            <div className="user-review">
                                                <img src={user1} alt="course" />

                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                    </div>

                                                    <span className="d-inline-block">James Anderson</span>
                                                </div>

                                                <span className="d-block sub-comment">Excellent</span>
                                                <p>Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.</p>
                                            </div>

                                            <div className="user-review">
                                                <img src={user2} alt="course" />

                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                    </div>

                                                    <span className="d-inline-block">Sarah Taylor</span>
                                                </div>

                                                <span className="d-block sub-comment">Video Quality!</span>
                                                <p>Was really easy to implement and they quickly answer my additional questions!</p>
                                            </div>

                                            <div className="user-review">
                                                <img src={user3} alt="course" />

                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                    </div>

                                                    <span className="d-inline-block">David Warner</span>
                                                </div>

                                                <span className="d-block sub-comment">Perfect Coding!</span>
                                                <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <CoursesDetailsSidebar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseDetailsContent