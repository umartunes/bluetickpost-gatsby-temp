import React, { Component } from 'react'
// import { Link } from 'gatsby'

import CoursesDetailsSidebar from './CoursesDetailsSidebar'

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

        const { program, curriculum, reviews } = this.props

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
                                            <h3>{reviews.length} Reviews</h3>
                                            {reviews.map((review, i) => {
                                                return <div className="user-review">
                                                    <img src={review.authorImage} alt="course" />

                                                    <div className="review-rating">
                                                        <div className="review-stars">
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                        </div>

                                                        <span className="d-inline-block">{review.author}</span>
                                                    </div>

                                                    <span className="d-block sub-comment">{review.heading}</span>
                                                    <p>{review.details}</p>
                                                </div>
                                            })}

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