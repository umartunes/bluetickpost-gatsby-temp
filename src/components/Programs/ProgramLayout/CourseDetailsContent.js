import React, { Component } from 'react'
// import { Link } from 'gatsby'

import CoursesDetailsSidebar from './CoursesDetailsSidebar'

import user1 from '../../../assets/images/user1.jpg'
import user2 from '../../../assets/images/user2.jpg'
import user3 from '../../../assets/images/user3.jpg'

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

        const { program, curriculum } = this.props

        return (
            <div className="courses-details-area pb-100">
                <div className="courses-details-image">
                    <img src={program.courseDetailsImage} alt="course" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="courses-details-desc">
                                <ul className="nav nav-tabs" id="myTab">
                                    <li className="current" >
                                        <a href="/#" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'tab1') }}>Overview</a >
                                    </li>
                                    <li>
                                        <a href="/#" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'tab2') }}>Curriculum</a >
                                    </li>
                                    <li>
                                        <a href="/#" onClick={(e) => { e.preventDefault(); this.openTabSection(e, 'tab4') }}>Reviews</a >
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div id="tab1" className="tab-pane tabs_item">
                                        <div className="courses-overview">
                                            <h3>Course Description</h3>
                                            <p>{program.description}</p>

                                            <h3>Progress & Certification</h3>
                                            <p>{program.certification}</p>

                                            <h3>Who this course is for?</h3>
                                            <p>{program.courseFor}</p>
                                        </div>
                                    </div>

                                    <div id="tab2" className="tab-pane tabs_item">
                                        <div className="courses-curriculum">

                                            <h3>Curriculum</h3>

                                            <ul>
                                                {curriculum.map((cur, i) => {
                                                    return <li key={i}>
                                                        <a
                                                            href="/"
                                                            onClick={(e) => e.preventDefault()}
                                                            className="d-flex justify-content-between align-items-center"
                                                        >
                                                            <span className="courses-name">
                                                                <span>{cur.heading}</span>
                                                                <br /><br />
                                                                <span className="text-muted">{cur.description}</span>
                                                            </span>

                                                            {/* <div className="courses-meta">
                                                                <span className="duration">Preview</span>
                                                            </div> */}
                                                        </a>
                                                    </li>
                                                })}

                                            </ul>

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
                            <CoursesDetailsSidebar program={program} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseDetailsContent